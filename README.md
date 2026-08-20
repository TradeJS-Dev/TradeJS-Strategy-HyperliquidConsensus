# @tradejs/strategy-hyperliquid-consensus

TradeJS strategy plugin providing `HyperliquidConsensus`.

## Strategy overview

`HyperliquidConsensus` uses normalized Hyperliquid whale-position context
rather than price shape alone. It requires enough unique tracked participants,
data coverage, position-aware notional, and directional agreement before
entering, and can exit when consensus reverses or positions are reduced.

## Logic at a glance

![HyperliquidConsensus strategy logic](https://raw.githubusercontent.com/TradeJS-Dev/TradeJS-Strategy-HyperliquidConsensus/main/docs/strategy-logic.svg)

## Signal on an example chart

Here the ticker is context rather than a chart pattern: the signal appears when fresh, sufficiently broad whale-position evidence clears the long-consensus threshold.

![HyperliquidConsensus signal on an illustrative ticker chart](https://raw.githubusercontent.com/TradeJS-Dev/TradeJS-Strategy-HyperliquidConsensus/main/docs/signal-example.svg)

The illustration is schematic, not market data. Exact thresholds, confirmation
rules, and risk parameters come from the active TradeJS strategy config.

## Install

```bash
yarn add @tradejs/strategy-hyperliquid-consensus
```

Register the package in `tradejs.config.ts`:

```ts
import { defineConfig } from "@tradejs/core/config";

export default defineConfig({
  strategies: ["@tradejs/strategy-hyperliquid-consensus"],
});
```

The package exports `strategyEntries` for the TradeJS plugin loader together
with its strategy definitions, manifests, default configs, and public AI/ML
adapters. Strategy implementation changes are released from this repository,
independently of the TradeJS engine.

## Development

```bash
yarn install --immutable
yarn checks
```

Publishing is beta-first and delegated to the pinned
`TradeJS-Workflows@v1` reusable workflow. A relevant push publishes a unique
prerelease and moves the npm `beta` tag only after the production-like Project
image passes. The current verified beta is promoted to one stable `latest`
release by the weekly automation; production never consumes prereleases.

Keywords: ai, claude, codex.

## Runtime host contract

All `@tradejs/*` runtime packages are peer dependencies. The consuming TradeJS Project owns their exact installed versions and package manifest, so this package never loads a hidden nested engine, types package, indicator package, or Strategy Kit. Repository builds use matching dev dependencies only.
