import { BRANDING } from "./constants";

/**
 * Helper functions for branding logic
 * Determines when to hide branding based on URL parameters or host
 */

/**
 * Determines if branding should be hidden based on search params and current host
 * Returns true if:
 * - ?no-branding parameter is present
 * - host matches the configured travel app domain
 */
export function shouldHideBranding(searchParams: URLSearchParams): boolean {
  // Check for no-branding parameter
  const hasNoBrandingParam = searchParams.get(BRANDING.NO_BRANDING_PARAM) !== null;

  // Check if current host is travel app domain
  const isTravelAppDomain = typeof window !== "undefined" &&
    window.location.hostname === BRANDING.TRAVEL_DOMAIN;

  return hasNoBrandingParam || isTravelAppDomain;
}
