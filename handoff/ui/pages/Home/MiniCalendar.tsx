import { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Card } from "../../components/Card"
import { calendarEvents } from "../../data/calendarEvents"
import type { CalendarEventType } from "../../data/calendarEvents"

const WEEKDAYS = ["D", "S", "T", "Q", "Q", "S", "S"]
const MONTH_NAMES = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
]

const DOT_CLASSES: Record<CalendarEventType, string> = {
  company: "bg-cyan",
  holiday: "bg-warning",
  it: "bg-info",
}
const LEGEND_LABEL: Record<CalendarEventType, string> = {
  company: "Evento",
  holiday: "Feriado",
  it: "TI",
}

function toISODate(year: number, month: number, day: number): string {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
}

export function MiniCalendar() {
  const navigate = useNavigate()
  const today = useMemo(() => new Date(), [])
  const year = today.getFullYear()
  const month = today.getMonth()
  const todayISO = toISODate(year, month, today.getDate())
  // Só dias com evento são clicáveis — selecionar um filtra a lista abaixo
  // pra aquele dia; clicar de novo (ou "Ver todos") volta pro resumo do mês.
  const [selectedDate, setSelectedDate] = useState<string | null>(null)

  const monthEvents = useMemo(
    () =>
      calendarEvents
        .filter((e) => e.date.startsWith(`${year}-${String(month + 1).padStart(2, "0")}`))
        .sort((a, b) => (a.date < b.date ? -1 : 1)),
    [year, month],
  )
  const eventsByDate = useMemo(() => {
    const map = new Map<string, (typeof calendarEvents)[number][]>()
    for (const e of monthEvents) {
      const list = map.get(e.date) ?? []
      list.push(e)
      map.set(e.date, list)
    }
    return map
  }, [monthEvents])

  const firstWeekday = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const cells = useMemo(() => {
    const out: (number | null)[] = Array(firstWeekday).fill(null)
    for (let d = 1; d <= daysInMonth; d++) out.push(d)
    while (out.length % 7 !== 0) out.push(null)
    return out
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstWeekday, daysInMonth])

  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg text-foreground">
          {MONTH_NAMES[month]} {year}
        </h3>
      </div>

      <div className="grid grid-cols-7 gap-y-0.5 text-center">
        {WEEKDAYS.map((w, i) => (
          <span key={i} className="text-xs font-medium text-muted-foreground">
            {w}
          </span>
        ))}
        {cells.map((day, i) => {
          if (day === null) return <span key={i} />
          const iso = toISODate(year, month, day)
          const isToday = iso === todayISO
          const dayEvents = eventsByDate.get(iso)
          const hasEvents = Boolean(dayEvents?.length)
          const isSelected = iso === selectedDate
          const Comp = hasEvents ? "button" : "div"
          return (
            <Comp
              key={i}
              {...(hasEvents && {
                onClick: () => setSelectedDate((current) => (current === iso ? null : iso)),
                "aria-pressed": isSelected,
                "aria-label": `${day} de ${MONTH_NAMES[month]} — ${dayEvents!.length === 1 ? "1 evento" : `${dayEvents!.length} eventos`}`,
              })}
              className={`flex flex-col items-center gap-0.5 py-0.5 rounded-sm transition-colors ${
                hasEvents ? "cursor-pointer hover:bg-accent" : ""
              } ${isSelected ? "bg-accent ring-1 ring-inset ring-primary" : ""}`}
            >
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ${
                  isToday
                    ? "bg-primary text-primary-foreground font-semibold"
                    : "text-foreground"
                }`}
              >
                {day}
              </span>
              <span className="flex h-1.5 items-center gap-0.5">
                {dayEvents?.map((e, idx) => (
                  <span
                    key={idx}
                    className={`h-1.5 w-1.5 rounded-full ${DOT_CLASSES[e.type]}`}
                    aria-hidden="true"
                  />
                ))}
              </span>
            </Comp>
          )
        })}
      </div>

      <div className="mt-3 pt-3 border-t border-border flex flex-col gap-2">
        {monthEvents.length === 0 ? (
          <p className="text-xs text-muted-foreground">Nenhum evento marcado este mês.</p>
        ) : (
          <>
            {selectedDate && (
              <div className="flex items-center justify-between px-1">
                <p className="text-xs font-medium text-foreground">
                  {Number(selectedDate.slice(-2))} de {MONTH_NAMES[month].toLowerCase()}
                </p>
                <button
                  onClick={() => setSelectedDate(null)}
                  className="text-xs font-medium text-primary hover:underline"
                >
                  Ver todos
                </button>
              </div>
            )}

            {(selectedDate ? eventsByDate.get(selectedDate) ?? [] : monthEvents.slice(0, 3)).map(
              (e) => {
                const day = Number(e.date.slice(-2))
                const clickable = Boolean(e.communicationId)
                const Comp = clickable ? "button" : "div"
                return (
                  <Comp
                    key={`${e.date}-${e.title}`}
                    onClick={
                      clickable ? () => navigate(`/comunicacao/${e.communicationId}`) : undefined
                    }
                    className={`flex items-start gap-2 text-left rounded-sm -mx-1 px-1 py-0.5 ${
                      clickable ? "hover:bg-accent transition-colors" : ""
                    }`}
                  >
                    <span className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 ${DOT_CLASSES[e.type]}`} />
                    <span className="text-xs text-muted-foreground">
                      {!selectedDate && <span className="font-medium text-foreground">{day} —</span>}{" "}
                      {e.title}
                      <span className="text-muted-foreground/70"> · {LEGEND_LABEL[e.type]}</span>
                    </span>
                  </Comp>
                )
              },
            )}

            {!selectedDate && monthEvents.length > 3 && (
              <p className="text-xs text-muted-foreground/70 px-1">
                +{monthEvents.length - 3} {monthEvents.length - 3 === 1 ? "evento" : "eventos"} este mês
              </p>
            )}
          </>
        )}
      </div>
    </Card>
  )
}
