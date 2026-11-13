import { Progress } from "@/components/ui/progress"
import type { GoalStatus } from "../types"

const STATUS_INDICATOR: Record<GoalStatus, string> = {
  "on-track": "bg-success",
  "at-risk": "bg-warning",
  delayed: "bg-destructive",
  completed: "bg-primary",
}

/**
 * Wrapper de domínio sobre `ui/progress.tsx`: adiciona label, legenda e a
 * cor condicionada ao status da meta — regra definida em design-tokens.json
 * (`component.progressBar.colorByStatus`).
 */
export function ProgressBar({
  progress,
  status = "on-track",
  label,
  caption,
  size = "default",
}: {
  progress: number
  status?: GoalStatus
  label?: string
  caption?: string
  size?: "default" | "sm"
}) {
  const clamped = Math.max(0, Math.min(100, progress))
  const height = size === "sm" ? "h-1.5" : "h-2"

  return (
    <div className="w-full">
      {label && (
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-foreground">{label}</span>
          <span className="text-sm font-semibold text-foreground">{clamped}%</span>
        </div>
      )}
      <Progress
        value={clamped}
        className={height}
        indicatorClassName={STATUS_INDICATOR[status]}
        aria-label={label}
      />
      {caption && <p className="mt-2 text-xs text-muted-foreground">{caption}</p>}
    </div>
  )
}
