# LSL visualization (habs-react-kit)

Shared TypeScript contracts for operator ↔ lab-station-bridge LSL preview and future visualization modes.

## Files

- **`src/shared-types/lsl-viz.ts`** — `LslStreamDescriptor`, `LslVizListAck`, `LslVizListStreamsPayload`, `LslVizStartPayload`, `LslVizBatchPayload`, **`LslVizModeId`**.
- **`src/shared-types/socket.ts`** — extends **`OperatorClientEvents`** with `lslVizListStreams`, `lslVizStart`, `lslVizStop`; extends **`OperatorServerEvents`** with `LSL_VIZ_BATCH`, `LSL_VIZ_ERROR`.
- **`src/index.ts`** — re-exports `shared-types/lsl-viz`.

## `LslVizModeId`

String union used as optional **`vizMode`** on `lslVizStart`. Intended for client/server alignment as UIs grow:

| Value | Intent |
|--------|--------|
| `eeg_signals` | Multichannel EEG traces |
| `headset_quality` | Participant setup / sensor quality |
| `eeg_and_markers` | Time-aligned EEG and markers |
| `raw_debug` | Inspect throttled batches (default scaffolding) |

Adding a mode requires updating this union, the protocol-player registry (`lslVizModes.ts`), and any UI you add.

## Consumers

After changing these types, publish or link **`habs-react-kit`**, then reinstall in **lab-station-bridge** and **protocol-player** so builds stay type-safe.

## Related docs

- [protocol-player `lsl-visualization.md`](../../protocol-player/docs/lsl-visualization.md)
- [lab-station-bridge `lsl-visualization.md`](../../lab-station-bridge-launcher/lab-station-bridge/docs/lsl-visualization.md)
