const MONTHS_SHORT = [
  "jan",
  "fev",
  "mar",
  "abr",
  "mai",
  "jun",
  "jul",
  "ago",
  "set",
  "out",
  "nov",
  "dez",
]

export function parseIsoDate(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number)
  return new Date(y, m - 1, d)
}

export function formatDate(iso: string): string {
  const date = parseIsoDate(iso)
  return `${String(date.getDate()).padStart(2, "0")} ${MONTHS_SHORT[date.getMonth()]} ${date.getFullYear()}`
}

export function formatDateLong(iso: string): string {
  const date = parseIsoDate(iso)
  const weekday = date.toLocaleDateString("pt-BR", { weekday: "long" })
  return `${weekday}, ${date.getDate()} de ${
    [
      "janeiro",
      "fevereiro",
      "março",
      "abril",
      "maio",
      "junho",
      "julho",
      "agosto",
      "setembro",
      "outubro",
      "novembro",
      "dezembro",
    ][date.getMonth()]
  } de ${date.getFullYear()}`
}

export function daysUntil(iso: string, from: Date = new Date()): number {
  const target = parseIsoDate(iso)
  const today = new Date(from.getFullYear(), from.getMonth(), from.getDate())
  const diffMs = target.getTime() - today.getTime()
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24))
}

export function formatCurrencyBRL(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value)
}

export function getGreeting(date: Date = new Date()): string {
  const hour = date.getHours()
  if (hour < 12) return "Bom dia"
  if (hour < 18) return "Boa tarde"
  return "Boa noite"
}
