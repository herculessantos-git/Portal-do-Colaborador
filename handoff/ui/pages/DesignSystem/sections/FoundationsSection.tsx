import { AlertTriangle, Bell, ClipboardList, GraduationCap, LayoutDashboard, Target } from "lucide-react"
import { SectionHeading, Showcase, SubHeading } from "../Showcase"

const BRAND_COLORS = [
  { varName: "primary", label: "Primary", usage: "CTAs, links, itens ativos", swatch: "bg-primary" },
  { varName: "primary-hover", label: "Primary Hover", usage: "Hover/active do primary", swatch: "bg-primary-hover" },
  { varName: "secondary", label: "Secondary", usage: "Superfície de ação secundária", swatch: "bg-secondary" },
  { varName: "accent", label: "Accent", usage: "Hover sutil, seleção", swatch: "bg-accent" },
  { varName: "navy", label: "Navy (fixo)", usage: "Sidebar — não muda com o tema", swatch: "bg-navy" },
  { varName: "cyan", label: "Cyan (fixo)", usage: "Acentos pontuais, destaques", swatch: "bg-cyan" },
]

const NEUTRAL_COLORS = [
  { varName: "background", label: "Background", usage: "Fundo da página", swatch: "bg-background" },
  { varName: "card", label: "Card", usage: "Superfície de cards, modais", swatch: "bg-card" },
  { varName: "popover", label: "Popover", usage: "Dropdowns, tooltips, elevação", swatch: "bg-popover" },
  { varName: "muted", label: "Muted", usage: "Fundos neutros, skeleton", swatch: "bg-muted" },
  { varName: "border", label: "Border", usage: "Divisores, bordas", swatch: "bg-border" },
  {
    varName: "foreground",
    label: "Foreground",
    usage: "Texto principal",
    swatch: "bg-card flex items-center justify-center text-foreground text-sm font-semibold",
    content: "Aa",
  },
  {
    varName: "muted-foreground",
    label: "Muted Foreground",
    usage: "Texto secundário",
    swatch: "bg-card flex items-center justify-center text-muted-foreground text-sm font-semibold",
    content: "Aa",
  },
]

const SEMANTIC_COLORS = [
  { varName: "destructive", label: "Destructive", usage: "Urgente, erro, ação irreversível", swatch: "bg-destructive" },
  { varName: "success", label: "Success", usage: "Concluído, confirmado, no prazo", swatch: "bg-success" },
  { varName: "warning", label: "Warning", usage: "Em risco, prazo próximo", swatch: "bg-warning" },
  { varName: "info", label: "Info", usage: "Informativo, dicas", swatch: "bg-info" },
]

function ColorSwatch({
  varName,
  label,
  usage,
  swatch,
  content,
}: {
  varName: string
  label: string
  usage: string
  swatch: string
  content?: string
}) {
  return (
    <div className="flex flex-col gap-2 w-40">
      <div className={`h-16 rounded-md border border-border ${swatch}`}>{content}</div>
      <div>
        <p className="text-sm font-medium text-foreground">{label}</p>
        <p className="text-xs text-muted-foreground font-mono">--{varName}</p>
        <p className="text-xs text-muted-foreground mt-0.5">{usage}</p>
      </div>
    </div>
  )
}

const TYPE_SCALE = [
  { token: "text-2xl", size: "32px", weight: "700", usage: "Headline, número de destaque" },
  { token: "text-xl", size: "24px", weight: "700", usage: "Título de página" },
  { token: "text-lg", size: "20px", weight: "600", usage: "Título de card, seção" },
  { token: "text-md", size: "16px", weight: "500", usage: "Texto de destaque, subtítulo" },
  { token: "text-base", size: "15px", weight: "400", usage: "Corpo de texto padrão" },
  { token: "text-sm", size: "13px", weight: "400", usage: "Texto de suporte, legenda" },
  { token: "text-xs", size: "11px", weight: "400", usage: "Labels, badges, metadados" },
]

