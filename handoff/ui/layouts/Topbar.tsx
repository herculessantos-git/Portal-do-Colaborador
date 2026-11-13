import { Moon, Search, Sun, X } from "lucide-react"
import { useState } from "react"
import { useTheme } from "../hooks/useTheme"
import { GlobalSearch } from "./GlobalSearch"
import { NotificationBell } from "./NotificationBell"
import { ProfileMenu } from "./ProfileMenu"

export function Topbar() {
  const { isDark, toggleTheme } = useTheme()
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)

  return (
    <header className="h-topbar shrink-0 sticky top-0 z-30 border-b border-border bg-surface px-4 sm:px-8">
      {/* Mesma largura máxima e centralização do <main> — sem isso, em
          monitores largos a busca fica colada na sidebar e os ícones na
          borda real da tela, bem longe de onde os cards abaixo terminam.
          Sem título aqui — cada página já mostra o próprio (PageHeader),
          repeti-lo no header seria redundante. */}
      <div className="h-full max-w-content mx-auto grid grid-cols-[1fr_auto_1fr] md:grid-cols-[1fr_20rem_1fr] lg:grid-cols-[1fr_28rem_1fr] xl:grid-cols-[1fr_36rem_1fr] items-center gap-4">
        {mobileSearchOpen ? (
          // Busca expandida ocupa a largura inteira do header no mobile —
          // span nas 3 colunas, em vez de tentar caber na coluna central
          // (que no mobile é só "auto", sem largura reservada).
          <div className="col-span-3 flex items-center gap-3">
            <div className="flex-1">
              <GlobalSearch autoFocus onNavigate={() => setMobileSearchOpen(false)} />
            </div>
            <button
              onClick={() => setMobileSearchOpen(false)}
              aria-label="Fechar busca"
              className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full text-muted-foreground hover:bg-border/40 hover:text-foreground transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        ) : (
          <>
            <div />

            <div className="hidden md:block w-full">
              <GlobalSearch />
            </div>

            {/* `col-start-3`: sem ela, com a coluna central vazia (abaixo de
                md) o grid auto-posiciona este bloco na 2ª coluna em vez da
                3ª — sobra a coluna da direita em branco e os ícones ficam
                "no meio" do header, não na quina. */}
            <div className="col-start-3 flex items-center gap-1 sm:gap-2 justify-self-end">
              <button
                onClick={() => setMobileSearchOpen(true)}
                aria-label="Buscar"
                className="md:hidden flex items-center justify-center w-9 h-9 rounded-full text-muted-foreground hover:bg-border/40 hover:text-foreground transition-colors"
              >
                <Search size={18} />
              </button>

              <button
                onClick={toggleTheme}
                aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
                title={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
                className="flex items-center justify-center w-9 h-9 rounded-full text-muted-foreground hover:bg-border/40 hover:text-foreground transition-colors"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <NotificationBell />
              <ProfileMenu />
            </div>
          </>
        )}
      </div>
    </header>
  )
}
