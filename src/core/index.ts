console.log("NeoCord loaded!");
const neoCord = {
  version: "1.0.0",
  init: () => {
    console.log("Initializing NeoCord...");
    // Add Discord patching logic here
  }
};
neoCord.init();
import { patchDiscord } from "./patcher";
import { loadPlugins } from "../plugins/loader";
import { injectUI } from "../ui/injector";
import { logger } from "../utils/logger";

console.log("NeoCord v1.0.0 starting...");
logger.info("Initializing NeoCord...");

const neoCord = {
  version: "1.0.0",
  plugins: new Map<string, any>(),
  async init() {
    try {
      // Patch Discord to disable telemetry
      await patchDiscord();
      // Load plugins
      await loadPlugins();
      // Inject UI enhancements
      injectUI();
      logger.info("NeoCord initialized successfully!");
    } catch (error) {
      logger.error("Initialization failed:", error);
    }
  }
};

neoCord.init();
export default neoCord;
