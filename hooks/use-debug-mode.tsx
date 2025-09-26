import { useState, useEffect } from "react";
import { config } from "@/lib/config";

export function useDebugMode() {
  const [isDebugAvailable, setIsDebugAvailable] = useState(false);
  const [showDebug, setShowDebug] = useState(false);

  useEffect(() => {
    // Solo en desarrollo
    setIsDebugAvailable(config.debug.enabled);
  }, []);

  const toggleDebug = () => {
    if (isDebugAvailable) {
      setShowDebug(!showDebug);
    }
  };
  return {
    isDebugAvailable,
    showDebug: isDebugAvailable && showDebug,
    toggleDebug,
  };
}
