import { Bell, CheckCheck } from "lucide-react"
import { useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { PriorityBadge } from "../components/Badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAppData } from "../hooks/useAppData"
import { formatDate } from "../lib/format"

export function NotificationBell() {
  const { communications } = useAppData()
  const navigate = useNavigate()

  const unread = useMemo(
    () =>
      communications
        .filter((c) => c.status === "unread")
        .sort((a, b) => (a.date < b.date ? 1 : -1)),
    [communications],
  )

  const preview = unread.slice(0, 4)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={
          unread.length > 0 ? `Notificações: ${unread.length} não lidas` : "Notificações"
        }
        className="relative flex items-center justify-center w-9 h-9 rounded-full text-muted-foreground transition-colors hover:bg-border/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring data-[state=open]:bg-border/40 dark:hover:bg-surface-dark-elevated"
      >
        <Bell size={18} />
        {unread.length > 0 && (
          <span
            className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-destructive ring-2 ring-background"
            aria-hidden="true"
          />
        )}
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-80 max-w-[90vw] p-0">
        <div className="flex items-center justify-between px-4 py-3">
          <DropdownMenuLabel className="p-0 text-sm font-semibold text-foreground">
            Notificações
          </DropdownMenuLabel>
          {unread.length > 0 && (
            <span className="text-xs text-muted-foreground">
              {unread.length} não lida{unread.length > 1 ? "s" : ""}
            </span>
          )}
        </div>
        <DropdownMenuSeparator className="m-0" />

        {preview.length === 0 ? (
          <div className="flex flex-col items-center gap-2 px-4 py-8 text-center">
            <CheckCheck size={24} className="text-success" />
            <p className="text-sm text-muted-foreground">
              Você está em dia. Nenhuma notificação nova.
            </p>
          </div>
        ) : (
          <div className="max-h-80 overflow-y-auto scrollbar-thin py-1">
            {preview.map((item) => (
              <DropdownMenuItem
                key={item.id}
                onSelect={() => navigate(`/comunicacao/${item.id}`)}
                className="flex-col items-start gap-1.5 py-2.5"
              >
                <div className="flex items-center gap-2">
                  <PriorityBadge priority={item.priority} />
                  <span className="text-xs text-muted-foreground">{formatDate(item.date)}</span>
                </div>
                <p className="text-sm font-medium text-foreground line-clamp-2">{item.title}</p>
              </DropdownMenuItem>
            ))}
          </div>
        )}

        <DropdownMenuSeparator className="m-0" />
        <DropdownMenuItem
          onSelect={() => navigate("/comunicacao")}
          className="justify-center text-sm font-medium text-primary focus:text-primary"
        >
          Ver todos os comunicados
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
