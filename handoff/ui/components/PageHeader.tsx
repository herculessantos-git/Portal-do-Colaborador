import type { ReactNode } from "react"

export function PageHeader({
  title,
  subtitle,
  action,
}: {
  title: string
  subtitle?: string
  action?: ReactNode
}) {
  return (
    <div className="flex items-start justify-between gap-4 mb-8">
      <div>
        <h1 className="text-xl text-text-primary dark:text-text-primary-dark">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-1 text-sm text-text-secondary dark:text-text-secondary-dark">
            {subtitle}
          </p>
        )}
      </div>
      {action}
    </div>
  )
}
