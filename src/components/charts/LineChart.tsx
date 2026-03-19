import { useMemo } from "react";
import { BaseChart } from "./BaseChart";
import { DEFAULT_COLORS, VARIANT_CONFIG } from "../../utils/theme";
import type { ChartSize, ChartVariant, SeriesStyle } from "../../types/chart";
import type { EChartsOption } from "echarts";

export type LineSeriesConfig = SeriesStyle & {
  name: string;
  data: number[];
};

export type LineChartProps = ChartSize & {
  /** Chart title displayed at the top */
  title?: string;
  /** Labels for the X axis (categories) */
  xLabels: string[];
  /** One or more data series to display */
  series: LineSeriesConfig[];
  /** Show the tooltip on hover */
  showTooltip?: boolean;
  /** Show the legend */
  showLegend?: boolean;
  /** Layout variant */
  variant?: ChartVariant;
  /** Custom colors (overrides defaults) */
  colors?: string[];
  /** Additional CSS class */
  className?: string;
  /** Show loading spinner */
  loading?: boolean;
};

export function LineChart({
  title,
  xLabels,
  series,
  showTooltip = true,
  showLegend = true,
  variant = "default",
  colors = DEFAULT_COLORS,
  className,
  loading,
  width,
  height,
}: LineChartProps) {
  const option = useMemo<EChartsOption>(() => {
    const v = VARIANT_CONFIG[variant];

    return {
      title: title ? { text: title, left: "center" } : undefined,
      tooltip: showTooltip ? { trigger: "axis" } : undefined,
      legend: showLegend
        ? { top: title ? 30 : 0, data: series.map((s) => s.name) }
        : undefined,
      grid: v.grid,
      color: colors,
      xAxis: {
        type: "category",
        data: xLabels,
        axisLabel: { fontSize: v.fontSize },
      },
      yAxis: {
        type: "value",
        axisLabel: { fontSize: v.fontSize },
      },
      series: series.map((s) => ({
        name: s.name,
        type: "line" as const,
        data: s.data,
        smooth: s.smooth ?? false,
        lineStyle: {
          width: s.lineWidth ?? 2,
          color: s.color,
        },
        itemStyle: s.color ? { color: s.color } : undefined,
        areaStyle: s.showArea
          ? { opacity: s.areaOpacity ?? 0.3 }
          : undefined,
      })),
    };
  }, [title, xLabels, series, showTooltip, showLegend, variant, colors]);

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
