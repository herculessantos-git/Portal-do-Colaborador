import { Search, X } from "lucide-react"
import { useEffect, useMemo, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAppData } from "../hooks/useAppData"

interface SearchResult {
  id: string
  type: "comunicado" | "pesquisa"
  title: string
  subtitle: string
  to: string
}

// Busca client-side sobre os dados que já existem (comunicados e
// pesquisas) — sem backend, sem inventar um diretório de pessoas que a
// gente decidiu não ter. Pessoas/Departamentos fica de fora de propósito.
interface GlobalSearchProps {
  /** Foco automático ao montar — usado no overlay de busca mobile, nunca na
   * barra fixa do header (roubaria o foco a cada navegação). */
  autoFocus?: boolean
  /** Chamado após o colaborador escolher um resultado — o overlay mobile usa
   * isto para fechar a si mesmo; a barra fixa do header não precisa. */
  onNavigate?: () => void
}

export function GlobalSearch({ autoFocus, onNavigate }: GlobalSearchProps = {}) {
  const { communications, surveys } = useAppData()
  const navigate = useNavigate()
  const [query, setQuery] = useState("")
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const results = useMemo<SearchResult[]>(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []

    const comunicados = communications
      .filter(
        (c) => c.title.toLowerCase().includes(q) || c.summary.toLowerCase().includes(q),
      )
      .map((c) => ({
        id: c.id,
        type: "comunicado" as const,
        title: c.title,
        subtitle: c.category,
        to: `/comunicacao/${c.id}`,
      }))

    const pesquisas = surveys
      .filter(
        (s) => s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q),
      )
      .map((s) => ({
        id: s.id,
        type: "pesquisa" as const,
        title: s.title,
        subtitle: s.category,
        to: `/pesquisas/${s.id}`,
      }))

    return [...comunicados, ...pesquisas].slice(0, 8)
  }, [query, communications, surveys])

  const handleSelect = (to: string) => {
    navigate(to)
    setQuery("")
    setOpen(false)
    onNavigate?.()
  }

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="relative">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
        />
        <input
          type="text"
          autoFocus={autoFocus}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setOpen(false)
              ;(e.target as HTMLInputElement).blur()
            }
          }}
          placeholder="Buscar comunicados e pesquisas..."
          aria-label="Buscar comunicados e pesquisas"
          className="h-9 w-full rounded-full border border-border bg-bg-light dark:bg-surface-dark-elevated pl-9 pr-8 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("")
              setOpen(false)
            }}
            aria-label="Limpar busca"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {open && query.trim() && (
        <div className="absolute left-0 right-0 mt-2 rounded-md border border-border bg-card shadow-lg z-50 max-h-80 overflow-y-auto">
          {results.length === 0 ? (
            <p className="px-4 py-3 text-sm text-muted-foreground">
              Nenhum resultado para "{query}"
            </p>
          ) : (
            <ul className="py-1">
              {results.map((r) => (
                <li key={`${r.type}-${r.id}`}>
                  <button
                    onClick={() => handleSelect(r.to)}
                    className="w-full flex items-center justify-between gap-3 px-4 py-2.5 text-left hover:bg-accent transition-colors"
                  >
                    <span className="min-w-0">
                      <span className="block text-sm text-foreground truncate">{r.title}</span>
                      <span className="block text-xs text-muted-foreground">{r.subtitle}</span>
                    </span>
                    <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                      {r.type === "comunicado" ? "Comunicado" : "Pesquisa"}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
