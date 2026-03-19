import { useMemo } from "react";
import { BaseChart } from "./BaseChart";
import { DEFAULT_COLORS } from "../../utils/theme";
import type { ChartSize } from "../../types/chart";
import type { EChartsOption } from "echarts";

export type PieSlice = {
  name: string;
  value: number;
};

export type PieChartProps = ChartSize & {
  /** Chart title displayed at the top */
  title?: string;
  /** Pie slices */
  data: PieSlice[];
  /** Show as donut (ring) chart */
  donut?: boolean;
  /** Show the tooltip on hover */
  showTooltip?: boolean;
  /** Show the legend */
  showLegend?: boolean;
  /** Custom colors (overrides defaults) */
  colors?: string[];
  /** Additional CSS class */
  className?: string;
  /** Show loading spinner */
  loading?: boolean;
};

export function PieChart({
  title,
  data,
  donut = false,
  showTooltip = true,
  showLegend = true,
  colors = DEFAULT_COLORS,
  className,
  loading,
  width,
  height,
}: PieChartProps) {
  const option = useMemo<EChartsOption>(() => {
    return {
      title: title ? { text: title, left: "center" } : undefined,
      tooltip: showTooltip
        ? {
            trigger: "item",
            formatter: "{b}: {c} ({d}%)",
          }
        : undefined,
      legend: showLegend
        ? { orient: "horizontal", bottom: 0 }
        : undefined,
      color: colors,
      series: [
        {
          type: "pie",
          radius: donut ? ["40%", "70%"] : "70%",
          data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
          label: {
            formatter: "{b}: {d}%",
          },
        },
      ],
    };
  }, [title, data, donut, showTooltip, showLegend, colors]);

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
