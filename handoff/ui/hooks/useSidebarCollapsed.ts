import { useCallback, useEffect, useState } from "react"

const STORAGE_KEY = "nexify-sidebar-collapsed"

function getInitial(): boolean {
  if (typeof window === "undefined") return false
  try {
    return localStorage.getItem(STORAGE_KEY) === "1"
  } catch {
    return false
  }
}

/** Preferência de sidebar colapsada/expandida — persiste como o tema. */
export function useSidebarCollapsed() {
  const [collapsed, setCollapsed] = useState(getInitial)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, collapsed ? "1" : "0")
    } catch {
      // localStorage indisponível (modo privado) — segue sem persistir
    }
  }, [collapsed])

  const toggle = useCallback(() => setCollapsed((v) => !v), [])

  return { collapsed, toggle }
}
