import { ChevronRight } from "lucide-react"
import type { Skill } from "../../types"

export function SkillRow({ skill, onClick }: { skill: Skill; onClick: () => void }) {
  const gap = skill.expectedLevel - skill.currentLevel
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-4 rounded-sm px-2 -mx-2 py-3 text-left group transition-colors hover:bg-bg-light dark:hover:bg-surface-dark-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-2 gap-2">
          <span className="text-sm font-medium text-text-primary dark:text-text-primary-dark truncate">
            {skill.name}
          </span>
          <span className="text-xs text-text-secondary dark:text-text-secondary-dark shrink-0">
            {skill.currentLevel}/5
            {gap > 0 && <span className="text-warning"> · meta {skill.expectedLevel}</span>}
          </span>
        </div>
        <div className="relative h-2 rounded-full bg-border dark:bg-border-dark overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-primary"
            style={{ width: `${(skill.currentLevel / 5) * 100}%` }}
          />
          <div
            className="absolute inset-y-0 w-0.5 bg-cyan"
            style={{ left: `${(skill.expectedLevel / 5) * 100}%` }}
          />
        </div>
      </div>
      <ChevronRight
        size={18}
        className="text-text-secondary group-hover:text-primary transition-colors shrink-0 dark:text-text-secondary-dark"
      />
    </button>
  )
}
