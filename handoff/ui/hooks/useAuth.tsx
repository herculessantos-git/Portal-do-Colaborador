import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"

const STORAGE_KEY = "nexify-auth"

function getInitial(): boolean {
  if (typeof window === "undefined") return false
  try {
    return localStorage.getItem(STORAGE_KEY) === "1"
  } catch {
    return false
  }
}

interface AuthContextValue {
  isAuthenticated: boolean
  login: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

// Login de protótipo — qualquer e-mail/senha entra, não há validação ou
// backend real por trás. Só guarda a sessão em localStorage para o reload
// não derrubar o usuário de volta pro login.
export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(getInitial)

  const login = useCallback(() => {
    setIsAuthenticated(true)
    try {
      localStorage.setItem(STORAGE_KEY, "1")
    } catch {
      // localStorage indisponível (modo privado) — segue sem persistir
    }
  }, [])

  const logout = useCallback(() => {
    setIsAuthenticated(false)
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {
      // localStorage indisponível (modo privado) — segue sem persistir
    }
  }, [])

  const value = useMemo(
    () => ({ isAuthenticated, login, logout }),
    [isAuthenticated, login, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth precisa estar dentro de AuthProvider")
  return ctx
}
