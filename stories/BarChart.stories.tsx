import type { Meta, StoryObj } from "@storybook/react-vite";
import { BarChart } from "../src/components/charts/BarChart";

const meta: Meta<typeof BarChart> = {
  title: "Charts/BarChart",
  component: BarChart,
  args: {
    height: 400,
    width: 600,
    showTooltip: true,
    showLegend: true,
    variant: "default",
    horizontal: false,
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "compact", "dashboard"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof BarChart>;

export const Basic: Story = {
  args: {
    title: "Quarterly Sales",
    xLabels: ["Q1", "Q2", "Q3", "Q4"],
    series: [
      {
        name: "Sales",
        data: [320, 302, 341, 374],
      },
    ],
  },
};

export const Grouped: Story = {
  args: {
    title: "Department Budget",
    xLabels: ["Engineering", "Design", "Marketing", "Sales"],
    series: [
      {
        name: "2024",
        data: [150, 80, 120, 90],
      },
      {
        name: "2025",
        data: [180, 95, 110, 105],
      },
    ],
  },
};

export const Stacked: Story = {
  args: {
    title: "Issue Tracker",
    xLabels: ["Jan", "Feb", "Mar", "Apr", "May"],
    series: [
      {
        name: "Open",
        data: [12, 15, 8, 10, 6],
        stack: "issues",
        color: "#ee6666",
      },
      {
        name: "In Progress",
        data: [5, 8, 12, 7, 4],
        stack: "issues",
        color: "#fac858",
      },
      {
        name: "Closed",
        data: [20, 18, 25, 30, 35],
        stack: "issues",
        color: "#91cc75",
      },
    ],
  },
};

export const Horizontal: Story = {
  args: {
    title: "Team Performance",
    xLabels: ["Alice", "Bob", "Carol", "Dave"],
    series: [
      {
        name: "Score",
        data: [85, 72, 93, 68],
      },
    ],
    horizontal: true,
  },
};
