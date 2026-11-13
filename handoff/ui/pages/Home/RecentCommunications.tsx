import { ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Card } from "../../components/Card"
import { PriorityBadge } from "../../components/Badge"
import { formatDate } from "../../lib/format"
import type { Communication } from "../../types"

export function RecentCommunications({ items }: { items: Communication[] }) {
  const navigate = useNavigate()

  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg text-text-primary dark:text-text-primary-dark">
          Comunicados recentes
        </h2>
        <button
          onClick={() => navigate("/comunicacao")}
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          Ver todos
          <ArrowRight size={14} />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <Card
            key={item.id}
            hoverable
            onClick={() => navigate(`/comunicacao/${item.id}`)}
            className="flex flex-col"
          >
            <div className="flex items-center justify-between mb-3">
              <PriorityBadge priority={item.priority} />
              <span className="text-xs text-text-secondary dark:text-text-secondary-dark">
                {formatDate(item.date)}
              </span>
            </div>
            <h3 className="text-md text-text-primary dark:text-text-primary-dark mb-2 line-clamp-2">
              {item.title}
            </h3>
            <p className="text-sm text-text-secondary dark:text-text-secondary-dark line-clamp-2 flex-1">
              {item.summary}
            </p>
            {item.status === "unread" && (
              <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Não lido
              </span>
            )}
          </Card>
        ))}
      </div>
    </section>
  )
}
