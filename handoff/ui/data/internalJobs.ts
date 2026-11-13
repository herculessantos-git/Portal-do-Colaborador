import type { InternalJob } from "../types"

// Reaproveita a abertura já anunciada em communications.ts (c006) e soma
// mais uma vaga do time de Produto — mesmo departamento do usuário logado,
// sem inventar nenhum colega novo.
export const internalJobs: InternalJob[] = [
  {
    id: "job-001",
    title: "Engenheiro(a) de Dados Sênior",
    team: "Time de Dados",
    modality: "Remoto",
    location: "Brasil",
    postedAt: "2026-10-22",
    communicationId: "c006",
  },
  {
    id: "job-002",
    title: "Analista de Dados Pleno",
    team: "Time de Dados",
    modality: "Híbrido",
    location: "São Paulo, SP",
    postedAt: "2026-10-22",
    communicationId: "c006",
  },
  {
    id: "job-003",
    title: "Analista de Produto Pleno",
    team: "Produto · Squad Growth",
    modality: "Híbrido",
    location: "São Paulo, SP",
    postedAt: "2026-11-05",
  },
  {
    id: "job-004",
    title: "Analista de Infraestrutura de TI Pleno",
    team: "Equipe de Infraestrutura",
    modality: "Remoto",
    location: "Brasil",
    postedAt: "2026-11-10",
  },
]
