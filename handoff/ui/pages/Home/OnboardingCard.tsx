import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Circle,
  PartyPopper,
  Rocket,
  Trophy,
} from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "../../components/Button"
import { Card } from "../../components/Card"
import { ProgressBar } from "../../components/ProgressBar"
import { onboardingPhase1Steps, onboardingPhase2Steps } from "../../data/onboarding"
import { ConfettiBurst } from "./ConfettiBurst"
import { StarRow } from "./StarRow"

type Phase = "active" | "celebrating" | "phase2"

export function OnboardingCard() {
  const [steps, setSteps] = useState(onboardingPhase1Steps)
  const [phase, setPhase] = useState<Phase>("active")
  const [expanded, setExpanded] = useState(false)

  const completedCount = steps.filter((s) => s.completed).length
  const total = steps.length
  const progress = Math.round((completedCount / total) * 100)
  const totalPoints = steps.reduce((sum, s) => sum + s.points, 0)
  const earnedPoints = steps.filter((s) => s.completed).reduce((sum, s) => sum + s.points, 0)

  // Fase 1 completa → celebra e FICA na celebração — quem decide seguir pra
  // Fase 2 (ou deixar pra depois) é o colaborador, pelos botões abaixo, não
  // mais um timer. Dispara uma única vez (reage à contagem, não ao render).
  useEffect(() => {
    if (completedCount === total && phase === "active") {
      setExpanded(true)
      setPhase("celebrating")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [completedCount, total])

  // Onboarding "completo" (Fase 1 feita) — a partir daqui a Fase 2 é só
  // pré-visualização, sem interação.
  const goToPhase2 = () => setPhase("phase2")
  const seeLater = () => {
    setPhase("phase2")
    setExpanded(false)
  }

  const toggleStep = (id: string) => {
    if (phase !== "active") return
    setSteps((current) =>
      current.map((s) => (s.id === id ? { ...s, completed: !s.completed } : s)),
    )
  }

  const headerIcon = phase === "phase2" ? <Rocket size={18} /> : <PartyPopper size={18} />
  const headerTitle = phase === "phase2" ? "Fase 2 liberada!" : "Bem-vindo à Nexify!"
  const headerSubtitle =
    phase === "active"
      ? `Complete seu onboarding — ${earnedPoints} de ${totalPoints} pontos`
      : phase === "celebrating"
        ? "Fase 1 concluída 🎉"
        : "Novos objetivos do seu primeiro trimestre"

  return (
    <Card padding="none" className="relative overflow-hidden mb-6 border-cyan/30">
      <button
        onClick={() => setExpanded((v) => !v)}
        className={`w-full flex items-center justify-between gap-3 px-6 text-left ${
          phase === "phase2" ? "py-3" : "py-5"
        }`}
      >
        <div className="flex items-center gap-3 min-w-0">
          <div
            className={`flex shrink-0 items-center justify-center rounded-full bg-cyan/15 text-cyan ${
              phase === "phase2" ? "h-8 w-8" : "h-10 w-10"
            }`}
          >
            {headerIcon}
          </div>
          <div className="min-w-0">
            <h3 className="text-md text-foreground">{headerTitle}</h3>
            {!expanded && <p className="text-xs text-muted-foreground mt-0.5">{headerSubtitle}</p>}
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          {!expanded && phase === "active" && (
            <span className="hidden sm:block">
              <StarRow total={total} filled={completedCount} size={14} />
            </span>
          )}
          {expanded ? (
            <ChevronUp size={20} className="text-muted-foreground" />
          ) : (
            <ChevronDown size={20} className="text-muted-foreground" />
          )}
        </div>
      </button>

      {expanded && phase === "active" && (
        <div className="px-6 pb-6">
          <div className="flex items-center justify-between mb-3">
            <StarRow total={total} filled={completedCount} size={20} />
            <span className="text-sm font-semibold text-foreground">
              {earnedPoints}
              <span className="text-muted-foreground font-normal">/{totalPoints} pontos</span>
            </span>
          </div>
          <ProgressBar progress={progress} status="on-track" />
          <p className="mt-2 mb-4 text-xs text-muted-foreground">
            {completedCount} de {total} passos concluídos
          </p>

          <ul className="flex flex-col gap-1">
            {steps.map((step) => (
              <li key={step.id}>
                <button
                  onClick={() => toggleStep(step.id)}
                  className="w-full flex items-start gap-3 rounded-sm px-2 py-2.5 text-left transition-colors hover:bg-accent"
                >
                  {step.completed ? (
                    <CheckCircle2 size={18} className="text-success shrink-0 mt-0.5" />
                  ) : (
                    <Circle size={18} className="text-muted-foreground shrink-0 mt-0.5" />
                  )}
                  <div className="min-w-0 flex-1">
                    <p
                      className={`text-sm font-medium ${
                        step.completed ? "text-muted-foreground line-through" : "text-foreground"
                      }`}
                    >
                      {step.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">{step.description}</p>
                  </div>
                  {step.completed && (
                    <span className="shrink-0 text-xs font-semibold text-warning animate-celebrate-fade-in">
                      +{step.points}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {expanded && phase === "celebrating" && (
        <div className="relative px-6 pb-10 pt-2 flex flex-col items-center text-center">
          <ConfettiBurst active={phase === "celebrating"} />
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan/15 text-cyan animate-trophy-pop">
            <Trophy size={30} />
          </div>
          <h4 className="mt-4 text-lg text-foreground opacity-0 animate-celebrate-fade-in">
            Parabéns, Hércules! 🎉
          </h4>
          <p className="mt-1 text-sm text-muted-foreground max-w-xs opacity-0 animate-celebrate-fade-in">
            Você concluiu a Fase 1 do onboarding e já desbloqueou a Fase 2.
          </p>
          <div className="mt-3 flex items-center gap-2 opacity-0 animate-celebrate-fade-in">
            <StarRow total={total} filled={total} size={16} />
            <span className="text-sm font-semibold text-warning">{totalPoints} pontos</span>
          </div>

          <div className="mt-6 flex items-center gap-3 opacity-0 animate-celebrate-fade-in">
            <Button size="sm" variant="ghost" onClick={seeLater}>
              Ver depois
            </Button>
            <Button size="sm" onClick={goToPhase2}>
              Continuar
            </Button>
          </div>
        </div>
      )}

      {expanded && phase === "phase2" && (
        <div className="px-6 pb-6">
          <div className="mb-4 flex items-center gap-3 text-xs">
            <span className="flex items-center gap-1.5 text-success font-medium">
              <Trophy size={14} />
              Fase 1 concluída
            </span>
            <span className="flex items-center gap-1 text-warning font-medium">
              <StarRow total={total} filled={total} size={12} />
              {totalPoints} pts
            </span>
          </div>

          <ul className="flex flex-col gap-1 mb-4">
            {onboardingPhase2Steps.map((step) => (
              <li
                key={step.id}
                className="w-full flex items-start gap-3 rounded-sm px-2 py-2.5 cursor-not-allowed"
              >
                <Circle size={18} className="text-muted-foreground/40 shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-muted-foreground">{step.title}</p>
                  <p className="text-xs text-muted-foreground/70 mt-0.5">{step.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <p className="text-xs text-muted-foreground border-t border-border pt-3">
            A Fase 2 é liberada automaticamente ao concluir a Fase 1 — pré-visualização neste
            protótipo, ainda sem interação.
          </p>
        </div>
      )}
    </Card>
  )
}
