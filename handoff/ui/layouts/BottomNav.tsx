import { NavLink } from "react-router-dom"
import { NAV_ITEMS } from "./navItems"

// Tab bar fixa no rodapé — o padrão real de navegação mobile para um
// conjunto plano de 5 destinos (sem hierarquia, sem sub-páginas). Visível
// só abaixo de 1024px; a Sidebar assume a partir daí.
export function BottomNav() {
  return (
    <nav
      className="lg:hidden fixed inset-x-0 bottom-0 z-40 flex items-stretch justify-around border-t border-border bg-card pb-[env(safe-area-inset-bottom)]"
      aria-label="Navegação principal"
    >
      {NAV_ITEMS.map(({ to, label, icon: Icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          aria-label={label}
          className="flex flex-1 flex-col items-center justify-center gap-0.5 py-2.5 min-w-0 focus-visible:outline-none"
        >
          {({ isActive }) => (
            <>
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                  isActive ? "bg-primary/10 text-primary" : "text-muted-foreground"
                }`}
              >
                <Icon size={20} />
              </span>
              <span
                className={`h-1 w-1 rounded-full transition-colors ${
                  isActive ? "bg-primary" : "bg-transparent"
                }`}
                aria-hidden="true"
              />
            </>
          )}
        </NavLink>
      ))}
    </nav>
  )
}
