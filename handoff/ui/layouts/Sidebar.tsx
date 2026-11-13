import { ChevronLeft, ChevronRight } from "lucide-react"
import { NavLink } from "react-router-dom"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { useSidebarCollapsed } from "../hooks/useSidebarCollapsed"
import { COMING_SOON_NAV_ITEMS, NAV_ITEMS } from "./navItems"

// Classe estática (nunca função) — o NavLink já marca `aria-current="page"`
// sozinho quando ativo, e o CSS reage a esse atributo. Evita o conflito que
// dava quando o TooltipTrigger (asChild) tentava mesclar props num NavLink
// cuja className era uma função: o merge saía errado e deslocava o hover.
const navItemBase =
  "flex items-center rounded-sm text-white/70 transition-colors hover:bg-white/15 hover:text-white " +
  "aria-[current=page]:bg-primary aria-[current=page]:text-white aria-[current=page]:hover:bg-primary"

export function Sidebar() {
  const { collapsed, toggle } = useSidebarCollapsed()

  return (
    <aside
      className={`hidden lg:flex relative z-40 shrink-0 h-screen sticky top-0 bg-navy flex-col transition-[width] duration-200 ${
        collapsed ? "w-sidebar-collapsed" : "w-sidebar"
      }`}
    >
      {/* Botão único de colapsar/expandir, fixo no topo ao lado da logo, em
          cima da linha VERTICAL que separa a sidebar do conteúdo — não muda
          de posição entre os dois estados, só o ícone inverte. Meio para
          fora da borda, padrão de IDE/apps densos. `aside` leva z-40 porque
          `position: sticky` sempre cria stacking context próprio — sem isso,
          o z-index do botão fica preso DENTRO desse contexto e nunca chega
          a competir com o z-30 do Topbar da página, que cobre a metade
          direita do círculo mesmo o botão tendo z-index maior. */}
      <button
        onClick={toggle}
        aria-label={collapsed ? "Expandir menu" : "Recolher menu"}
        className="absolute left-full top-8 -translate-x-1/2 -translate-y-1/2 z-40 flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-navy text-white/60 shadow-sm hover:text-white hover:border-white/20 transition-colors"
      >
        {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>

      <div
        className={`h-topbar flex items-center border-b border-white/10 shrink-0 ${
          collapsed ? "justify-center" : "px-6"
        }`}
      >
        <div className="flex items-center gap-2 text-white min-w-0">
          <div className="w-8 h-8 rounded-sm bg-cyan flex items-center justify-center font-bold text-navy shrink-0">
            N
          </div>
          {!collapsed && (
            <span className="font-semibold text-lg tracking-tight truncate">Nexify</span>
          )}
        </div>
      </div>

      <nav
        className={`flex-1 overflow-y-auto scrollbar-thin py-4 flex flex-col gap-1 ${
          collapsed ? "px-2 items-center" : "px-3"
        }`}
      >
        {[...NAV_ITEMS, ...COMING_SOON_NAV_ITEMS].map(({ to, label, icon: Icon, end }) =>
          collapsed ? (
            <Tooltip key={to} delayDuration={300}>
              <TooltipTrigger asChild>
                <NavLink
                  to={to}
                  end={end}
                  aria-label={label}
                  className={cn(navItemBase, "h-10 w-10 justify-center")}
                >
                  <Icon size={20} className="shrink-0" />
                </NavLink>
              </TooltipTrigger>
              <TooltipContent side="right">{label}</TooltipContent>
            </Tooltip>
          ) : (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={cn(navItemBase, "gap-3 px-3 py-2.5 text-sm font-medium")}
            >
              <Icon size={20} className="shrink-0" />
              <span className="truncate">{label}</span>
            </NavLink>
          ),
        )}
      </nav>

      {!collapsed && (
        <div className="border-t border-white/10 shrink-0 flex items-center px-6 py-4">
          <span className="text-xs text-white/50">Nexify © 2026</span>
        </div>
      )}
    </aside>
  )
}
