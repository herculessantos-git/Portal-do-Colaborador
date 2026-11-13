import { ChevronDown, ChevronUp } from "lucide-react"
import { useMemo, useState } from "react"
import { Card } from "../../components/Card"
import { Modal } from "../../components/Modal"
import { Slider } from "@/components/ui/slider"
import { formatCurrencyBRL } from "../../lib/format"
import type { BonusEstimate } from "../../types"

// Bônus integral (empresa fecha em 100%) — ponto de referência fixo do
// simulador. Calibrado para que o progresso atual (73%) caia perto da faixa
// que o produto já comunicava (R$ 2.400–3.600), agora como simulação.
const BONUS_AT_100 = 4000

function bonusForProgress(progress: number): number {
  return Math.round((BONUS_AT_100 * progress) / 100 / 50) * 50
}

const STATE_LABEL: Record<BonusEstimate["state"], string> = {
  partial: "Estimativa parcial — meta em andamento",
  confirmed: "Bonificação confirmada — meta batida",
  zero: "Sem bonificação prevista — meta não atingida",
}

export function BonusEstimateSection({
  estimate,
  currentCompanyProgress,
}: {
  estimate: BonusEstimate
  currentCompanyProgress: number
}) {
  const [expanded, setExpanded] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [simulated, setSimulated] = useState(currentCompanyProgress)

  const simulatedBonus = useMemo(() => bonusForProgress(simulated), [simulated])
  const bonusAt100 = BONUS_AT_100
  const isAtCurrent = simulated === currentCompanyProgress

  return (
    <Card padding="none" className="overflow-hidden">
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
      >
        <div>
          <h3 className="text-md text-foreground">Simulador de bônus</h3>
          {!expanded && (
            <p className="text-xs text-muted-foreground mt-1">
              {STATE_LABEL[estimate.state]} — veja quanto você ganha em cada cenário
            </p>
          )}
        </div>
        {expanded ? (
          <ChevronUp size={20} className="text-muted-foreground shrink-0" />
        ) : (
          <ChevronDown size={20} className="text-muted-foreground shrink-0" />
        )}
      </button>

      {expanded && (
        <div className="px-6 pb-6">
          <p className="text-xs text-muted-foreground mb-5">
            Arraste para simular diferentes cenários de fechamento da meta anual da empresa.
          </p>

          <div className="mb-2 flex items-baseline justify-between">
            <span className="text-sm text-muted-foreground">
              Se a meta da empresa fechar em <strong className="text-foreground">{simulated}%</strong>
            </span>
            {!isAtCurrent && (
              <button
                onClick={() => setSimulated(currentCompanyProgress)}
                className="text-xs font-medium text-primary hover:underline"
              >
                Voltar ao progresso atual ({currentCompanyProgress}%)
              </button>
            )}
          </div>
          <p className="text-2xl text-primary mb-5">{formatCurrencyBRL(simulatedBonus)}</p>

          <Slider
            value={[simulated]}
            onValueChange={([v]) => setSimulated(v)}
            min={0}
            max={100}
            step={1}
            aria-label="Progresso simulado da meta da empresa"
          />
          <div className="flex items-center justify-between mt-2 mb-6 text-xs text-muted-foreground">
            <span>0%</span>
            <span>100%</span>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="rounded-sm border border-border p-3">
              <p className="text-xs text-muted-foreground mb-1">
                Hoje ({currentCompanyProgress}%)
              </p>
              <p className="text-md font-semibold text-foreground">
                {formatCurrencyBRL(bonusForProgress(currentCompanyProgress))}
              </p>
            </div>
            <div className="rounded-sm border border-success/30 bg-success/5 p-3">
              <p className="text-xs text-muted-foreground mb-1">Se batermos 100%</p>
              <p className="text-md font-semibold text-success">{formatCurrencyBRL(bonusAt100)}</p>
            </div>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="text-sm font-semibold text-primary hover:underline"
          >
            Entender o cálculo
          </button>
        </div>
      )}

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Como calculamos sua bonificação"
      >
        <div className="space-y-4 text-sm text-foreground">
          <p>
            A bonificação individual combina três fatores, cada um com um peso na composição
            final:
          </p>
          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
            <li>
              <strong className="text-foreground">60% — Meta anual da empresa:</strong> quanto
              mais próxima dos 100%, maior o multiplicador aplicado ao valor-base. É este fator
              que o simulador acima deixa você explorar.
            </li>
            <li>
              <strong className="text-foreground">30% — Metas individuais:</strong> progresso
              médio das suas metas pessoais no ciclo atual.
            </li>
            <li>
              <strong className="text-foreground">10% — Avaliação de desempenho:</strong>{" "}
              resultado da última avaliação de competências.
            </li>
          </ul>
          <p>
            O simulador acima isola o primeiro fator (meta da empresa) mantendo os outros dois
            fixos no seu valor atual — por isso é uma estimativa, não uma promessa. O valor final
            é consolidado após o encerramento do ciclo, em março de 2027.
          </p>
          <p className="text-xs text-muted-foreground border-t border-border pt-3">
            Política de bonificação completa disponível com o RH, a qualquer momento.
          </p>
        </div>
      </Modal>
    </Card>
  )
}
