import { Card } from "../../components/Card"
import { PageHeader } from "../../components/PageHeader"
import { ProgressBar } from "../../components/ProgressBar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  bonusEstimate,
  companyGoal,
  companyQuarterlyHistory,
  individualGoals,
  teamGoals,
} from "../../data/goals"
import { formatDate } from "../../lib/format"
import { BonusEstimateSection } from "./BonusEstimateSection"
import { CompanyGoalChart } from "./CompanyGoalChart"
import { ComparativeSection } from "./ComparativeSection"
import { GoalCard } from "./GoalCard"

export function GoalsPage() {
  return (
    <div>
      <PageHeader
        title="Metas e Resultados"
        subtitle="Acompanhe o progresso da empresa, da equipe e das suas metas individuais."
      />

      <Card className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-md text-foreground mb-1">{companyGoal.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 max-w-md">
              {companyGoal.description}
            </p>
            <p className="text-2xl text-foreground mb-3">{companyGoal.progress}%</p>
            <ProgressBar progress={companyGoal.progress} status={companyGoal.status} />
            <p className="mt-3 text-xs text-muted-foreground">
              Prazo: {formatDate(companyGoal.dueDate)} · Atualizado em{" "}
              {formatDate(companyGoal.updatedAt)}
            </p>
          </div>
          <div className="w-full sm:w-72 shrink-0">
            <p className="text-xs font-medium text-muted-foreground mb-2">Histórico trimestral</p>
            <CompanyGoalChart data={companyQuarterlyHistory} />
          </div>
        </div>
      </Card>

      <ComparativeSection
        companyProgress={companyGoal.progress}
        companyStatus={companyGoal.status}
        teamGoals={teamGoals}
        individualGoals={individualGoals}
      />

      <div className="mb-6">
        <BonusEstimateSection
          estimate={bonusEstimate}
          currentCompanyProgress={companyGoal.progress}
        />
      </div>

      <Tabs defaultValue="individual">
        <TabsList className="mb-5">
          <TabsTrigger value="individual">Individual</TabsTrigger>
          <TabsTrigger value="team">Equipe</TabsTrigger>
        </TabsList>

        <TabsContent value="individual" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {individualGoals.map((goal) => (
              <GoalCard key={goal.id} goal={goal} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="team" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {teamGoals.map((goal) => (
              <GoalCard key={goal.id} goal={goal} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
