import { ClipboardList, GraduationCap, Target } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Card } from "../../components/Card"
import { ProgressBar } from "../../components/ProgressBar"
import { companyGoal } from "../../data/goals"
import { currentUser } from "../../data/user"
import { formatDate, daysUntil } from "../../lib/format"
import type { Survey } from "../../types"

function WidgetHeader({
  icon,
  label,
}: {
  icon: React.ReactNode
  label: string
}) {
  return (
    <div className="flex items-center gap-2 text-text-secondary dark:text-text-secondary-dark mb-4">
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </div>
  )
}

export function CompanyGoalWidget() {
  const navigate = useNavigate()
  return (
    <Card hoverable onClick={() => navigate("/metas")} className="flex flex-col">
      <WidgetHeader icon={<Target size={18} />} label="Meta anual da empresa" />
      <p className="text-2xl text-text-primary dark:text-text-primary-dark mb-4">
        {companyGoal.progress}%
      </p>
      <ProgressBar progress={companyGoal.progress} status={companyGoal.status} />
      <p className="mt-3 text-xs text-text-secondary dark:text-text-secondary-dark">
        Atualizado em {formatDate(companyGoal.updatedAt)}
      </p>
    </Card>
  )
}

export function SurveysPendingWidget({ openSurveys }: { openSurveys: Survey[] }) {
  const navigate = useNavigate()
  const nearest = [...openSurveys].sort(
    (a, b) => daysUntil(a.dueDate) - daysUntil(b.dueDate),
  )[0]
  const days = nearest ? daysUntil(nearest.dueDate) : null
  const urgent = days !== null && days <= 2

  return (
    <Card hoverable onClick={() => navigate("/pesquisas")} className="flex flex-col">
      <WidgetHeader icon={<ClipboardList size={18} />} label="Pesquisas pendentes" />
      <p className="text-2xl text-text-primary dark:text-text-primary-dark mb-4">
        {openSurveys.length}{" "}
        <span className="text-base font-normal text-text-secondary dark:text-text-secondary-dark">
          {openSurveys.length === 1 ? "pesquisa" : "pesquisas"}
        </span>
      </p>
      {nearest ? (
        <p
          className={`text-xs font-medium ${
            urgent ? "text-danger" : "text-text-secondary dark:text-text-secondary-dark"
          }`}
        >
          Prazo mais próximo: {nearest.title} — vence em {days}{" "}
          {days === 1 ? "dia" : "dias"}
        </p>
      ) : (
        <p className="text-xs text-text-secondary dark:text-text-secondary-dark">
          Nenhuma pesquisa pendente no momento.
        </p>
      )}
    </Card>
  )
}

export function DevelopmentWidget() {
  const navigate = useNavigate()
  return (
    <Card hoverable onClick={() => navigate("/desenvolvimento")} className="flex flex-col">
      <WidgetHeader icon={<GraduationCap size={18} />} label="Desenvolvimento" />
      <p className="text-2xl text-text-primary dark:text-text-primary-dark mb-4">
        Nível {currentUser.level}
      </p>
      <p className="text-xs text-text-secondary dark:text-text-secondary-dark">
        Última avaliação: {formatDate(currentUser.lastEvaluation)}
      </p>
    </Card>
  )
}
