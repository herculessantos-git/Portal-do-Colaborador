import { useState } from "react"
import { Card } from "../../components/Card"
import { PageHeader } from "../../components/PageHeader"
import { evaluationHistory, pdiActions, skills } from "../../data/development"
import type { Skill } from "../../types"
import { EvaluationHistoryTimeline } from "./EvaluationHistoryTimeline"
import { PdiSection } from "./PdiSection"
import { SkillDetailModal } from "./SkillDetailModal"
import { SkillRadarChart } from "./SkillRadarChart"
import { SkillRow } from "./SkillRow"

export function DevelopmentPage() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)

  const technical = skills.filter((s) => s.category === "technical")
  const behavioral = skills.filter((s) => s.category === "behavioral")

  return (
    <div>
      <PageHeader
        title="Desenvolvimento Profissional"
        subtitle="Mapa de competências, plano de desenvolvimento e histórico de avaliações."
      />

      {/* Competências técnicas — largura total: o radar (visão geral) e o
          detalhamento (interativo) lado a lado em vez de empilhados, porque
          juntos são densos demais para dividir espaço com outro card. */}
      <Card className="mb-6">
        <h2 className="text-lg text-foreground mb-1">Competências técnicas</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Nível atual (1–5) comparado ao esperado para o cargo — clique numa competência à
          direita para ver o histórico.
        </p>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Só a partir de lg — abaixo disso os rótulos de eixo (nomes de
              competência) não cabem e vazam pra fora do card; a lista ao
              lado já cobre os mesmos dados de forma legível. */}
          <div className="hidden lg:block lg:w-80 shrink-0">
            <SkillRadarChart skills={technical} />
          </div>
          <div className="flex-1 min-w-0 divide-y divide-border lg:border-l lg:border-border lg:pl-8">
            {technical.map((skill) => (
              <SkillRow key={skill.id} skill={skill} onClick={() => setSelectedSkill(skill)} />
            ))}
          </div>
        </div>
      </Card>

      {/* Comportamentais + PDI: duas listas de 4 itens, altura comparável —
          par que fecha a linha sem deixar área vazia de um lado. */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <Card>
          <h2 className="text-lg text-foreground mb-1">Competências comportamentais</h2>
          <p className="text-sm text-muted-foreground mb-2">
            Clique em uma competência para ver o histórico completo.
          </p>
          <div className="divide-y divide-border">
            {behavioral.map((skill) => (
              <SkillRow key={skill.id} skill={skill} onClick={() => setSelectedSkill(skill)} />
            ))}
          </div>
        </Card>

        <PdiSection actions={pdiActions} />
      </div>

      <EvaluationHistoryTimeline entries={evaluationHistory} />

      <SkillDetailModal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
    </div>
  )
}
