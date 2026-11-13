export type CalendarEventType = "company" | "holiday" | "it"

export interface CalendarEvent {
  date: string // ISO yyyy-mm-dd
  title: string
  type: CalendarEventType
  /** Quando existe, o item do calendário leva ao comunicado completo. */
  communicationId?: string
}

// Nenhum dado novo inventado: os dois primeiros vêm de comunicados que já
// existem em communications.ts (a data aqui é a do EVENTO em si, diferente
// da data de publicação do comunicado); feriados são datas públicas reais.
export const calendarEvents: CalendarEvent[] = [
  {
    date: "2026-11-14",
    title: "Manutenção programada dos servidores",
    type: "it",
    communicationId: "c002",
  },
  {
    date: "2026-11-15",
    title: "Proclamação da República (feriado nacional)",
    type: "holiday",
  },
  {
    date: "2026-11-20",
    title: "Consciência Negra (feriado nacional)",
    type: "holiday",
  },
  {
    date: "2026-12-12",
    title: "Confraternização de fim de ano",
    type: "company",
    communicationId: "c007",
  },
]
