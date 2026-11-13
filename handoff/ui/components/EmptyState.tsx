import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

/**
 * Estado vazio padrão NEXIFY: ícone num círculo `muted`, título, descrição
 * curta e uma ação opcional. Usar sempre que uma lista/listagem não tiver
 * itens — nunca deixar a área simplesmente em branco.
 */
export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
}: {
  icon: LucideIcon
  title: string
  description?: string
  action?: ReactNode
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
        <Icon size={22} className="text-muted-foreground" />
      </div>
      <div>
        <p className="text-sm font-medium text-foreground">{title}</p>
        {description && (
          <p className="mt-1 max-w-sm text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      {action}
    </div>
  )
}
