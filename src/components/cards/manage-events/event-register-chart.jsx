"use client"

import * as React from "react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
//   ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  // ChartLegend,
  // ChartLegendContent,
} from "@/components/ui/chart"
const chartData = [
  { grade: "khóa 20", registrations: 275, fill: "var(--color-grade_1)" },
  { grade: "khóa 21", registrations: 200, fill: "var(--color-grade_2)" },
  { grade: "khóa 22", registrations: 287, fill: "var(--color-grade_3)" },
  { grade: "khóa 23", registrations: 173, fill: "var(--color-grade_4)" },
  { grade: "khoá 24", registrations: 173, fill: "var(--color-grade_5)" },
  { grade: "other", registrations: 190, fill: "var(--color-other)" },
]

const chartConfig = {
  registrations: {
    label: "Sinh viên tham gia",
  },
  grade_1: {
    label: "khóa 20",
    color: "hsl(var(--chart-1))",
  },
  grade_2: {
    label: "khóa 21",
    color: "hsl(var(--chart-2))",
  },
  grade_3: {
    label: "khóa 22",
    color: "hsl(var(--chart-3))",
  },
  grade_4: {
    label: "khóa 23",
    color: "hsl(var(--chart-4))",
  },
  grade_5: {
    label: "khóa 24",
    color: "hsl(var(--chart-5))",
  },
  other: {
    label: "khóa khác",
    color: "hsl(var(--chart-6))",
  },
}

export function EventChart() {
  const totalregistrations = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.registrations, 0)
  }, [])

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Tỉ lệ sinh viên theo khóa đăng ký sự kiện</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[350px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="registrations"
              nameKey="grade"
              innerRadius={70}
              strokeWidth={5}
              label 
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalregistrations.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Sinh viên tham gia
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
            {/* <ChartLegend
              content={<ChartLegendContent nameKey="grade" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            /> */}
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
