import React from "react"
import {
  Pie,
  PieChart as ReChartsDonutChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts"

const availableChartColors = [
  "#ce77e3", 
  "#10b981", 
  "#3b82f6", 
  "#f59e0b", 
  "#ef4444", 
  "#6366f1", 
  "#ec4899"
]

interface ChartTooltipProps {
  active: boolean | undefined
  payload: any[]
  valueFormatter: (value: number) => string
}

const ChartTooltip = ({
  active,
  payload,
  valueFormatter,
}: ChartTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-md border border-gray-200 bg-white p-2 text-sm shadow-md dark:border-gray-800 dark:bg-gray-950">
        <div className="space-y-1 px-4 py-2">
          {payload.map((item: any, index: number) => (
            <div
              key={`id-${index}`}
              className="flex items-center justify-between space-x-8"
            >
              <div className="flex items-center space-x-2">
                <span
                  aria-hidden="true"
                  className="size-2 shrink-0 rounded-full"
                  style={{ backgroundColor: item.payload.fill || availableChartColors[index] }}
                />
                <p className="text-right whitespace-nowrap text-gray-700 dark:text-gray-300">
                  {item.name}
                </p>
              </div>
              <p className="text-right font-medium whitespace-nowrap tabular-nums text-gray-900 dark:text-gray-50">
                {valueFormatter(item.value)}
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  }
  return null
}

type DonutChartVariant = "donut" | "pie"

interface DonutChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Record<string, any>[]
  category: string
  value: string
  variant?: DonutChartVariant
  valueFormatter?: (value: number) => string
}

export const DonutChart = React.forwardRef<HTMLDivElement, DonutChartProps>(
  (
    {
      data = [],
      value,
      category,
      variant = "donut",
      valueFormatter = (val: number) => val.toString(),
      className,
      ...other
    },
    forwardedRef,
  ) => {
    const isDonut = variant === "donut"

    const parsedData = data.map((item, index) => ({
      ...item,
      fill: availableChartColors[index % availableChartColors.length]
    }))

    return (
      <div ref={forwardedRef} className={`w-full h-48 ${className}`} {...other}>
        <ResponsiveContainer width="100%" height="100%">
          <ReChartsDonutChart>
            <Tooltip
              wrapperStyle={{ outline: "none" }}
              content={
                <ChartTooltip
                  active={true}
                  payload={[]}
                  valueFormatter={valueFormatter}
                />
              }
            />
            <Pie
              data={parsedData}
              cx="50%"
              cy="50%"
              startAngle={90}
              endAngle={-270}
              innerRadius={isDonut ? "65%" : "0%"}
              outerRadius="100%"
              dataKey={value}
              nameKey={category}
              stroke=""
              style={{ outline: "none" }}
            />
          </ReChartsDonutChart>
        </ResponsiveContainer>
      </div>
    )
  }
)

DonutChart.displayName = "DonutChart"
