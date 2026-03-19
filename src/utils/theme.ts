export const DEFAULT_COLORS = [
  "#5470c6",
  "#91cc75",
  "#fac858",
  "#ee6666",
  "#73c0de",
  "#3ba272",
  "#fc8452",
  "#9a60b4",
  "#ea7ccc",
];

export const VARIANT_CONFIG = {
  default: {
    grid: { top: 60, right: 30, bottom: 40, left: 50 },
    fontSize: 12,
  },
  compact: {
    grid: { top: 30, right: 15, bottom: 25, left: 40 },
    fontSize: 10,
  },
  dashboard: {
    grid: { top: 50, right: 20, bottom: 30, left: 45 },
    fontSize: 11,
  },
} as const;
