import { Clock } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Card } from "../../components/Card"
import { SurveyStatusBadge } from "../../components/StatusBadge"
import { daysUntil, formatDate } from "../../lib/format"
import type { Survey } from "../../types"

export function SurveyCard({ survey }: { survey: Survey }) {
  const navigate = useNavigate()
  const days = daysUntil(survey.dueDate)
  const urgent = survey.status === "open" && days <= 2

  return (
    <Card hoverable onClick={() => navigate(`/pesquisas/${survey.id}`)}>
      <div className="flex items-center justify-between mb-3 gap-2">
        <SurveyStatusBadge status={survey.status} />
        <span className="text-xs text-text-secondary dark:text-text-secondary-dark shrink-0">
          {survey.category}
        </span>
      </div>

      <h3 className="text-md text-text-primary dark:text-text-primary-dark mb-2">
        {survey.title}
      </h3>
      <p className="text-sm text-text-secondary dark:text-text-secondary-dark line-clamp-2 mb-4">
        {survey.description}
      </p>

      <div className="flex items-center justify-between text-xs text-text-secondary dark:text-text-secondary-dark">
        <span>
          {survey.questionsCount}{" "}
          {survey.questionsCount === 1 ? "pergunta" : "perguntas"} · ~
          {survey.estimatedMinutes} min
        </span>

        {survey.status === "open" && (
          <span
            className={`inline-flex items-center gap-1 font-medium ${
              urgent ? "text-danger" : "text-text-secondary dark:text-text-secondary-dark"
            }`}
          >
            <Clock size={12} />
            {days > 0 ? `Vence em ${days} dia${days > 1 ? "s" : ""}` : "Vence hoje"}
          </span>
        )}
        {survey.status === "answered" && survey.answeredAt && (
          <span>Respondido em {formatDate(survey.answeredAt)}</span>
        )}
        {survey.status === "closed" && <span>Encerrada em {formatDate(survey.dueDate)}</span>}
      </div>
    </Card>
  )
}
