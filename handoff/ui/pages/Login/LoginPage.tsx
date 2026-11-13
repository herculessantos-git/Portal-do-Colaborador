import { ArrowRight, Eye, EyeOff, Lock, Mail } from "lucide-react"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { Button } from "../../components/Button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "../../hooks/useAuth"
import { useToast } from "../../hooks/useToast"

const REMEMBER_KEY = "nexify-remembered-email"

function getRememberedEmail(): string {
  try {
    return localStorage.getItem(REMEMBER_KEY) ?? ""
  } catch {
    return ""
  }
}

// Login de protótipo: qualquer e-mail e senha entram, não há verificação
// nenhuma por trás. A tela existe só para mostrar o ponto de entrada do
// fluxo, não um fluxo de autenticação real — por isso "Esqueci minha senha"
// avisa que não está disponível em vez de fingir um fluxo de recuperação.
export function LoginPage() {
  const { isAuthenticated, login } = useAuth()
  const { showToast } = useToast()
  const navigate = useNavigate()
  const [email, setEmail] = useState(getRememberedEmail)
  const [password, setPassword] = useState("")
  const [remember, setRemember] = useState(() => Boolean(getRememberedEmail()))
  const [showPassword, setShowPassword] = useState(false)

  if (isAuthenticated) return <Navigate to="/" replace />

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (remember) {
        localStorage.setItem(REMEMBER_KEY, email)
      } else {
        localStorage.removeItem(REMEMBER_KEY)
      }
    } catch {
      // localStorage indisponível (modo privado) — segue sem lembrar
    }
    login()
    navigate("/", { replace: true })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy to-primary px-4">
      <div className="w-full max-w-sm">
        <div className="bg-surface dark:bg-surface-dark rounded-md shadow-lg p-8">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-12 h-12 rounded-sm bg-cyan flex items-center justify-center font-bold text-xl text-navy mb-3">
              N
            </div>
            <h1 className="text-lg font-semibold text-text-primary dark:text-text-primary-dark">
              Nexify
            </h1>
            <p className="text-sm text-text-secondary dark:text-text-secondary-dark">
              Portal do Colaborador
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="email">Usuário</Label>
              <div className="relative">
                <Mail
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <Input
                  id="email"
                  type="text"
                  required
                  placeholder="Insira seu e-mail ou ID de acesso"
                  className="pl-9"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="password">Senha</Label>
              <div className="relative">
                <Lock
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Insira sua senha"
                  className="pl-9 pr-9"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3">
              <label className="flex items-center gap-2 text-sm text-text-secondary dark:text-text-secondary-dark cursor-pointer select-none">
                <Checkbox
                  checked={remember}
                  onCheckedChange={(v) => setRemember(v === true)}
                />
                Lembrar meus dados
              </label>
              <button
                type="button"
                onClick={() =>
                  showToast("Recuperação de senha não está disponível neste protótipo.")
                }
                className="text-sm font-medium text-primary hover:underline shrink-0"
              >
                Esqueci minha senha
              </button>
            </div>

            <Button type="submit" className="w-full mt-2" icon={<ArrowRight size={16} />} iconPosition="right">
              Entrar
            </Button>
          </form>
        </div>

        <p className="mt-6 text-center text-sm text-white/70">
          © 2026 <span className="font-semibold text-white">Nexify</span> Portal do
          Colaborador
        </p>
      </div>
    </div>
  )
}
