import { Building2, Users, UserRound } from "lucide-react"
import { Card } from "../../components/Card"
import { ProgressBar } from "../../components/ProgressBar"
import type { Goal, GoalStatus } from "../../types"

interface ComparativeEntry {
  label: string
  icon: typeof Building2
  progress: number
  status: GoalStatus
  caption: string
}

// Pior status do conjunto governa a cor agregada — uma meta atrasada no meio
// de três no prazo não pode "sumir" numa média que parece tudo bem.
const STATUS_SEVERITY: Record<GoalStatus, number> = {
  delayed: 3,
  "at-risk": 2,
  "on-track": 1,
  completed: 0,
}

function aggregate(goals: Goal[]): { progress: number; status: GoalStatus } {
  if (goals.length === 0) return { progress: 0, status: "on-track" }
  const avg = Math.round(goals.reduce((sum, g) => sum + g.progress, 0) / goals.length)
  const worst = goals.reduce((acc, g) =>
    STATUS_SEVERITY[g.status] > STATUS_SEVERITY[acc] ? g.status : acc,
  goals[0].status)
  return { progress: avg, status: worst }
}

export function ComparativeSection({
  companyProgress,
  companyStatus,
  teamGoals,
  individualGoals,
}: {
  companyProgress: number
  companyStatus: GoalStatus
  teamGoals: Goal[]
  individualGoals: Goal[]
}) {
  const team = aggregate(teamGoals)
  const individual = aggregate(individualGoals)

  const entries: ComparativeEntry[] = [
    {
      label: "Meta da empresa",
      icon: Building2,
      progress: companyProgress,
      status: companyStatus,
      caption: "Nexify — ano fiscal 2026",
    },
    {
      label: "Meta da equipe",
      icon: Users,
      progress: team.progress,
      status: team.status,
      caption: `Média de ${teamGoals.length} metas do time`,
    },
    {
      label: "Minha meta",
      icon: UserRound,
      progress: individual.progress,
      status: individual.status,
      caption: `Média de ${individualGoals.length} metas individuais`,
    },
  ]

  return (
    <div className="mb-6">
      <h2 className="text-lg text-foreground mb-1">Comparativo</h2>
      <p className="text-sm text-muted-foreground mb-4">
        Onde você está em relação à equipe e à empresa — o individual faz sentido dentro do todo.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {entries.map((entry) => (
          <Card key={entry.label}>
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <entry.icon size={18} />
              <span className="text-sm font-medium">{entry.label}</span>
            </div>
            <p className="text-2xl text-foreground mb-3">{entry.progress}%</p>
            <ProgressBar progress={entry.progress} status={entry.status} />
            <p className="mt-3 text-xs text-muted-foreground">{entry.caption}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}
