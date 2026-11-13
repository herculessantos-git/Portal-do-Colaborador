import { Card } from "@/components/ui/card"
import { SectionHeading } from "../Showcase"

const PRINCIPLES = [
  {
    title: "Clareza antes de decoração",
    text: "Corporativo moderno e funcional — toda escolha visual serve a hierarquia da informação, nunca o contrário. Referência de linguagem: Linear, Leapsome, Notion.",
  },
  {
    title: "Densidade com respiro",
    text: "Plataforma de uso contínuo: corpo de texto em 15px (menor que o padrão web) cabe mais informação por tela, mas o espaçamento em múltiplos de 8px garante que nada fica apertado.",
  },
  {
    title: "Cor com significado",
    text: "Fora da marca (azul/navy/cyan), toda cor é semântica. Vermelho é sempre urgência ou erro; verde é sempre conclusão positiva. Nunca decorativa.",
  },
  {
    title: "Um único vocabulário",
    text: "Documentação, componentes implementados e telas de produto leem os mesmos tokens. Mudar uma cor no CSS muda o produto inteiro e esta página ao mesmo tempo.",
  },
]

export function IntroSection() {
  return (
    <div>
      <SectionHeading id="intro" title="Nexify Design System" />
      <p className="text-base text-foreground max-w-2xl mb-2">
        Fonte única de verdade visual para o Portal do Colaborador Nexify. Reúne os
        fundamentos (cor, tipografia, espaçamento, grid), os tokens que os implementam em
        código, a biblioteca de componentes e os padrões de interface que orientam como eles
        se combinam nas telas do produto.
      </p>
      <p className="text-sm text-muted-foreground max-w-2xl mb-8">
        Construído sobre <strong className="text-foreground">shadcn/ui</strong> +{" "}
        <strong className="text-foreground">Radix UI</strong> +{" "}
        <strong className="text-foreground">Tailwind CSS</strong>, com identidade visual
        exclusiva da Nexify — não é o tema padrão da biblioteca.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {PRINCIPLES.map((p) => (
          <Card key={p.title} className="p-5">
            <h3 className="text-sm font-semibold text-foreground mb-1.5">{p.title}</h3>
            <p className="text-sm text-muted-foreground">{p.text}</p>
          </Card>
        ))}
      </div>

      <Card className="p-5 bg-muted/40 border-dashed">
        <h3 className="text-sm font-semibold text-foreground mb-2">Como usar esta documentação</h3>
        <ul className="text-sm text-muted-foreground space-y-1.5 list-disc list-inside">
          <li>Use o menu à esquerda para navegar entre Foundations, Componentes, Padrões de interface e Temas.</li>
          <li>O toggle de tema no topo alterna light/dark em tempo real — todos os exemplos respondem, pois usam os mesmos tokens do produto.</li>
          <li>
            Para código, cada componente vive em{" "}
            <code className="font-mono text-xs bg-muted px-1 rounded">src/components/ui/*.tsx</code>; os tokens
            primitivos estão em <code className="font-mono text-xs bg-muted px-1 rounded">docs/design-tokens.json</code>.
          </li>
          <li>Para reproduzir no Figma, use os valores hex de `design-tokens.json` — já organizados por categoria e por tema.</li>
        </ul>
      </Card>
    </div>
  )
}
