import { Moon, Sun } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useTheme } from "../../../hooks/useTheme"
import { SectionHeading } from "../Showcase"

export function ThemesSection() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div>
      <SectionHeading
        id="themes"
        title="Temas"
        description="Light e dark mode completos, usando os MESMOS tokens semânticos (ver src/index.css). Nenhum componente referencia uma cor hex diretamente — toda cor passa por uma variável CSS que o tema resolve."
      />

      <Card className="p-6 mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-foreground mb-1">
            Tema atual: {isDark ? "Dark" : "Light"}
          </p>
          <p className="text-sm text-muted-foreground max-w-md">
            Alterne para ver todos os exemplos desta página — e o produto inteiro — responderem
            em tempo real.
          </p>
        </div>
        <button
          onClick={toggleTheme}
          className="inline-flex items-center gap-2 rounded-sm border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors"
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
          Alternar para {isDark ? "light" : "dark"}
        </button>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card className="p-5">
          <h3 className="text-sm font-semibold text-foreground mb-2">Como funciona</h3>
          <p className="text-sm text-muted-foreground">
            A classe <code className="font-mono text-xs bg-muted px-1 rounded">dark</code> no{" "}
            <code className="font-mono text-xs bg-muted px-1 rounded">&lt;html&gt;</code> troca o
            bloco de variáveis CSS ativo (<code className="font-mono text-xs bg-muted px-1 rounded">:root</code>{" "}
            vs <code className="font-mono text-xs bg-muted px-1 rounded">.dark</code>). Um script
            inline no <code className="font-mono text-xs bg-muted px-1 rounded">index.html</code>{" "}
            aplica a classe antes do React montar, para não haver flash de tema errado.
          </p>
        </Card>
        <Card className="p-5">
          <h3 className="text-sm font-semibold text-foreground mb-2">Contraste no dark mode</h3>
          <p className="text-sm text-muted-foreground">
            As cores semânticas do dark mode não são uma inversão automática — foram clareadas à
            mão (ex: success #19A974 → #2DD4A0) para manter contraste WCAG AA sobre o fundo
            escuro #0D1B2A. Ver Foundations → Cores.
          </p>
        </Card>
      </div>
    </div>
  )
}
