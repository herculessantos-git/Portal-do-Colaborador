import { Star } from "lucide-react"

/**
 * Uma estrela por passo do checklist — acende conforme o colaborador
 * conclui. Gamificação ligada só ao próprio progresso, sem ranking nem
 * comparação com outras pessoas (ver docs/user-flows.md → Fluxo 5).
 */
export function StarRow({
  total,
  filled,
  size = 16,
}: {
  total: number
  filled: number
  size?: number
}) {
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`${filled} de ${total} estrelas`}>
      {Array.from({ length: total }, (_, i) => {
        const isFilled = i < filled
        const isLatest = i === filled - 1
        return (
          <Star
            key={i}
            size={size}
            className={`transition-transform ${
              isFilled ? "fill-warning text-warning" : "fill-transparent text-border"
            } ${isLatest ? "animate-trophy-pop" : ""}`}
            strokeWidth={isFilled ? 1.5 : 1.5}
            aria-hidden="true"
          />
        )
      })}
    </div>
  )
}
