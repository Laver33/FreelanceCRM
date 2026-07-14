// src/components/Tremor/AreaChart.tsx
"use client"

import React from "react"
import {
  Area,
  CartesianGrid,
  AreaChart as RechartsAreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"


const availableChartColors = [
  "var(--color-primary)",   
  "var(--color-secondary)", 
  "#3b82f6", 
  "#f59e0b", 
  "#ef4444", 
  "#6366f1"
]


const ChartTooltip = ({ active, payload, valueFormatter }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-md dark:border-gray-800 dark:bg-gray-950">
        <p className="font-medium text-gray-500 mb-1">{payload[0].payload.date}</p>
        <div className="space-y-1.5">
          {payload.map((item: any, index: number) => (
            <div key={index} className="flex items-center justify-between space-x-8">
              <div className="flex items-center space-x-2">
                <span
                  className="size-2 shrink-0 rounded-full"
                  style={{ backgroundColor: item.stroke || availableChartColors[index] }}
                />
                <p className="text-gray-700 dark:text-gray-300">{item.name}</p>
              </div>
              <p className="font-semibold tabular-nums text-gray-900 dark:text-gray-50">
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

interface AreaChartProps {
  data: any[]
  categories: string[]
  index: string
  variant?: "default" | "stacked"
  valueFormatter?: (value: number) => string
  className?: string
}

export const AreaChart = ({
  data = [],
  categories = [],
  index,
  variant = "default",
  valueFormatter = (val) => String(val),
  className,
}: AreaChartProps) => {
  const isStacked = variant === "stacked"

  return (
    <div className={`w-full h-72 ${className}`}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsAreaChart data={data} margin={{ left: -15, right: 5, top: 10, bottom: 0 }}>
          <CartesianGrid 
            strokeDasharray="3 3" 
            vertical={false} 
            className="stroke-gray-100 dark:stroke-gray-800" 
          />
          <XAxis
            dataKey={index}
            tickLine={false}
            axisLine={false}
            padding={{ left: 10, right: 10 }}
            className="text-xs fill-gray-400 dark:fill-gray-600"
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickFormatter={valueFormatter}
            className="text-xs fill-gray-400 dark:fill-gray-600"
          />
          <Tooltip
            wrapperStyle={{ outline: "none" }}
            content={<ChartTooltip valueFormatter={valueFormatter} />}
          />
          {categories.map((category, idx) => {
            const color = availableChartColors[idx % availableChartColors.length]
            return (
              <React.Fragment key={category}>
                <defs>
                  <linearGradient id={`color-${category}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={color} stopOpacity={0.2} />
                    <stop offset="95%" stopColor={color} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey={category}
                  name={category}
                  stroke={color}
                  strokeWidth={2}
                  fill={`url(#color-${category})`}
                  stackId={isStacked ? "1" : undefined}
                  dot={false}
                />
              </React.Fragment>
            )
          })}
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  )
}
