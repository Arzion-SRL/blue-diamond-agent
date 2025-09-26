#!/bin/bash

# Exit on error
set -e

# Environment variables
export ECR_REGISTRY="344965681991.dkr.ecr.us-east-1.amazonaws.com/arz-hyperfunnel-frontend"
export ECR_REPOSITORY_NAME="arz-hyperfunnel-backend"
export AWS_REGION="us-east-1"
export RELEASE_VERSION=""

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'


print_message() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

print_error() {
    echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')] ERROR:${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[$(date +'%Y-%m-%d %H:%M:%S')] WARNING:${NC} $1"
}


main() {
    print_message "Starting build and push process..."


    for tool in aws docker; do
        if ! command -v $tool &> /dev/null; then
            print_error "$tool is not installed. Please install it first."
            exit 1
        fi
    done

    aws configure set default.region $AWS_REGION


    print_message "Logging into ECR..."
    aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $ECR_REGISTRY

    if [ $? -ne 0 ]; then
        print_error "Failed to login to ECR"
        exit 1
    fi

    if [ -z "$PIPELINE_EXEC_ID" ]; then
        PIPELINE_EXEC_ID="v-$(date +%Y%m%d-%H%M%S)"
        print_warning "PIPELINE_EXEC_ID not set, using: $PIPELINE_EXEC_ID"
    fi

    if [ -f "version" ]; then
        VERSION_FILE_CONTENT=$(cat version)
        RELEASE_VERSION="v${VERSION_FILE_CONTENT}-$(echo $PIPELINE_EXEC_ID | sed 's/.*-\(.*\)$/\1/')"
    else
        print_error "version file not found"
        exit 1
    fi

    print_message "Creating docker image..."
    print_message "Version: $RELEASE_VERSION"


    docker build --platform linux/amd64 -t $ECR_REGISTRY:$RELEASE_VERSION .

    if [ $? -ne 0 ]; then
        print_error "Failed to build Docker image"
        exit 1
    fi

    print_message "Docker image built successfully"


    print_message "Pushing docker image ${ECR_REGISTRY}:${RELEASE_VERSION}"
    docker push $ECR_REGISTRY:$RELEASE_VERSION

    if [ $? -ne 0 ]; then
        print_error "Failed to push Docker image"
        exit 1
    fi

    print_message "Build and push completed successfully!"
    print_message "Docker image: ${ECR_REGISTRY}:${RELEASE_VERSION}"
}

while [[ $# -gt 0 ]]; do
    case $1 in
        --pipeline-exec-id)
            PIPELINE_EXEC_ID="$2"
            shift 2
            ;;
        --help)
            echo "Usage: $0 [options]"
            echo "Options:"
            echo "  --pipeline-exec-id ID    Set the pipeline execution ID (default: local-timestamp)"
            echo "  --help                   Show this help message"
            exit 0
            ;;
        *)
            print_error "Unknown option: $1"
            echo "Use --help for usage information"
            exit 1
            ;;
    esac
done

main
