import { Download, Plus } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Showcase, ShowcaseItem, SubHeading } from "../Showcase"

export function ButtonsBadgesDemo() {
  return (
    <>
      <SubHeading id="buttons" title="Buttons" />
      <Showcase
        title="Variantes"
        description="`default` é a ação principal de cada tela (uma só por contexto). `outline`/`secondary` para ações concorrentes. `ghost` para ações terciárias e navegação. `destructive` só para ações irreversíveis. `success` é um extra NEXIFY para confirmações positivas explícitas."
      >
        <ShowcaseItem label="default"><Button>Confirmar</Button></ShowcaseItem>
        <ShowcaseItem label="secondary"><Button variant="secondary">Secundário</Button></ShowcaseItem>
        <ShowcaseItem label="outline"><Button variant="outline">Outline</Button></ShowcaseItem>
        <ShowcaseItem label="ghost"><Button variant="ghost">Ghost</Button></ShowcaseItem>
        <ShowcaseItem label="destructive"><Button variant="destructive">Excluir</Button></ShowcaseItem>
        <ShowcaseItem label="success"><Button variant="success">Aprovar</Button></ShowcaseItem>
        <ShowcaseItem label="link"><Button variant="link">Ver mais</Button></ShowcaseItem>
      </Showcase>

      <Showcase title="Tamanhos">
        <ShowcaseItem label="sm (32px)"><Button size="sm">Pequeno</Button></ShowcaseItem>
        <ShowcaseItem label="default (40px)"><Button size="default">Padrão</Button></ShowcaseItem>
        <ShowcaseItem label="lg (48px)"><Button size="lg">Grande</Button></ShowcaseItem>
        <ShowcaseItem label="icon"><Button size="icon" aria-label="Adicionar"><Plus size={16} /></Button></ShowcaseItem>
      </Showcase>

      <Showcase title="Com ícone e estados">
        <ShowcaseItem label="com ícone"><Button><Download size={16} />Exportar</Button></ShowcaseItem>
        <ShowcaseItem label="disabled"><Button disabled>Indisponível</Button></ShowcaseItem>
        <ShowcaseItem label="outline disabled"><Button variant="outline" disabled>Indisponível</Button></ShowcaseItem>
      </Showcase>

      <SubHeading id="badges" title="Badges" />
      <Showcase
        title="Variantes"
        description="Badges de prioridade e status usam estas variantes por baixo — ver docs/design-tokens.json → component.badge para o mapeamento exato (ex: Urgente = destructive, Importante = warning)."
      >
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Urgente</Badge>
        <Badge variant="warning">Importante</Badge>
        <Badge variant="info">Informativo</Badge>
        <Badge variant="success">Concluído</Badge>
        <Badge variant="outline">Outline</Badge>
      </Showcase>
    </>
  )
}