const SPACING_SCALE = [1, 2, 3, 4, 5, 6, 8, 10, 12, 16]
const SPACING_PX: Record<number, number> = {
  1: 4, 2: 8, 3: 12, 4: 16, 5: 20, 6: 24, 8: 32, 10: 40, 12: 48, 16: 64,
}

const RADIUS_SCALE = [
  { token: "rounded-sm", px: "6px", usage: "Badges, chips, inputs" },
  { token: "rounded-md", px: "10px", usage: "Cards padrão" },
  { token: "rounded-lg", px: "16px", usage: "Modais, painéis" },
  { token: "rounded-full", px: "9999px", usage: "Avatares, toggles" },
]

const ICONS = [
  { Icon: LayoutDashboard, name: "Home" },
  { Icon: Bell, name: "Comunicação" },
  { Icon: Target, name: "Metas" },
  { Icon: ClipboardList, name: "Pesquisas" },
  { Icon: GraduationCap, name: "Desenvolvimento" },
  { Icon: AlertTriangle, name: "Alerta" },
]

export function FoundationsSection() {
  return (
    <div>
      <SectionHeading
        id="foundations"
        title="Foundations"
        description="Os primitivos visuais que sustentam toda a interface — cor, tipografia, espaçamento, grid, forma e ícones. Todo componente é construído a partir daqui, nunca com valores soltos."
      />

      <SubHeading id="cores" title="Cores — marca" />
      <Showcase title="Paleta de marca" description="Primary é a cor de ação; Navy e Cyan são fixos e não respondem ao tema (usados na sidebar e em acentos pontuais).">
        {BRAND_COLORS.map((c) => (
          <ColorSwatch key={c.varName} {...c} />
        ))}
      </Showcase>

      <Showcase title="Neutros — superfícies e texto" description="A escala que estrutura o layout: fundo da página, cards, bordas e as duas hierarquias de texto.">
        {NEUTRAL_COLORS.map((c) => (
          <ColorSwatch key={c.varName} {...c} />
        ))}
      </Showcase>

      <Showcase title="Semânticas — feedback" description="Usadas exclusivamente para comunicar estado: nunca decorativas. Destructive = urgente/erro, Success = concluído, Warning = atenção, Info = neutro-informativo.">
        {SEMANTIC_COLORS.map((c) => (
          <ColorSwatch key={c.varName} {...c} />
        ))}
      </Showcase>

      <SubHeading id="tipografia" title="Tipografia" />
      <Showcase title="Escala tipográfica" description="Família Inter, corpo de texto em 15px/1.6 — ligeiramente menor que o padrão web para caber mais informação sem perder legibilidade (uso contínuo, plataforma densa)." stack>
        {TYPE_SCALE.map((t) => (
          <div key={t.token} className="flex items-baseline gap-4 w-full">
            <span className={`${t.token} text-foreground shrink-0`}>Nexify Aa</span>
            <span className="text-xs text-muted-foreground font-mono ml-auto shrink-0">
              {t.token} · {t.size} / {t.weight}
            </span>
          </div>
        ))}
      </Showcase>

      <SubHeading id="espacamento" title="Espaçamento" />
      <Showcase title="Escala de espaçamento (múltiplos de 8px)" description="Todo padding, gap e margin do produto usa um destes valores — nunca um número arbitrário.">
        {SPACING_SCALE.map((s) => (
          <div key={s} className="flex flex-col items-center gap-2">
            <div className="bg-primary rounded-sm" style={{ width: SPACING_PX[s], height: SPACING_PX[s] }} />
            <span className="text-xs font-mono text-muted-foreground">{SPACING_PX[s]}px</span>
          </div>
        ))}
      </Showcase>

      <SubHeading id="grid" title="Grid, containers e breakpoints" />
      <Showcase title="Grid de 12 colunas" description="Container máximo de 1440px, gutter de 24px, margem lateral mínima de 32px. O content-area do produto usa max-width de 1200px centralizado." stack>
        <div className="grid grid-cols-12 gap-2 w-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-8 rounded-sm bg-primary/20 flex items-center justify-center text-[10px] text-primary font-mono">
              {i + 1}
            </div>
          ))}
        </div>
      </Showcase>
      <Showcase title="Breakpoints" stack>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full text-sm">
          <div className="rounded-sm border border-border p-3">
            <p className="font-mono text-xs text-muted-foreground">base / mobile</p>
            <p className="text-foreground">375px — layout em coluna única</p>
          </div>
          <div className="rounded-sm border border-border p-3">
            <p className="font-mono text-xs text-muted-foreground">lg: 1024px</p>
            <p className="text-foreground">Sidebar expande de ícones para completa</p>
          </div>
          <div className="rounded-sm border border-border p-3">
            <p className="font-mono text-xs text-muted-foreground">desktop</p>
            <p className="text-foreground">1440px — layout de referência do protótipo</p>
          </div>
        </div>
      </Showcase>

      <SubHeading id="forma" title="Bordas, raios e sombras" />
      <Showcase title="Raios">
        {RADIUS_SCALE.map((r) => (
          <div key={r.token} className="flex flex-col items-center gap-2">
            <div className={`w-16 h-16 bg-primary/15 border-2 border-primary ${r.token}`} />
            <span className="text-xs font-mono text-muted-foreground">{r.token} · {r.px}</span>
          </div>
        ))}
      </Showcase>
      <Showcase title="Elevação (sombras)">
        <div className="flex flex-col items-center gap-2">
          <div className="w-28 h-16 rounded-md bg-card shadow-sm" />
          <span className="text-xs font-mono text-muted-foreground">shadow-sm · repouso</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-28 h-16 rounded-md bg-card shadow-md" />
          <span className="text-xs font-mono text-muted-foreground">shadow-md · hover/dropdown</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-28 h-16 rounded-md bg-card shadow-lg" />
          <span className="text-xs font-mono text-muted-foreground">shadow-lg · modal/popover</span>
        </div>
      </Showcase>

      <SubHeading id="iconografia" title="Iconografia" />
      <Showcase title="Lucide Icons" description="Biblioteca única do produto — estilo outline consistente. Tamanhos: 16px inline, 20px padrão, 24px destaque, 32px empty states.">
        {ICONS.map(({ Icon, name }) => (
          <div key={name} className="flex flex-col items-center gap-2 w-20">
            <div className="flex h-11 w-11 items-center justify-center rounded-md border border-border bg-card text-muted-foreground">
              <Icon size={20} />
            </div>
            <span className="text-xs text-muted-foreground text-center">{name}</span>
          </div>
        ))}
      </Showcase>

      <SubHeading id="acessibilidade" title="Acessibilidade e contraste" />
      <Showcase title="Regras" stack>
        <ul className="list-disc list-inside text-sm text-foreground space-y-1.5">
          <li>Contraste mínimo WCAG AA (4.5:1 para texto normal, 3:1 para texto grande/ícones) em ambos os temas — as cores semânticas do dark mode são clareadas especificamente para isso, não são apenas uma inversão automática.</li>
          <li>Todo elemento interativo tem estado de <code className="font-mono text-xs bg-muted px-1 rounded">:focus-visible</code> com anel de 2px na cor <code className="font-mono text-xs bg-muted px-1 rounded">--ring</code> — nunca <code className="font-mono text-xs bg-muted px-1 rounded">outline: none</code> sem substituto.</li>
          <li>Cor nunca é o único indicador de estado: prioridade e status sempre têm um rótulo de texto junto da cor (badges), nunca só uma bolinha colorida.</li>
          <li>Ícone-somente (sem texto visível) exige <code className="font-mono text-xs bg-muted px-1 rounded">aria-label</code> — e quando o rótulo inclui um valor que muda (ex: "Filtrar por período: 01/08–21/08"), o valor entra no label, nunca só o rótulo fixo.</li>
        </ul>
      </Showcase>
    </div>
  )
}
