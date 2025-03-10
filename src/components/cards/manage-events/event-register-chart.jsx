import { Bar, BarChart, CartesianGrid, Rectangle, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
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
    label: "Sinh viên",
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
  const percentJonined = (100 / 300) * 100

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Số lượng sinh viên tham gia theo khóa</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="grade"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar
                dataKey="registrations"
                strokeWidth={2}
                radius={8}
                activeBar={({ ...props }) => {
                  return (
                    <Rectangle
                      {...props}
                      fillOpacity={0.8}
                      // eslint-disable-next-line react/prop-types
                      stroke={props.payload.fill}
                      strokeDasharray={4}
                      strokeDashoffset={4}
                    />
                  )
                }}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="flex flex-col">
        <CardHeader className="items-center pb-0">
          <CardTitle>Tổng số lượng đã đăng ký</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center items-center m-auto">
          <div className="radial-progress bg-blue-50 border-4 border-blue-50 text-blue-500 text-sm font-medium"
            style={{ "--value": `${percentJonined}`, "--size": "18rem", "--thickness": "2rem" }} 
            aria-valuenow={70} role="progressbar">120/400 sinh viên</div>
        </CardContent>
      </Card>
    </div>
  )
}

