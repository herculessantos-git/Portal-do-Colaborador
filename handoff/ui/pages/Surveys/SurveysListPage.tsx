import { ClipboardList } from "lucide-react"
import { useMemo } from "react"
import { EmptyState } from "../../components/EmptyState"
import { PageHeader } from "../../components/PageHeader"
import { Tabs, TabsContent, TabsListUnderline, TabsTriggerUnderline } from "@/components/ui/tabs"
import { useAppData } from "../../hooks/useAppData"
import { SurveyCard } from "./SurveyCard"
import type { SurveyStatus } from "../../types"

const TABS: { key: SurveyStatus; label: string }[] = [
  { key: "open", label: "Abertas" },
  { key: "answered", label: "Respondidas" },
  { key: "closed", label: "Encerradas" },
]

export function SurveysListPage() {
  const { surveys } = useAppData()

  const counts = useMemo(
    () => ({
      open: surveys.filter((s) => s.status === "open").length,
      answered: surveys.filter((s) => s.status === "answered").length,
      closed: surveys.filter((s) => s.status === "closed").length,
    }),
    [surveys],
  )

  return (
    <div>
      <PageHeader
        title="Pesquisas e Votações"
        subtitle="Participe das pesquisas abertas antes do prazo encerrar."
      />

      <Tabs defaultValue="open">
        <TabsListUnderline className="mb-6">
          {TABS.map((tab) => (
            <TabsTriggerUnderline key={tab.key} value={tab.key}>
              {tab.label} <span className="ml-1 text-xs">({counts[tab.key]})</span>
            </TabsTriggerUnderline>
          ))}
        </TabsListUnderline>

        {TABS.map((tab) => {
          const filtered = surveys.filter((s) => s.status === tab.key)
          return (
            <TabsContent key={tab.key} value={tab.key} className="mt-0">
              {filtered.length === 0 ? (
                <EmptyState
                  icon={ClipboardList}
                  title="Nenhuma pesquisa nesta aba"
                  description="Quando houver, as pesquisas aparecem aqui."
                />
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filtered.map((survey) => (
                    <SurveyCard key={survey.id} survey={survey} />
                  ))}
                </div>
              )}
            </TabsContent>
          )
        })}
      </Tabs>
    </div>
  )
}
