"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Building2, Zap, UserStar, Volume2 } from "lucide-react";
import Link from "next/link";
import HyperfunnelIcon from "@/components/ui/hyperfunnel-icon";
import { useSearchParams } from "next/navigation";
import { buildUrlWithParams } from "@/lib/url-helpers";
import { shouldHideBranding } from "@/lib/branding-helpers";

export default function HomeContent() {
  const searchParams = useSearchParams();
  const hideBranding = shouldHideBranding(searchParams);

  const buildTravelAssistantUrl = () => {
    return buildUrlWithParams("/travel-assistant", searchParams);
  };

  return (
    <div className="min-h-screen">
      {/* Desktop Layout */}
      <div className="hidden lg:flex min-h-screen">
        {/* Left Side - Hero Content */}
        <div className="flex-1 flex items-center justify-center p-12">
          <div className="max-w-lg">
            <div className="mb-8">
              {/* Logo/Icon */}
              <div className="w-24 h-24 bg-[#F9F9FB] rounded-full flex items-center justify-center mb-8">
                {hideBranding ? (
                  <UserStar size={64} className="text-gray-600" />
                ) : (
                  <HyperfunnelIcon size={64} />
                )}
              </div>

              {/* Headline */}
              <h1 className="text-6xl font-bold text-gray-800 mb-4 leading-tight">
                Your{" "}
                <span className="bg-gradient-to-r from-[#FFB6FB] via-[#FBB4CD] to-[#AFE7FF] bg-clip-text text-transparent">
                  AI-Powered
                </span>
                <br />
                Travel Assistant
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Discover perfect hotels through smart conversations, curated
                recommendations, and instant booking - all powered by AI to make
                your travel planning effortless.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <Link href={buildTravelAssistantUrl()}>
                <Button
                  size="lg"
                  className="h-14 px-8 text-lg rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-bold w-full"
                >
                  Start planning your trip
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side - Features Card */}
        <div className="flex-1 flex items-center justify-center p-12">
          <Card className="max-w-md w-full border-0 gap-0 rounded-xl bg-gray-50/80">
            <CardHeader className="px-6 py-4 rounded-tl-xl rounded-tr-xl">
              <CardTitle className="text-2xl font-bold text-gray-800">
                Why Choose us?
              </CardTitle>
              <CardDescription className="text-gray-600 text-base">
                Experience the future of travel planning
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 border-1 border-gray-100 rounded-xl p-6 bg-white">
              {/* Feature 1: Smart conversations */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gray-100 rounded-4xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-gray-500" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">
                    Smart conversations
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Chat naturally to find your perfect hotel with AI-powered
                    recommendations
                  </p>
                  <Badge
                    variant="outline"
                    className="border-gray-300 text-gray-700"
                  >
                    AI-Powered
                  </Badge>
                </div>
              </div>

              {/* Feature 2: Best hotels */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gray-100 rounded-4xl flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-gray-500" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Best hotels</h3>
                  <p className="text-gray-700 mb-2">
                    Curated options that match your preferences and budget
                    perfectly
                  </p>
                  <Badge
                    variant="outline"
                    className="border-gray-300 text-gray-700"
                  >
                    Curated
                  </Badge>
                </div>
              </div>

              {/* Feature 3: Instant bookings */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gray-100 rounded-4xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-gray-500" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Instant bookings</h3>
                  <p className="text-gray-700 mb-2">
                    Book in seconds with personalized recommendations and
                    real-time availability
                  </p>
                  <Badge
                    variant="outline"
                    className="border-gray-300 text-gray-700"
                  >
                    Lightning fast
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-sm mx-auto">
          <Card className="relative bg-gray-50/80 border-0 shadow-lg">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-[#F9F9FB] rounded-full flex items-center justify-center mx-auto mb-6">
                {hideBranding ? (
                  <UserStar size={48} className="text-gray-600" />
                ) : (
                  <HyperfunnelIcon size={48} />
                )}
              </div>
              <CardTitle className="text-3xl mb-2 font-bold text-gray-800">
                Your{" "}
                <span className="bg-gradient-to-r from-[#FFB6FB] via-[#FBB4CD] to-[#AFE7FF] bg-clip-text text-transparent">
                  AI-Powered
                </span>
                <br />
                Travel Assistant
              </CardTitle>
              <CardDescription className="text-lg text-gray-700">
                Discover perfect hotels through smart conversations, curated
                recommendations, and instant booking.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Features List */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">
                      Smart conversations
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Chat naturally to find your perfect hotel
                    </p>
                    <Badge
                      variant="outline"
                      className="border-gray-300 text-gray-700"
                    >
                      AI-Powered
                    </Badge>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">
                      Best hotels
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Curated options that match your preferences
                    </p>
                    <Badge
                      variant="outline"
                      className="border-gray-300 text-gray-700"
                    >
                      Curated
                    </Badge>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">
                      Instant bookings
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Book in seconds with personalized recommendations
                    </p>
                    <Badge
                      variant="outline"
                      className="border-gray-300 text-gray-700"
                    >
                      Lightning fast
                    </Badge>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <Link href={buildTravelAssistantUrl()} className="block">
                  <Button
                    size="lg"
                    className="w-full h-14 text-lg rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-bold"
                  >
                    Start planning your trip
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
