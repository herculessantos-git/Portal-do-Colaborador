import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts"
import type { Skill } from "../../types"

export function SkillRadarChart({ skills }: { skills: Skill[] }) {
  const data = skills.map((s) => ({
    name: s.name,
    Atual: s.currentLevel,
    Esperado: s.expectedLevel,
  }))

  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data} outerRadius="70%">
          <PolarGrid stroke="#DDE3EA" />
          <PolarAngleAxis
            dataKey="name"
            tick={{ fontSize: 11, fill: "#5A7184" }}
          />
          <PolarRadiusAxis angle={30} domain={[0, 5]} tick={{ fontSize: 10, fill: "#5A7184" }} />
          <Radar
            name="Nível atual"
            dataKey="Atual"
            stroke="#1769AA"
            fill="#1769AA"
            fillOpacity={0.35}
          />
          <Radar
            name="Nível esperado"
            dataKey="Esperado"
            stroke="#20B8C5"
            fill="#20B8C5"
            fillOpacity={0.15}
          />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #DDE3EA", fontSize: 13 }} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
