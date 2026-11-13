import type { ReactNode } from "react"

/** Bloco padrão de documentação: título, descrição e área de preview. */
export function Showcase({
  title,
  description,
  children,
  stack = false,
}: {
  title: string
  description?: string
  children: ReactNode
  /** true = itens empilhados (ocupando a largura); false = lado a lado com wrap */
  stack?: boolean
}) {
  return (
    <div className="mb-8">
      <h3 className="text-md text-foreground mb-1">{title}</h3>
      {description && <p className="text-sm text-muted-foreground mb-4 max-w-2xl">{description}</p>}
      <div
        className={`rounded-md border border-dashed border-border bg-muted/40 p-6 ${
          stack ? "flex flex-col gap-4" : "flex flex-wrap items-center gap-4"
        }`}
      >
        {children}
      </div>
    </div>
  )
}

export function ShowcaseItem({ label, children }: { label?: string; children: ReactNode }) {
  return (
    <div className="flex flex-col items-start gap-2">
      {children}
      {label && <span className="text-xs font-mono text-muted-foreground">{label}</span>}
    </div>
  )
}

export function SectionHeading({ id, title, description }: { id: string; title: string; description?: string }) {
  return (
    <div id={id} className="scroll-mt-24 mb-6">
      <h2 className="text-xl text-foreground">{title}</h2>
      {description && <p className="mt-1 text-sm text-muted-foreground max-w-2xl">{description}</p>}
    </div>
  )
}

export function SubHeading({ id, title }: { id?: string; title: string }) {
  return (
    <h3 id={id} className="scroll-mt-24 text-lg text-foreground mt-10 mb-4 pb-2 border-b border-border">
      {title}
    </h3>
  )
}
