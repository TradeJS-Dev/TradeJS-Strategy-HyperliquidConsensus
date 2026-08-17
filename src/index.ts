import { defineStrategyPlugin } from "@tradejs/core/config";
import type { StrategyConfig, StrategyRegistryEntry } from "@tradejs/types";
import { config as hyperliquidConsensusDefaultConfig } from "./HyperliquidConsensus/config";
import { HyperliquidConsensusStrategyDefinition } from "./HyperliquidConsensus/strategy";

export const strategyEntries: StrategyRegistryEntry[] = [
  HyperliquidConsensusStrategyDefinition,
];

const defaultConfigs: Record<string, StrategyConfig> = {
  HyperliquidConsensus: hyperliquidConsensusDefaultConfig,
};

export const getBuiltInStrategyDefaultConfig = (
  strategyName: string,
): StrategyConfig | undefined => defaultConfigs[strategyName];

export { HyperliquidConsensusStrategyDefinition } from "./HyperliquidConsensus/strategy";
export { hyperliquidConsensusDefaultConfig };
export { hyperliquidConsensusManifest } from "./HyperliquidConsensus/manifest";
export { hyperliquidConsensusAiAdapter } from "./HyperliquidConsensus/adapters/ai";

export default defineStrategyPlugin({ strategyEntries });
