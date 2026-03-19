import type { EChartsOption } from "echarts";

export type ChartSize = {
  width?: number | string;
  height?: number | string;
};

export type BaseChartProps = ChartSize & {
  className?: string;
  loading?: boolean;
  theme?: string | object;
  option?: EChartsOption;
};

export type DataPoint = {
  label: string;
  value: number;
};

export type SeriesStyle = {
  color?: string;
  smooth?: boolean;
  lineWidth?: number;
  showArea?: boolean;
  areaOpacity?: number;
};

export type ChartVariant = "default" | "compact" | "dashboard";
