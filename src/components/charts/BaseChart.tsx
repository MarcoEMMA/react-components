import { useEffect, useRef, useCallback } from "react";
import * as echarts from "echarts";
import type { ECharts, EChartsOption } from "echarts";
import type { BaseChartProps } from "../../types/chart";

/**
 * Low-level ECharts wrapper. Handles init, update, resize, and cleanup.
 * Not intended for direct use by designers — use LineChart, BarChart, etc. instead.
 */
export function BaseChart({
  option,
  width = "100%",
  height = 400,
  className,
  loading = false,
  theme,
}: BaseChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<ECharts | null>(null);

  const initChart = useCallback(() => {
    if (!containerRef.current) return;

    if (chartRef.current) {
      chartRef.current.dispose();
    }

    chartRef.current = echarts.init(containerRef.current, theme);

    if (option) {
      chartRef.current.setOption(option);
    }
  }, [theme]);

  useEffect(() => {
    initChart();

    const handleResize = () => {
      chartRef.current?.resize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chartRef.current?.dispose();
      chartRef.current = null;
    };
  }, [initChart]);

  useEffect(() => {
    if (!chartRef.current || !option) return;
    chartRef.current.setOption(option, { notMerge: true });
  }, [option]);

  useEffect(() => {
    if (!chartRef.current) return;

    if (loading) {
      chartRef.current.showLoading();
    } else {
      chartRef.current.hideLoading();
    }
  }, [loading]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ width, height }}
    />
  );
}
