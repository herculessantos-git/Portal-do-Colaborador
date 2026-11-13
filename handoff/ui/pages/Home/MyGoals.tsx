import { ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Card } from "../../components/Card"
import { ProgressBar } from "../../components/ProgressBar"
import { GoalStatusBadge } from "../../components/StatusBadge"
import { formatDate } from "../../lib/format"
import type { Goal } from "../../types"

export function MyGoals({ goals }: { goals: Goal[] }) {
  const navigate = useNavigate()

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg text-text-primary dark:text-text-primary-dark">
          Minhas metas
        </h2>
        <button
          onClick={() => navigate("/metas")}
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          Ver detalhes
          <ArrowRight size={14} />
        </button>
      </div>

      <Card padding="none">
        <ul className="divide-y divide-border dark:divide-border-dark">
          {goals.map((goal) => (
            <li
              key={goal.id}
              onClick={() => navigate("/metas")}
              className="p-5 flex flex-col sm:flex-row sm:items-center gap-4 cursor-pointer hover:bg-bg-light dark:hover:bg-surface-dark-elevated transition-colors"
            >
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2 mb-1.5">
                  <h3 className="text-sm font-medium text-text-primary dark:text-text-primary-dark sm:truncate">
                    {goal.title}
                  </h3>
                  <GoalStatusBadge status={goal.status} />
                </div>
                <p className="text-xs text-text-secondary dark:text-text-secondary-dark">
                  Prazo: {formatDate(goal.dueDate)}
                </p>
              </div>
              <div className="w-full sm:w-48 shrink-0">
                <ProgressBar progress={goal.progress} status={goal.status} size="sm" />
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </section>
  )
}
