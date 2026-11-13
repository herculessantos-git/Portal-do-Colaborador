export interface OnboardingStep {
  id: string
  title: string
  description: string
  completed: boolean
  points: number
}

// Hércules está na 3ª semana na Nexify — parte do roteiro já concluída,
// o resto ainda pendente. Representa o estado "em integração", não "dia 1".
// Pontos somam 100 ao final — número redondo, fácil de ler como "100%".
export const onboardingPhase1Steps: OnboardingStep[] = [
  {
    id: "ob1",
    title: "Completar seu perfil",
    description: "Foto, cargo e departamento confirmados no sistema.",
    completed: true,
    points: 20,
  },
  {
    id: "ob2",
    title: "Conhecer os benefícios",
    description: "Ler o resumo de plano de saúde, vale-alimentação e auxílio home office.",
    completed: true,
    points: 20,
  },
  {
    id: "ob3",
    title: "Primeira 1:1 com o gestor",
    description: "Agendar e realizar a primeira conversa individual com sua liderança direta.",
    completed: false,
    points: 20,
  },
  {
    id: "ob4",
    title: "Responder a pesquisa de boas-vindas",
    description: "Pesquisa rápida de 5 perguntas para o RH entender como está sendo sua chegada.",
    completed: false,
    points: 20,
  },
  {
    id: "ob5",
    title: "Definir sua primeira meta individual",
    description: "Conversar com o gestor e registrar sua primeira meta do ciclo.",
    completed: false,
    points: 20,
  },
]

// Fase 2 — liberada só depois da Fase 1. Neste protótipo é uma vitrine do
// conceito (mostra que o roteiro continua), não um checklist interativo:
// nenhum destes passos tem toggle, marca d'água de "a seguir" proposital.
// `points` fica sem efeito aqui — não há pontuação sem interação.
export const onboardingPhase2Steps: OnboardingStep[] = [
  {
    id: "ob2-1",
    title: "Treinamento de segurança da informação",
    description: "Curso obrigatório de LGPD e boas práticas de segurança — 20 minutos.",
    completed: false,
    points: 0,
  },
  {
    id: "ob2-2",
    title: "Avaliação de desempenho dos 90 dias",
    description: "Primeiro ciclo formal de feedback com seu gestor direto.",
    completed: false,
    points: 0,
  },
  {
    id: "ob2-3",
    title: "Conhecer o plano de carreira do seu cargo",
    description: "Trilha de evolução de Analista a Especialista no time de Produto.",
    completed: false,
    points: 0,
  },
  {
    id: "ob2-4",
    title: "Planejar metas do próximo ciclo",
    description: "Alinhar com o gestor os objetivos para o trimestre seguinte.",
    completed: false,
    points: 0,
  },
]
