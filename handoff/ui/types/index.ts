// ---------- Usuário ----------
export interface User {
  id: string
  name: string
  role: string
  department: string
  avatar: string | null
  level: string
  lastEvaluation: string
}

// ---------- Comunicação ----------
export type Priority = "urgent" | "important" | "informational"
export type CommunicationStatus = "unread" | "read"
export type CommunicationCategory = "RH" | "Diretoria" | "TI" | "Geral"

export interface Communication {
  id: string
  title: string
  summary: string
  content: string
  priority: Priority
  category: CommunicationCategory
  date: string
  status: CommunicationStatus
  author: string
  requiresConfirmation?: boolean
}

// ---------- Metas ----------
export type GoalStatus = "on-track" | "at-risk" | "delayed" | "completed"
export type GoalScope = "company" | "team" | "individual"

export interface Goal {
  id: string
  title: string
  description: string
  progress: number
  status: GoalStatus
  dueDate: string
  scope: GoalScope
  updatedAt: string
}

export interface QuarterlyHistory {
  quarter: string
  progress: number
}

export interface BonusEstimate {
  min: number
  max: number
  state: "partial" | "confirmed" | "zero"
}

// ---------- Pesquisas ----------
export type SurveyStatus = "open" | "answered" | "closed"
export type QuestionType = "radio" | "checkbox" | "scale"

export interface QuestionOption {
  id: string
  label: string
}

export interface Question {
  id: string
  type: QuestionType
  text: string
  options?: QuestionOption[]
  scaleMin?: number
  scaleMax?: number
  scaleLabels?: { min: string; max: string }
}

export interface Survey {
  id: string
  title: string
  description: string
  status: SurveyStatus
  dueDate: string
  questionsCount: number
  estimatedMinutes: number
  category: string
  questions?: Question[]
  answeredAt?: string
}

// ---------- Desenvolvimento ----------
export type SkillCategory = "technical" | "behavioral"
export type SkillLevel = 1 | 2 | 3 | 4 | 5

export interface SkillHistoryEntry {
  date: string
  level: SkillLevel
}

export interface Skill {
  id: string
  name: string
  category: SkillCategory
  currentLevel: SkillLevel
  expectedLevel: SkillLevel
  history: SkillHistoryEntry[]
  description: string
}

export type PdiActionStatus = "not-started" | "in-progress" | "completed"

export interface PdiAction {
  id: string
  title: string
  responsible: string
  dueDate: string
  status: PdiActionStatus
}

export interface EvaluationHistoryEntry {
  id: string
  date: string
  cycle: string
  result: string
  feedback: string
}

// ---------- Vagas internas ----------
export type WorkModality = "Remoto" | "Híbrido" | "Presencial"

export interface InternalJob {
  id: string
  title: string
  team: string
  modality: WorkModality
  location: string
  postedAt: string
  communicationId?: string
}
