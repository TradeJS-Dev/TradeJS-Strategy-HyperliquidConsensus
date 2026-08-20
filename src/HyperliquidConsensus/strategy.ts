import { createStrategyConfigParser } from "@tradejs/strategy-kit/config";
import type { ValidatedStrategyRegistryEntry } from "@tradejs/strategy-kit/config";
import { HyperliquidConsensusConfig, config as DEFAULT_CONFIG } from "./config";
import { createHyperliquidConsensusCore } from "./core";
import { hyperliquidConsensusManifest } from "./manifest";

export const HyperliquidConsensusStrategyDefinition: ValidatedStrategyRegistryEntry<HyperliquidConsensusConfig> =
  {
    defaults: DEFAULT_CONFIG,
    parseConfig: createStrategyConfigParser({
      strategyName: "HyperliquidConsensus",
      defaults: DEFAULT_CONFIG,
    }),
    createCore: createHyperliquidConsensusCore,
    manifest: hyperliquidConsensusManifest,
  };
