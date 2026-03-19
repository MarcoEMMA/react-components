import type { Meta, StoryObj } from "@storybook/react-vite";
import { LineChart } from "../src/components/charts/LineChart";

const meta: Meta<typeof LineChart> = {
  title: "Charts/LineChart",
  component: LineChart,
  args: {
    height: 400,
    width: 600,
    showTooltip: true,
    showLegend: true,
    variant: "default",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "compact", "dashboard"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof LineChart>;

export const Basic: Story = {
  args: {
    title: "Monthly Revenue",
    xLabels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    series: [
      {
        name: "Revenue",
        data: [820, 932, 901, 934, 1290, 1330],
      },
    ],
  },
};

export const MultipleSeries: Story = {
  args: {
    title: "Sales Comparison",
    xLabels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    series: [
      {
        name: "2024",
        data: [820, 932, 901, 934, 1290, 1330],
        smooth: true,
      },
      {
        name: "2025",
        data: [620, 732, 1101, 1134, 1190, 1530],
        smooth: true,
      },
    ],
  },
};

export const AreaChart: Story = {
  args: {
    title: "Website Traffic",
    xLabels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    series: [
      {
        name: "Visitors",
        data: [150, 230, 224, 218, 135, 147, 260],
        smooth: true,
        showArea: true,
        areaOpacity: 0.2,
        color: "#5470c6",
      },
    ],
  },
};

export const Compact: Story = {
  args: {
    xLabels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    series: [
      {
        name: "Errors",
        data: [5, 12, 3, 8, 2],
        color: "#ee6666",
      },
    ],
    variant: "compact",
    showLegend: false,
    height: 200,
    width: 350,
  },
};
