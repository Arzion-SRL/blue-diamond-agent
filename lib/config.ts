// Detect development mode more reliably
const isDev = process.env.NODE_ENV === 'development' || process.env.NODE_ENV !== 'production';

export const config = {
  isDevelopment: isDev,
  isProduction: process.env.NODE_ENV === "production",
  isTest: process.env.NODE_ENV === "test",

  // Debug settings
  debug: {
    enabled: isDev,
    showDebugPanel: isDev,
    logLevel: isDev ? "debug" : "error",
  },

  // API settings
  api: {
    mcpServerUrl: process.env.MCP_SERVER_URL || "",
  },

  // UI settings
  ui: {
    showDevBadge: isDev,
    enableHotReload: isDev,
  },
} as const;
