import { useCallback, useEffect, useState } from "react"

type Theme = "light" | "dark"

const STORAGE_KEY = "nexify-theme"

function getInitialTheme(): Theme {
  if (typeof document !== "undefined") {
    return document.documentElement.classList.contains("dark") ? "dark" : "light"
  }
  return "light"
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // localStorage indisponível (modo privado) — segue sem persistir
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === "dark" ? "light" : "dark"))
  }, [])

  return { theme, toggleTheme, isDark: theme === "dark" }
}
