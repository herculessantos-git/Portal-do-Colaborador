import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Button } from "../../components/Button"
import { Card } from "../../components/Card"
import { PriorityBadge } from "../../components/Badge"
import { useAppData } from "../../hooks/useAppData"
import { useToast } from "../../hooks/useToast"
import { formatDate } from "../../lib/format"

export function CommunicationDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { communications, markCommunicationAsRead } = useAppData()
  const { showToast } = useToast()

  const communication = communications.find((c) => c.id === id)

  useEffect(() => {
    if (
      communication &&
      communication.status === "unread" &&
      !communication.requiresConfirmation
    ) {
      markCommunicationAsRead(communication.id)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [communication?.id])

  if (!communication) {
    return (
      <div>
        <Button variant="ghost" icon={<ArrowLeft size={16} />} onClick={() => navigate("/comunicacao")}>
          Voltar
        </Button>
        <Card className="mt-4 text-center py-12">
          <p className="text-sm text-text-secondary dark:text-text-secondary-dark">
            Comunicado não encontrado.
          </p>
        </Card>
      </div>
    )
  }

  const needsConfirmation =
    communication.requiresConfirmation && communication.status === "unread"

  const handleConfirm = () => {
    markCommunicationAsRead(communication.id)
    showToast("Leitura confirmada.")
  }

  return (
    <div>
      <Button
        variant="ghost"
        icon={<ArrowLeft size={16} />}
        onClick={() => navigate("/comunicacao")}
        className="mb-4 -ml-2"
      >
        Voltar para Comunicação
      </Button>

      <Card>
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <PriorityBadge priority={communication.priority} />
          <span className="text-xs text-text-secondary dark:text-text-secondary-dark">
            {communication.category}
          </span>
        </div>

        <h1 className="text-xl text-text-primary dark:text-text-primary-dark mb-2">
          {communication.title}
        </h1>
        <p className="text-sm text-text-secondary dark:text-text-secondary-dark mb-6">
          {communication.author} · {formatDate(communication.date)}
        </p>

        <p className="text-base text-text-primary dark:text-text-primary-dark leading-relaxed whitespace-pre-line">
          {communication.content}
        </p>

        <div className="mt-8 pt-6 border-t border-border dark:border-border-dark flex items-center justify-between flex-wrap gap-3">
          {needsConfirmation ? (
            <Button
              variant="primary"
              icon={<CheckCircle2 size={16} />}
              onClick={handleConfirm}
            >
              Confirmar leitura
            </Button>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-success">
              <CheckCircle2 size={16} />
              Comunicado lido
            </span>
          )}
        </div>
      </Card>
    </div>
  )
}
