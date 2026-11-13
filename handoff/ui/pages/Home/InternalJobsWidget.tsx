import { ArrowRight, Briefcase } from "lucide-react"
import { Badge } from "../../components/Badge"
import { Card } from "../../components/Card"
import { internalJobs } from "../../data/internalJobs"
import type { WorkModality } from "../../types"

const MODALITY_TONE: Record<WorkModality, "info" | "success" | "neutral"> = {
  Remoto: "info",
  Híbrido: "success",
  Presencial: "neutral",
}

// "Ver todas" parece um link (mesma aparência usada no resto do app) de
// propósito — sinaliza que a listagem completa existiria — mas não navega:
// o destino certo seria uma tela de vagas internas dedicada, que este
// protótipo não tem. As linhas de vaga, por sua vez, não têm link nenhum —
// levar ao anúncio de comunicação não faria sentido como destino.
export function InternalJobsWidget() {
  return (
    <Card padding="none" className="flex flex-col h-full">
      <div className="flex items-center justify-between px-5 pt-5 pb-4">
        <div className="flex items-center gap-2 text-text-secondary dark:text-text-secondary-dark">
          <Briefcase size={18} />
          <span className="text-sm font-medium">Vagas internas</span>
        </div>
        <button className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
          Ver todas
          <ArrowRight size={14} />
        </button>
      </div>

      <ul className="flex-1 flex flex-col justify-between divide-y divide-border dark:divide-border-dark">
        {internalJobs.map((job) => (
          <li key={job.id} className="flex items-start gap-4 px-5 py-4">
            <div className="min-w-0 flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2 mb-1.5">
                <h3 className="text-sm font-medium text-text-primary dark:text-text-primary-dark sm:truncate">
                  {job.title}
                </h3>
                <Badge tone={MODALITY_TONE[job.modality]} className="shrink-0 self-start">
                  {job.modality}
                </Badge>
              </div>
              <p className="text-xs text-text-secondary dark:text-text-secondary-dark truncate">
                {job.team} · {job.location}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  )
}
