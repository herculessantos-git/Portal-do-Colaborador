import type { ReactNode } from "react"
import { Badge as UiBadge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { Priority } from "../types"

type BadgeTone = "danger" | "warning" | "info" | "success" | "primary" | "neutral"

// Mapeia o vocabulário de domínio para as variantes de `ui/badge.tsx`.
const TONE_MAP: Record<BadgeTone, "destructive" | "warning" | "info" | "success" | "default" | "secondary"> = {
  danger: "destructive",
  warning: "warning",
  info: "info",
  success: "success",
  primary: "default",
  neutral: "secondary",
}

export function Badge({
  tone = "neutral",
  children,
  icon,
  className = "",
}: {
  tone?: BadgeTone
  children: ReactNode
  icon?: ReactNode
  className?: string
}) {
  return (
    <UiBadge variant={TONE_MAP[tone]} className={cn(className)}>
      {icon}
      {children}
    </UiBadge>
  )
}

const PRIORITY_CONFIG: Record<Priority, { label: string; tone: BadgeTone }> = {
  urgent: { label: "Urgente", tone: "danger" },
  important: { label: "Importante", tone: "warning" },
  informational: { label: "Informativo", tone: "info" },
}

export function PriorityBadge({ priority }: { priority: Priority }) {
  const config = PRIORITY_CONFIG[priority]
  return <Badge tone={config.tone}>{config.label}</Badge>
}
