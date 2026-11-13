import { Card } from "@/components/ui/card"
import { SectionHeading, SubHeading } from "../Showcase"

const PATTERNS = [
  {
    id: "forms",
    title: "Formulários",
    rules: [
      "Um campo por linha em telas estreitas; agrupar só campos curtos e relacionados lado a lado.",
      "Label sempre visível acima do campo — nunca só placeholder como label.",
      "Erro aparece abaixo do campo, em --destructive, com mensagem específica (nunca \"campo inválido\" genérico).",
      "Formulário longo (pesquisas) vira wizard: uma pergunta por tela, barra de progresso, Anterior/Próxima — reduz carga cognitiva frente a um formulário único enorme.",
    ],
    example: "Pesquisas e Votações → formulário de resposta",
  },
  {
    id: "navigation",
    title: "Navegação",
    rules: [
      "Sidebar fixa à esquerda (240px expandida / 64px colapsada abaixo de 1024px) é a navegação primária entre os 5 módulos — sempre visível, nunca escondida atrás de um menu hamburguer no desktop.",
      "Topbar é secundária: identifica a página atual, dá acesso a notificações e perfil. Não duplica a navegação da sidebar.",
      "Toda tela de detalhe (comunicado, pesquisa) tem botão 'Voltar' explícito no topo — nunca depender só do botão do navegador ou da sidebar para sair de um fluxo.",
    ],
    example: "layouts/Sidebar.tsx + layouts/Topbar.tsx",
  },
  {
    id: "filters",
    title: "Filtros e pesquisas",
    rules: [
      "Filtro por categoria usa chips horizontais (não um select) quando há poucas opções (≤5) — mais rápido de escanear e trocar.",
      "Abas (Tabs) quando as opções são mutuamente exclusivas e cada uma tem um significado de estado (Abertas/Respondidas/Encerradas) — não confundir com filtro, que pode ser combinado.",
      "O filtro ativo sempre fica visualmente destacado com a cor --primary, nunca só negrito.",
    ],
    example: "Comunicação → chips de categoria · Pesquisas → Tabs",
  },
  {
    id: "listings",
    title: "Listagens e tabelas",
    rules: [
      "Lista de cards (não tabela) quando cada item tem metadados ricos e heterogêneos (comunicados, pesquisas, metas) — a tabela é para dados tabulares homogêneos.",
      "Toda lista tem um Empty State definido — nunca uma área em branco sem explicação.",
      "Linha/card inteiro é clicável quando leva a um detalhe, com affordance de hover (sombra ou fundo) — nunca só o título como link.",
    ],
    example: "Home → Comunicados recentes, Minhas metas",
  },
  {
    id: "dashboards",
    title: "Dashboards",
    rules: [
      "A Home abre com o que o colaborador precisa fazer hoje (pendências, prazos) — não um feed genérico. Resumo de estado pessoal primeiro, detalhe depois.",
      "Grid de 3 colunas para os widgets de topo no desktop, empilhados em coluna única no mobile — nunca scroll horizontal.",
      "Banner de alerta (comunicado urgente) é no máximo 1 por vez, mesmo havendo mais de um pendente — evita sobrecarga visual logo na entrada.",
    ],
    example: "Home — grid de widgets + banner de alerta",
  },
  {
    id: "charts",
    title: "Gráficos e indicadores",
    rules: [
      "Linha para evolução no tempo (histórico trimestral), radar para comparar múltiplas dimensões (competências atual vs. esperado) — a forma do gráfico segue o tipo de pergunta, não o gosto.",
      "Cor do gráfico sempre lida de --primary/--cyan, nunca hex hardcoded, para seguir o tema automaticamente.",
      "Todo gráfico tem um valor numérico explícito ao lado (73%, nível 4/5) — o gráfico ilustra, não substitui o número.",
    ],
    example: "Metas → histórico trimestral · Desenvolvimento → radar de competências",
  },
  {
    id: "feedback-patterns",
    title: "Feedback e notificações",
    rules: [
      "Ação concluída com sucesso → toast, nunca um modal bloqueante.",
      "Estado que precisa de confirmação explícita do usuário (ler um comunicado urgente) → botão dedicado, não automático.",
      "O sininho do topbar é um atalho de leitura rápida (prévia), não substitui o módulo completo — nunca duplicar a mesma lista com comportamentos diferentes.",
    ],
    example: "Comunicação → Confirmar leitura · toasts em geral",
  },
  {
    id: "hierarchy",
    title: "Hierarquia e organização",
    rules: [
      "Título de página (text-xl) → título de seção (text-lg) → título de card (text-md) → corpo (text-base) → metadado (text-sm/xs). Nunca pular um nível.",
      "No máximo uma ação primária (`Button` default) visível por tela/seção — o resto é secundário ou ghost.",
      "Prioridade e status sempre em badge com texto, nunca só uma cor — ver Foundations → Acessibilidade.",
    ],
    example: "Ver qualquer PageHeader do produto",
  },
]

export function PatternsSection() {
  return (
    <div>
      <SectionHeading
        id="patterns"
        title="Padrões de interface"
        description="Como os componentes se combinam nas telas reais do produto — a camada de decisão entre o componente isolado e a tela final."
      />
      {PATTERNS.map((p) => (
        <div key={p.id} id={p.id} className="scroll-mt-24">
          <SubHeading title={p.title} />
          <Card className="p-5">
            <ul className="text-sm text-foreground space-y-2 list-disc list-inside mb-4">
              {p.rules.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground font-mono">→ {p.example}</p>
          </Card>
        </div>
      ))}
    </div>
  )
}
