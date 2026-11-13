import { CheckCircle2, Clock, Lock, RefreshCw, AlertTriangle } from "lucide-react"
import { Badge } from "./Badge"
import type { GoalStatus, PdiActionStatus, SurveyStatus } from "../types"

const GOAL_STATUS_CONFIG: Record<
  GoalStatus,
  { label: string; tone: "success" | "warning" | "danger" | "primary"; icon: typeof CheckCircle2 }
> = {
  "on-track": { label: "No prazo", tone: "success", icon: CheckCircle2 },
  "at-risk": { label: "Em risco", tone: "warning", icon: AlertTriangle },
  delayed: { label: "Atrasada", tone: "danger", icon: AlertTriangle },
  completed: { label: "Concluída", tone: "primary", icon: CheckCircle2 },
}

export function GoalStatusBadge({ status }: { status: GoalStatus }) {
  const config = GOAL_STATUS_CONFIG[status]
  const Icon = config.icon
  return (
    <Badge tone={config.tone} icon={<Icon size={12} />}>
      {config.label}
    </Badge>
  )
}

const SURVEY_STATUS_CONFIG: Record<
  SurveyStatus,
  { label: string; tone: "warning" | "success" | "neutral"; icon: typeof Clock }
> = {
  open: { label: "Pendente", tone: "warning", icon: Clock },
  answered: { label: "Respondido", tone: "success", icon: CheckCircle2 },
  closed: { label: "Encerrado", tone: "neutral", icon: Lock },
}

export function SurveyStatusBadge({ status }: { status: SurveyStatus }) {
  const config = SURVEY_STATUS_CONFIG[status]
  const Icon = config.icon
  return (
    <Badge tone={config.tone} icon={<Icon size={12} />}>
      {config.label}
    </Badge>
  )
}

const PDI_STATUS_CONFIG: Record<
  PdiActionStatus,
  { label: string; tone: "neutral" | "primary" | "success"; icon: typeof Clock }
> = {
  "not-started": { label: "Não iniciado", tone: "neutral", icon: Clock },
  "in-progress": { label: "Em andamento", tone: "primary", icon: RefreshCw },
  completed: { label: "Concluído", tone: "success", icon: CheckCircle2 },
}

export function PdiStatusBadge({ status }: { status: PdiActionStatus }) {
  const config = PDI_STATUS_CONFIG[status]
  const Icon = config.icon
  return (
    <Badge tone={config.tone} icon={<Icon size={12} />}>
      {config.label}
    </Badge>
  )
}
