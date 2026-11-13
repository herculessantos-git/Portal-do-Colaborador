import { Card } from "../../components/Card"
import { ProgressBar } from "../../components/ProgressBar"
import { GoalStatusBadge } from "../../components/StatusBadge"
import { formatDate } from "../../lib/format"
import type { Goal } from "../../types"

export function GoalCard({ goal }: { goal: Goal }) {
  return (
    <Card>
      <h3 className="text-md text-foreground mb-2">{goal.title}</h3>
      <div className="mb-3">
        <GoalStatusBadge status={goal.status} />
      </div>
      <p className="text-sm text-muted-foreground mb-4">{goal.description}</p>
      <ProgressBar progress={goal.progress} status={goal.status} />
      <p className="mt-3 text-xs text-muted-foreground">
        Prazo: {formatDate(goal.dueDate)} · Atualizado em {formatDate(goal.updatedAt)}
      </p>
    </Card>
  )
}
