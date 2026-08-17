# @tradejs/strategy-hyperliquid-consensus

TradeJS strategy plugin providing `HyperliquidConsensus`.

## Strategy overview

`HyperliquidConsensus` uses normalized Hyperliquid whale-position context
rather than price shape alone. It requires enough unique tracked participants,
data coverage, position-aware notional, and directional agreement before
entering, and can exit when consensus reverses or positions are reduced.

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

Publishing is triggered by a GitHub release and delegated to the pinned
`TradeJS-Workflows@v1` reusable workflow.

Keywords: ai, claude, codex.
