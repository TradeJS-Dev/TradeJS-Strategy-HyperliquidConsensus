# @tradejs/strategy-hyperliquid-consensus

TradeJS strategy plugin providing `HyperliquidConsensus`.

## Strategy overview

`HyperliquidConsensus` uses normalized Hyperliquid whale-position context
rather than price shape alone. It requires enough unique tracked participants,
data coverage, position-aware notional, and directional agreement before
entering, and can exit when consensus reverses or positions are reduced.

## Logic at a glance

![HyperliquidConsensus strategy logic](https://raw.githubusercontent.com/TradeJS-Dev/TradeJS-Strategy-HyperliquidConsensus/main/docs/strategy-logic.svg)

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
