import { ArrowLeft, Moon, Sun } from "lucide-react"
import { Link } from "react-router-dom"
import { useTheme } from "../../hooks/useTheme"
import { ComponentsSection } from "./sections/ComponentsSection"
import { FoundationsSection } from "./sections/FoundationsSection"
import { IntroSection } from "./sections/IntroSection"
import { PatternsSection } from "./sections/PatternsSection"
import { ThemesSection } from "./sections/ThemesSection"

const NAV = [
  {
    group: "Introdução",
    items: [{ id: "intro", label: "Princípios" }],
  },
  {
    group: "Foundations",
    items: [
      { id: "cores", label: "Cores" },
      { id: "tipografia", label: "Tipografia" },
      { id: "espacamento", label: "Espaçamento" },
      { id: "grid", label: "Grid e breakpoints" },
      { id: "forma", label: "Bordas e sombras" },
      { id: "iconografia", label: "Iconografia" },
      { id: "acessibilidade", label: "Acessibilidade" },
    ],
  },
  {
    group: "Componentes",
    items: [
      { id: "buttons", label: "Buttons" },
      { id: "badges", label: "Badges" },
      { id: "inputs", label: "Inputs" },
      { id: "selection-controls", label: "Checkbox / Radio / Switch" },
      { id: "modals", label: "Modals e Drawers" },
      { id: "dropdowns-tooltips", label: "Dropdowns e Tooltips" },
      { id: "avatars", label: "Avatars" },
      { id: "cards", label: "Cards" },
      { id: "tabs", label: "Tabs" },
      { id: "tables", label: "Tables" },
      { id: "pagination", label: "Pagination" },
      { id: "breadcrumbs", label: "Breadcrumbs" },
      { id: "progress", label: "Progress Bars" },
      { id: "charts", label: "Charts" },
      { id: "alerts", label: "Alerts" },
      { id: "toasts", label: "Toasts" },
      { id: "empty-loading", label: "Empty / Loading" },
    ],
  },
  {
    group: "Padrões de interface",
    items: [
      { id: "forms", label: "Formulários" },
      { id: "navigation", label: "Navegação" },
      { id: "filters", label: "Filtros" },
      { id: "listings", label: "Listagens" },
      { id: "dashboards", label: "Dashboards" },
      { id: "hierarchy", label: "Hierarquia" },
    ],
  },
  {
    group: "Temas",
    items: [{ id: "themes", label: "Light / Dark" }],
  },
]

export function DesignSystemPage() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="h-topbar sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-border bg-card px-4 sm:px-8">
        <div className="flex items-center gap-3 min-w-0">
          <Link
            to="/"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors shrink-0"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Voltar ao produto</span>
          </Link>
          <span className="text-border">|</span>
          <div className="w-7 h-7 rounded-sm bg-navy flex items-center justify-center font-bold text-cyan shrink-0 text-sm">
            N
          </div>
          <h1 className="text-md text-foreground truncate">Nexify Design System</h1>
        </div>
        <button
          onClick={toggleTheme}
          aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
          className="flex items-center justify-center w-9 h-9 rounded-full text-muted-foreground hover:bg-accent hover:text-foreground transition-colors shrink-0"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </header>

      <div className="flex">
        <nav className="hidden lg:block w-64 shrink-0 h-[calc(100vh-64px)] sticky top-16 overflow-y-auto scrollbar-thin border-r border-border px-4 py-6">
          {NAV.map((group) => (
            <div key={group.group} className="mb-5">
              <p className="px-3 mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {group.group}
              </p>
              <ul>
                {group.items.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="block rounded-sm px-3 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <main className="flex-1 min-w-0 px-4 py-8 sm:px-10 sm:py-10 max-w-4xl">
          <IntroSection />
          <div className="my-12 h-px bg-border" />
          <FoundationsSection />
          <div className="my-12 h-px bg-border" />
          <ComponentsSection />
          <div className="my-12 h-px bg-border" />
          <PatternsSection />
          <div className="my-12 h-px bg-border" />
          <ThemesSection />
        </main>
      </div>
    </div>
  )
}
