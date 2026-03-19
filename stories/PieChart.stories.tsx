import type { Meta, StoryObj } from "@storybook/react-vite";
import { PieChart } from "../src/components/charts/PieChart";

const meta: Meta<typeof PieChart> = {
  title: "Charts/PieChart",
  component: PieChart,
  args: {
    height: 400,
    width: 500,
    showTooltip: true,
    showLegend: true,
    donut: false,
  },
};

export default meta;
type Story = StoryObj<typeof PieChart>;

export const Basic: Story = {
  args: {
    title: "Browser Market Share",
    data: [
      { name: "Chrome", value: 65 },
      { name: "Safari", value: 18 },
      { name: "Firefox", value: 8 },
      { name: "Edge", value: 5 },
      { name: "Other", value: 4 },
    ],
  },
};

export const Donut: Story = {
  args: {
    title: "Revenue by Region",
    data: [
      { name: "Europe", value: 42 },
      { name: "North America", value: 31 },
      { name: "Asia", value: 18 },
      { name: "Other", value: 9 },
    ],
    donut: true,
  },
};

export const CustomColors: Story = {
  args: {
    title: "Project Status",
    data: [
      { name: "Completed", value: 45 },
      { name: "In Progress", value: 30 },
      { name: "Planned", value: 25 },
    ],
    donut: true,
    colors: ["#91cc75", "#fac858", "#73c0de"],
  },
};
