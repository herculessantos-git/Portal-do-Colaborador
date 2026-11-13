import {
  Bell,
  ClipboardList,
  FileText,
  GraduationCap,
  LayoutDashboard,
  Target,
  Users,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface NavItem {
  to: string
  label: string
  icon: LucideIcon
  end: boolean
  /** Módulo ainda não implementado — rota aponta pro placeholder EmConstrucao. */
  comingSoon?: boolean
}

// Fonte única para Sidebar (desktop, ≥1024px) e BottomNav (mobile/tablet,
// <1024px) — os dois leem a mesma lista para nunca divergir em destino,
// rótulo ou ícone entre os dois padrões de navegação. A BottomNav filtra
// `comingSoon` pra não espremer mais itens numa tab bar de 5 posições.
export const NAV_ITEMS: NavItem[] = [
  { to: "/", label: "Home", icon: LayoutDashboard, end: true },
  { to: "/comunicacao", label: "Comunicação", icon: Bell, end: false },
  { to: "/metas", label: "Metas e Resultados", icon: Target, end: false },
  { to: "/pesquisas", label: "Pesquisas e Votações", icon: ClipboardList, end: false },
  { to: "/desenvolvimento", label: "Desenvolvimento", icon: GraduationCap, end: false },
]

export const COMING_SOON_NAV_ITEMS: NavItem[] = [
  { to: "/documentos", label: "Documentos", icon: FileText, end: false, comingSoon: true },
  { to: "/rh-dp", label: "RH / DP", icon: Users, end: false, comingSoon: true },
]
