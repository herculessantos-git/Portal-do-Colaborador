import { CheckCircle2 } from "lucide-react"
import { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Card } from "../../components/Card"
import { PageHeader } from "../../components/PageHeader"
import { PriorityBadge } from "../../components/Badge"
import { useAppData } from "../../hooks/useAppData"
import { useToast } from "../../hooks/useToast"
import { formatDate } from "../../lib/format"
import type { CommunicationCategory } from "../../types"

const CATEGORIES: ("Todas" | CommunicationCategory)[] = [
  "Todas",
  "Diretoria",
  "RH",
  "TI",
  "Geral",
]

export function CommunicationListPage() {
  const { communications, markCommunicationAsRead } = useAppData()
  const { showToast } = useToast()
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState<"Todas" | CommunicationCategory>(
    "Todas",
  )

  const filtered = useMemo(() => {
    const list =
      activeCategory === "Todas"
        ? communications
        : communications.filter((c) => c.category === activeCategory)
    return [...list].sort((a, b) => (a.date < b.date ? 1 : -1))
  }, [communications, activeCategory])

  const unreadCount = communications.filter((c) => c.status === "unread").length

  return (
    <div>
      <PageHeader
        title="Comunicação Interna"
        subtitle={
          unreadCount > 0
            ? `Você tem ${unreadCount} comunicado${unreadCount > 1 ? "s" : ""} não lido${unreadCount > 1 ? "s" : ""}.`
            : "Você está em dia com todos os comunicados."
        }
      />

      <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-thin pb-1">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`shrink-0 rounded-sm px-4 py-2 text-sm font-medium transition-colors ${
              activeCategory === category
                ? "bg-primary text-white"
                : "bg-surface border border-border text-text-secondary hover:text-text-primary dark:bg-surface-dark dark:border-border-dark dark:text-text-secondary-dark dark:hover:text-text-primary-dark"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        {filtered.map((item) => (
          <Card
            key={item.id}
            hoverable
            onClick={() => navigate(`/comunicacao/${item.id}`)}
            className="flex flex-col sm:flex-row sm:items-start gap-4"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <PriorityBadge priority={item.priority} />
                <span className="text-xs text-text-secondary dark:text-text-secondary-dark">
                  {item.category}
                </span>
                {item.status === "unread" && (
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                )}
              </div>
              <h3 className="text-md text-text-primary dark:text-text-primary-dark mb-1.5">
                {item.title}
              </h3>
              <p className="text-sm text-text-secondary dark:text-text-secondary-dark line-clamp-2">
                {item.summary}
              </p>
              <p className="mt-2 text-xs text-text-secondary dark:text-text-secondary-dark">
                {item.author} · {formatDate(item.date)}
              </p>
            </div>

            <div className="shrink-0 flex sm:flex-col items-start sm:items-end gap-2">
              {item.status === "unread" ? (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    markCommunicationAsRead(item.id)
                    showToast("Comunicado marcado como lido.")
                  }}
                  className="text-xs font-semibold text-primary hover:underline whitespace-nowrap"
                >
                  Marcar como lido
                </button>
              ) : (
                <span className="inline-flex items-center gap-1 text-xs font-medium text-success whitespace-nowrap">
                  <CheckCircle2 size={14} />
                  Lido
                </span>
              )}
            </div>
          </Card>
        ))}

        {filtered.length === 0 && (
          <Card className="text-center py-12">
            <p className="text-sm text-text-secondary dark:text-text-secondary-dark">
              Nenhum comunicado nesta categoria.
            </p>
          </Card>
        )}
      </div>
    </div>
  )
}
