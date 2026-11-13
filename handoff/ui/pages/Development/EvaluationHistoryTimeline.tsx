import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import { Card } from "../../components/Card"
import { formatDate } from "../../lib/format"
import type { EvaluationHistoryEntry } from "../../types"

export function EvaluationHistoryTimeline({
  entries,
}: {
  entries: EvaluationHistoryEntry[]
}) {
  const [expandedId, setExpandedId] = useState<string | null>(entries[0]?.id ?? null)

  return (
    <Card>
      <h2 className="text-lg text-text-primary dark:text-text-primary-dark mb-1">
        Histórico de avaliações
      </h2>
      <p className="text-sm text-text-secondary dark:text-text-secondary-dark mb-5">
        Ciclos anteriores com data e resultado.
      </p>

      <ol className="relative border-l border-border dark:border-border-dark pl-6 flex flex-col gap-6">
        {entries.map((entry) => {
          const expanded = expandedId === entry.id
          return (
            <li key={entry.id} className="relative">
              <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-primary border-2 border-surface dark:border-surface-dark" />
              <button
                onClick={() => setExpandedId(expanded ? null : entry.id)}
                className="w-full flex items-center justify-between gap-3 text-left"
              >
                <div>
                  <p className="text-xs text-text-secondary dark:text-text-secondary-dark">
                    {entry.cycle} · {formatDate(entry.date)}
                  </p>
                  <p className="text-sm font-medium text-text-primary dark:text-text-primary-dark mt-0.5">
                    {entry.result}
                  </p>
                </div>
                {expanded ? (
                  <ChevronUp size={18} className="text-text-secondary shrink-0 dark:text-text-secondary-dark" />
                ) : (
                  <ChevronDown size={18} className="text-text-secondary shrink-0 dark:text-text-secondary-dark" />
                )}
              </button>
              {expanded && (
                <p className="mt-2 text-sm text-text-secondary dark:text-text-secondary-dark">
                  {entry.feedback}
                </p>
              )}
            </li>
          )
        })}
      </ol>
    </Card>
  )
}
