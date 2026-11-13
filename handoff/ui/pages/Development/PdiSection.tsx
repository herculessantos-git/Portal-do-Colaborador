import { Card } from "../../components/Card"
import { PdiStatusBadge } from "../../components/StatusBadge"
import { formatDate } from "../../lib/format"
import type { PdiAction } from "../../types"

export function PdiSection({ actions }: { actions: PdiAction[] }) {
  return (
    <Card>
      <h2 className="text-lg text-text-primary dark:text-text-primary-dark mb-1">
        Plano de Desenvolvimento Individual (PDI)
      </h2>
      <p className="text-sm text-text-secondary dark:text-text-secondary-dark mb-5">
        Meus objetivos de desenvolvimento para este ciclo.
      </p>

      {actions.length === 0 ? (
        <p className="text-sm text-text-secondary dark:text-text-secondary-dark">
          Nenhuma ação cadastrada ainda.
        </p>
      ) : (
        <ul className="flex flex-col divide-y divide-border dark:divide-border-dark">
          {actions.map((action) => (
            <li
              key={action.id}
              className="py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
            >
              <div>
                <p className="text-sm font-medium text-text-primary dark:text-text-primary-dark">
                  {action.title}
                </p>
                <p className="text-xs text-text-secondary dark:text-text-secondary-dark mt-1">
                  {action.responsible} · prazo {formatDate(action.dueDate)}
                </p>
              </div>
              <PdiStatusBadge status={action.status} />
            </li>
          ))}
        </ul>
      )}
    </Card>
  )
}
