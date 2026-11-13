import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { Modal } from "../../components/Modal"
import { formatDate } from "../../lib/format"
import type { Skill } from "../../types"

export function SkillDetailModal({
  skill,
  onClose,
}: {
  skill: Skill | null
  onClose: () => void
}) {
  const data =
    skill?.history.map((h) => ({ date: formatDate(h.date), level: h.level })) ?? []

  return (
    <Modal open={!!skill} onClose={onClose} title={skill?.name ?? ""}>
      {skill && (
        <div>
          <p className="text-sm text-text-secondary dark:text-text-secondary-dark mb-5">
            {skill.description}
          </p>

          <div className="flex gap-6 mb-6">
            <div>
              <p className="text-xs text-text-secondary dark:text-text-secondary-dark mb-1">
                Nível atual
              </p>
              <p className="text-2xl text-primary">{skill.currentLevel}/5</p>
            </div>
            <div>
              <p className="text-xs text-text-secondary dark:text-text-secondary-dark mb-1">
                Nível esperado para o cargo
              </p>
              <p className="text-2xl text-cyan">{skill.expectedLevel}/5</p>
            </div>
          </div>

          <p className="text-xs font-medium text-text-secondary dark:text-text-secondary-dark mb-2">
            Histórico de avaliações
          </p>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 8, right: 8, left: -24, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#DDE3EA" vertical={false} />
                <XAxis dataKey="date" tick={{ fontSize: 11, fill: "#5A7184" }} axisLine={{ stroke: "#DDE3EA" }} tickLine={false} />
                <YAxis domain={[0, 5]} tick={{ fontSize: 11, fill: "#5A7184" }} axisLine={false} tickLine={false} width={24} />
                <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #DDE3EA", fontSize: 12 }} />
                <Line
                  type="monotone"
                  dataKey="level"
                  stroke="#1769AA"
                  strokeWidth={2.5}
                  dot={{ r: 4, fill: "#1769AA" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </Modal>
  )
}
