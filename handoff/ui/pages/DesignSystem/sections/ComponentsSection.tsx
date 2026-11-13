import { SectionHeading } from "../Showcase"
import { ButtonsBadgesDemo } from "./ButtonsBadgesDemo"
import { DataDisplayDemo } from "./DataDisplayDemo"
import { FeedbackDemo } from "./FeedbackDemo"
import { FormDemo } from "./FormDemo"
import { OverlaysDemo } from "./OverlaysDemo"

export function ComponentsSection() {
  return (
    <div>
      <SectionHeading
        id="components"
        title="Componentes"
        description="Biblioteca construída sobre shadcn/ui + Radix UI, customizada com os tokens NEXIFY. Cada componente documentado aqui é o MESMO código usado nas telas de produto — não existe uma versão 'de vitrine' separada."
      />
      <ButtonsBadgesDemo />
      <FormDemo />
      <OverlaysDemo />
      <DataDisplayDemo />
      <FeedbackDemo />
    </div>
  )
}
