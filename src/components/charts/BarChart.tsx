import { useMemo } from "react";
import { BaseChart } from "./BaseChart";
import { DEFAULT_COLORS, VARIANT_CONFIG } from "../../utils/theme";
import type { ChartSize, ChartVariant } from "../../types/chart";
import type { EChartsOption } from "echarts";

export type BarSeriesConfig = {
  name: string;
  data: number[];
  color?: string;
  /** Stack group name — bars with the same stack value are stacked */
  stack?: string;
};

export type BarChartProps = ChartSize & {
  /** Chart title displayed at the top */
  title?: string;
  /** Labels for the X axis (categories) */
  xLabels: string[];
  /** One or more data series */
  series: BarSeriesConfig[];
  /** Show the tooltip on hover */
  showTooltip?: boolean;
  /** Show the legend */
  showLegend?: boolean;
  /** Display bars horizontally instead of vertically */
  horizontal?: boolean;
  /** Layout variant */
  variant?: ChartVariant;
  /** Custom colors (overrides defaults) */
  colors?: string[];
  /** Additional CSS class */
  className?: string;
  /** Show loading spinner */
  loading?: boolean;
};

export function BarChart({
  title,
  xLabels,
  series,
  showTooltip = true,
  showLegend = true,
  horizontal = false,
  variant = "default",
  colors = DEFAULT_COLORS,
  className,
  loading,
  width,
  height,
}: BarChartProps) {
  const option = useMemo<EChartsOption>(() => {
    const v = VARIANT_CONFIG[variant];

    const categoryAxis = {
      type: "category" as const,
      data: xLabels,
      axisLabel: { fontSize: v.fontSize },
    };

    const valueAxis = {
      type: "value" as const,
      axisLabel: { fontSize: v.fontSize },
    };

    return {
      title: title ? { text: title, left: "center" } : undefined,
      tooltip: showTooltip ? { trigger: "axis" } : undefined,
      legend: showLegend
        ? { top: title ? 30 : 0, data: series.map((s) => s.name) }
        : undefined,
      grid: v.grid,
      color: colors,
      xAxis: horizontal ? valueAxis : categoryAxis,
      yAxis: horizontal ? categoryAxis : valueAxis,
      series: series.map((s) => ({
        name: s.name,
        type: "bar" as const,
        data: s.data,
        stack: s.stack,
        itemStyle: s.color ? { color: s.color } : undefined,
      })),
    };
  }, [
    title,
    xLabels,
    series,
    showTooltip,
    showLegend,
    horizontal,
    variant,
    colors,
  ]);

  return (
    <BaseChart
      option={option}
      className={className}
      loading={loading}
      width={width}
      height={height}
    />
  );
}
