import type { HTMLAttributes, ReactNode } from "react"
import { Card as UiCard } from "@/components/ui/card"
import { cn } from "@/lib/utils"

/**
 * Wrapper de conveniência sobre `ui/card.tsx` (shadcn padrão) usado nas
 * telas de produto: aplica padding direto na raiz em vez de exigir
 * `CardHeader`/`CardContent`. Para documentação ou composição mais
 * granular, prefira os primitivos de `ui/card.tsx` diretamente — é o que
 * a página /design-system demonstra.
 */
interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  hoverable?: boolean
  padding?: "default" | "sm" | "none"
}

const PADDING_CLASSES: Record<NonNullable<CardProps["padding"]>, string> = {
  default: "p-6",
  sm: "p-4",
  none: "",
}

export function Card({
  children,
  hoverable = false,
  padding = "default",
  className = "",
  ...rest
}: CardProps) {
  return (
    <UiCard
      hoverable={hoverable}
      className={cn(PADDING_CLASSES[padding], className)}
      {...rest}
    >
      {children}
    </UiCard>
  )
}
