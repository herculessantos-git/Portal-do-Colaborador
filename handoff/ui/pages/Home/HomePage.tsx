import { useMemo } from "react"
import { individualGoals } from "../../data/goals"
import { useAppData } from "../../hooks/useAppData"
import { GreetingHeader } from "./GreetingHeader"
import { HighlightCarousel } from "./HighlightCarousel"
import { InternalJobsWidget } from "./InternalJobsWidget"
import { MiniCalendar } from "./MiniCalendar"
import { OnboardingCard } from "./OnboardingCard"
import {
  CompanyGoalWidget,
  DevelopmentWidget,
  SurveysPendingWidget,
} from "./HomeWidgets"
import { RecentCommunications } from "./RecentCommunications"
import { MyGoals } from "./MyGoals"

export function HomePage() {
  const { communications, surveys } = useAppData()

  const recentCommunications = useMemo(
    () =>
      [...communications]
        .sort((a, b) => (a.date < b.date ? 1 : -1))
        .slice(0, 3),
    [communications],
  )

  const openSurveys = useMemo(
    () => surveys.filter((s) => s.status === "open"),
    [surveys],
  )

  return (
    <div>
      <GreetingHeader />

      <HighlightCarousel />

      <OnboardingCard />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <CompanyGoalWidget />
        <SurveysPendingWidget openSurveys={openSurveys} />
        <DevelopmentWidget />
      </div>

      {/* Vagas internas (2/3) + calendário do mês (1/3, mesma largura dos
          cards acima) — lado a lado, antes de Minhas metas. */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
        <div className="lg:col-span-2">
          <InternalJobsWidget />
        </div>
        <MiniCalendar />
      </div>

      <MyGoals goals={individualGoals} />

      <div className="mt-8">
        <RecentCommunications items={recentCommunications} />
      </div>
    </div>
  )
}
