import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import { communications as initialCommunications } from "../data/communications"
import { surveys as initialSurveys } from "../data/surveys"
import type { Communication, Survey } from "../types"

interface AppDataContextValue {
  communications: Communication[]
  markCommunicationAsRead: (id: string) => void
  surveys: Survey[]
  answerSurvey: (id: string) => void
}

const AppDataContext = createContext<AppDataContextValue | null>(null)

export function AppDataProvider({ children }: { children: ReactNode }) {
  const [communications, setCommunications] = useState<Communication[]>(
    initialCommunications,
  )
  const [surveys, setSurveys] = useState<Survey[]>(initialSurveys)

  const markCommunicationAsRead = useCallback((id: string) => {
    setCommunications((current) =>
      current.map((item) =>
        item.id === id ? { ...item, status: "read" } : item,
      ),
    )
  }, [])

  const answerSurvey = useCallback((id: string) => {
    setSurveys((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              status: "answered",
              answeredAt: new Date().toISOString().slice(0, 10),
            }
          : item,
      ),
    )
  }, [])

  const value = useMemo(
    () => ({
      communications,
      markCommunicationAsRead,
      surveys,
      answerSurvey,
    }),
    [communications, markCommunicationAsRead, surveys, answerSurvey],
  )

  return <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>
}

export function useAppData() {
  const ctx = useContext(AppDataContext)
  if (!ctx) {
    throw new Error("useAppData precisa estar dentro de <AppDataProvider>")
  }
  return ctx
}
