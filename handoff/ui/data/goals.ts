import type { BonusEstimate, Goal, QuarterlyHistory } from "../types"

export const companyGoal: Goal = {
  id: "g-company-001",
  title: "Meta anual da Nexify",
  description:
    "Crescimento de receita recorrente (ARR) em 40% com manutenção do churn abaixo de 5%.",
  progress: 73,
  status: "on-track",
  dueDate: "2026-12-31",
  scope: "company",
  updatedAt: "2026-11-01",
}

export const companyQuarterlyHistory: QuarterlyHistory[] = [
  { quarter: "T1 2026", progress: 18 },
  { quarter: "T2 2026", progress: 39 },
  { quarter: "T3 2026", progress: 58 },
  { quarter: "T4 2026", progress: 73 },
]

export const teamGoals: Goal[] = [
  {
    id: "g-team-001",
    title: "Reduzir tempo médio de entrega de features em 20%",
    description:
      "Diminuir o lead time médio do backlog de produto de 18 para 14,4 dias por ciclo.",
    progress: 81,
    status: "on-track",
    dueDate: "2026-12-15",
    scope: "team",
    updatedAt: "2026-11-09",
  },
  {
    id: "g-team-002",
    title: "Zerar incidentes críticos em produção",
    description:
      "Nenhum incidente de severidade 1 (indisponibilidade total) nos últimos 90 dias.",
    progress: 52,
    status: "at-risk",
    dueDate: "2026-12-31",
    scope: "team",
    updatedAt: "2026-11-07",
  },
  {
    id: "g-team-003",
    title: "Aumentar cobertura de testes automatizados para 85%",
    description:
      "Elevar a cobertura de testes do módulo de pagamentos de 61% para 85%.",
    progress: 30,
    status: "delayed",
    dueDate: "2026-11-30",
    scope: "team",
    updatedAt: "2026-11-11",
  },
]

export const individualGoals: Goal[] = [
  {
    id: "g-ind-001",
    title: "Concluir migração do módulo de relatórios para a nova arquitetura",
    description:
      "Entregar o módulo de relatórios financeiros totalmente migrado para o novo stack de microsserviços.",
    progress: 90,
    status: "on-track",
    dueDate: "2026-11-28",
    scope: "individual",
    updatedAt: "2026-11-10",
  },
  {
    id: "g-ind-002",
    title: "Mentorar 2 desenvolvedores juniores do time",
    description:
      "Conduzir sessões semanais de mentoria técnica com os dois analistas juniores que entraram em setembro.",
    progress: 65,
    status: "on-track",
    dueDate: "2026-12-20",
    scope: "individual",
    updatedAt: "2026-11-08",
  },
  {
    id: "g-ind-003",
    title: "Certificação em arquitetura de nuvem (AWS Solutions Architect)",
    description:
      "Concluir a certificação até o fim do ano, com apoio do orçamento de desenvolvimento individual.",
    progress: 24,
    status: "delayed",
    dueDate: "2026-12-10",
    scope: "individual",
    updatedAt: "2026-11-02",
  },
]

export const bonusEstimate: BonusEstimate = {
  min: 2400,
  max: 3600,
  state: "partial",
}
