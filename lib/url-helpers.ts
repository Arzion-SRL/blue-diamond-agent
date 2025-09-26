import { BRANDING } from "./constants";

/**
 * Helper function to build URLs while preserving query parameters
 * Handles special cases like no-branding parameter correctly
 */
export function buildUrlWithParams(
  baseUrl: string,
  searchParams: URLSearchParams
): string {
  const params = new URLSearchParams();

  // Preserve all parameters, handling no-branding specially
  searchParams.forEach((value, key) => {
    if (key === BRANDING.NO_BRANDING_PARAM) {
      // For no-branding, we want just the key without value
      params.set(key, "");
    } else {
      params.set(key, value);
    }
  });

  // Build URL, handling no-branding parameter correctly
  let queryString = "";
  if (params.has(BRANDING.NO_BRANDING_PARAM)) {
    queryString = BRANDING.NO_BRANDING_PARAM;
    params.delete(BRANDING.NO_BRANDING_PARAM);

    // Add other parameters if they exist
    const otherParams = params.toString();
    if (otherParams) {
      queryString += "&" + otherParams;
    }
  } else {
    queryString = params.toString();
  }

  return `${baseUrl}${queryString ? `?${queryString}` : ""}`;
}
