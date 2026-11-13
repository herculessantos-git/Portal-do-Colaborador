import { ChevronDown, LogOut, Settings } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Avatar } from "../components/Avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { currentUser } from "../data/user"
import { useAuth } from "../hooks/useAuth"
import { useToast } from "../hooks/useToast"

export function ProfileMenu() {
  const { showToast } = useToast()
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleUnavailable = (label: string) => {
    showToast(`${label} não está disponível neste protótipo.`)
  }

  const handleLogout = () => {
    logout()
    navigate("/login", { replace: true })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-3 rounded-full py-1.5 pl-3 pr-3 transition-colors hover:bg-border/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring data-[state=open]:bg-border/40 dark:hover:bg-surface-dark-elevated dark:data-[state=open]:bg-surface-dark-elevated">
        <div className="hidden sm:flex items-center shrink-0">
          <div className="text-right leading-tight whitespace-nowrap">
            <p className="text-sm font-medium text-foreground">{currentUser.name}</p>
            <p className="text-xs text-muted-foreground">{currentUser.department}</p>
          </div>
        </div>
        <Avatar name={currentUser.name} />
        <ChevronDown size={14} className="hidden sm:block text-muted-foreground shrink-0" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-64">
        <div className="flex items-center gap-3 px-2 py-3">
          <Avatar name={currentUser.name} size="lg" />
          <div className="min-w-0">
            <p className="text-sm font-semibold text-foreground truncate">{currentUser.name}</p>
            <p className="text-xs text-muted-foreground truncate">{currentUser.role}</p>
          </div>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem onSelect={() => handleUnavailable("Configurações")}>
          <Settings size={16} className="text-muted-foreground" />
          Configurações
        </DropdownMenuItem>
        <DropdownMenuItem variant="destructive" onSelect={handleLogout}>
          <LogOut size={16} />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
