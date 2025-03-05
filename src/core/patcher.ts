import { logger } from "../utils/logger";

export async function patchDiscord() {
  logger.info("Patching Discord...");

  // Example: Intercept fetch requests to block telemetry
  const originalFetch = window.fetch;
  window.fetch = async (url: string, options: RequestInit) => {
    if (url.includes("sentry.io") || url.includes("discord.com/api/v9/science")) {
      logger.info(`Blocked telemetry request to ${url}`);
      return new Response(null, { status: 200 });
    }
    return originalFetch(url, options);
  };
}
