import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import type { QuarterlyHistory } from "../../types"

export function CompanyGoalChart({ data }: { data: QuarterlyHistory[] }) {
  return (
    <div className="h-48 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#DDE3EA" vertical={false} />
          <XAxis
            dataKey="quarter"
            tick={{ fontSize: 12, fill: "#5A7184" }}
            axisLine={{ stroke: "#DDE3EA" }}
            tickLine={false}
          />
          <YAxis
            domain={[0, 100]}
            ticks={[0, 25, 50, 75, 100]}
            tick={{ fontSize: 12, fill: "#5A7184" }}
            axisLine={false}
            tickLine={false}
            width={34}
          />
          <Tooltip
            formatter={(value) => [`${value}%`, "Progresso"]}
            contentStyle={{
              borderRadius: 8,
              border: "1px solid #DDE3EA",
              fontSize: 13,
            }}
          />
          <Line
            type="monotone"
            dataKey="progress"
            stroke="#1769AA"
            strokeWidth={2.5}
            dot={{ r: 4, fill: "#1769AA" }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
