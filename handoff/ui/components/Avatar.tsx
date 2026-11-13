import { Avatar as UiAvatar, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/)
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

const SIZE_CLASSES = {
  sm: "w-8 h-8 text-xs",
  default: "w-10 h-10 text-sm",
  lg: "w-16 h-16 text-lg",
}

/**
 * Wrapper de conveniência sobre `ui/avatar.tsx`: deriva as iniciais a partir
 * do nome (sem precisar de `<AvatarImage>` + `<AvatarFallback>` manual),
 * já que o protótipo não usa fotos reais.
 */
export function Avatar({
  name,
  size = "default",
  className = "",
}: {
  name: string
  size?: keyof typeof SIZE_CLASSES
  className?: string
}) {
  return (
    <UiAvatar className={cn(SIZE_CLASSES[size], className)}>
      <AvatarFallback className="font-semibold" aria-hidden="true">
        {getInitials(name)}
      </AvatarFallback>
    </UiAvatar>
  )
}
