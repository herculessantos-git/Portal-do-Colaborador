import type { EvaluationHistoryEntry, PdiAction, Skill } from "../types"

export const skills: Skill[] = [
  // ----- Técnicas -----
  {
    id: "sk001",
    name: "Arquitetura de Software",
    category: "technical",
    currentLevel: 3,
    expectedLevel: 4,
    description:
      "Capacidade de propor e avaliar decisões arquiteturais considerando escalabilidade, manutenibilidade e custo.",
    history: [
      { date: "2026-03-15", level: 2 },
      { date: "2026-06-15", level: 3 },
      { date: "2026-09-15", level: 3 },
    ],
  },
  {
    id: "sk002",
    name: "Desenvolvimento Backend",
    category: "technical",
    currentLevel: 4,
    expectedLevel: 4,
    description:
      "Construção de APIs e serviços robustos, com foco em performance, segurança e testes automatizados.",
    history: [
      { date: "2026-03-15", level: 3 },
      { date: "2026-06-15", level: 4 },
      { date: "2026-09-15", level: 4 },
    ],
  },
  {
    id: "sk003",
    name: "Desenvolvimento Frontend",
    category: "technical",
    currentLevel: 3,
    expectedLevel: 3,
    description:
      "Implementação de interfaces reativas, acessíveis e performáticas com frameworks modernos.",
    history: [
      { date: "2026-03-15", level: 3 },
      { date: "2026-06-15", level: 3 },
      { date: "2026-09-15", level: 3 },
    ],
  },
  {
    id: "sk004",
    name: "Modelagem de Dados",
    category: "technical",
    currentLevel: 2,
    expectedLevel: 3,
    description:
      "Design de esquemas relacionais e não relacionais eficientes, com foco em integridade e performance de consulta.",
    history: [
      { date: "2026-03-15", level: 2 },
      { date: "2026-06-15", level: 2 },
      { date: "2026-09-15", level: 2 },
    ],
  },
  {
    id: "sk005",
    name: "Cloud & Infraestrutura",
    category: "technical",
    currentLevel: 2,
    expectedLevel: 3,
    description:
      "Provisionamento e operação de serviços em nuvem (AWS), com foco em custo e disponibilidade.",
    history: [
      { date: "2026-03-15", level: 1 },
      { date: "2026-06-15", level: 2 },
      { date: "2026-09-15", level: 2 },
    ],
  },
  {
    id: "sk006",
    name: "Testes Automatizados",
    category: "technical",
    currentLevel: 3,
    expectedLevel: 4,
    description:
      "Escrita de testes unitários, de integração e end-to-end que sustentam entregas contínuas com confiança.",
    history: [
      { date: "2026-03-15", level: 2 },
      { date: "2026-06-15", level: 3 },
      { date: "2026-09-15", level: 3 },
    ],
  },
  {
    id: "sk007",
    name: "Qualidade de Código",
    category: "technical",
    currentLevel: 4,
    expectedLevel: 4,
    description:
      "Boas práticas de legibilidade, revisão de código e padrões consistentes com o time.",
    history: [
      { date: "2026-03-15", level: 3 },
      { date: "2026-06-15", level: 4 },
      { date: "2026-09-15", level: 4 },
    ],
  },
  {
    id: "sk008",
    name: "Segurança da Informação",
    category: "technical",
    currentLevel: 2,
    expectedLevel: 3,
    description:
      "Conhecimento de práticas de segurança aplicadas ao desenvolvimento: autenticação, dados sensíveis e OWASP Top 10.",
    history: [
      { date: "2026-03-15", level: 1 },
      { date: "2026-06-15", level: 2 },
      { date: "2026-09-15", level: 2 },
    ],
  },
  // ----- Comportamentais -----
  {
    id: "sk009",
    name: "Comunicação",
    category: "behavioral",
    currentLevel: 4,
    expectedLevel: 4,
    description:
      "Clareza ao reportar status, levantar riscos e alinhar expectativas com time e stakeholders.",
    history: [
      { date: "2026-03-15", level: 3 },
      { date: "2026-06-15", level: 4 },
      { date: "2026-09-15", level: 4 },
    ],
  },
  {
    id: "sk010",
    name: "Colaboração em equipe",
    category: "behavioral",
    currentLevel: 4,
    expectedLevel: 4,
    description:
      "Trabalho conjunto eficaz, apoio a colegas e disposição para dar e receber feedback.",
    history: [
      { date: "2026-03-15", level: 4 },
      { date: "2026-06-15", level: 4 },
      { date: "2026-09-15", level: 4 },
    ],
  },
  {
    id: "sk011",
    name: "Autonomia e proatividade",
    category: "behavioral",
    currentLevel: 3,
    expectedLevel: 4,
    description:
      "Capacidade de identificar problemas e agir sobre eles sem depender de direcionamento constante.",
    history: [
      { date: "2026-03-15", level: 3 },
      { date: "2026-06-15", level: 3 },
      { date: "2026-09-15", level: 3 },
    ],
  },
  {
    id: "sk012",
    name: "Liderança técnica",
    category: "behavioral",
    currentLevel: 2,
    expectedLevel: 3,
    description:
      "Capacidade de influenciar decisões técnicas, mentorar colegas e conduzir iniciativas com visão de longo prazo.",
    history: [
      { date: "2026-03-15", level: 1 },
      { date: "2026-06-15", level: 2 },
      { date: "2026-09-15", level: 2 },
    ],
  },
]

export const pdiActions: PdiAction[] = [
  {
    id: "pdi001",
    title: "Concluir certificação AWS Solutions Architect Associate",
    responsible: "Hércules Roberto",
    dueDate: "2026-12-10",
    status: "in-progress",
  },
  {
    id: "pdi002",
    title: "Liderar tecnicamente a migração do módulo de relatórios",
    responsible: "Hércules Roberto",
    dueDate: "2026-11-28",
    status: "in-progress",
  },
  {
    id: "pdi003",
    title: "Participar do curso interno de Modelagem de Dados Avançada",
    responsible: "Hércules Roberto · com apoio de Fernanda Costa",
    dueDate: "2027-01-31",
    status: "not-started",
  },
  {
    id: "pdi004",
    title: "Conduzir 1 sessão de tech talk sobre testes automatizados",
    responsible: "Hércules Roberto",
    dueDate: "2026-10-30",
    status: "completed",
  },
]

export const evaluationHistory: EvaluationHistoryEntry[] = [
  {
    id: "ev001",
    date: "2026-09-15",
    cycle: "Ciclo 3 · 2026",
    result: "Atende às expectativas",
    feedback:
      "Hércules evoluiu bastante em backend e qualidade de código neste ciclo. A liderança técnica em projetos pequenos já aparece com consistência. Para o próximo ciclo, o foco deve ser cloud e modelagem de dados, áreas que vão sustentar o próximo passo de carreira.",
  },
  {
    id: "ev002",
    date: "2026-06-15",
    cycle: "Ciclo 2 · 2026",
    result: "Atende às expectativas",
    feedback:
      "Bom progresso em arquitetura e testes automatizados. Comunicação com stakeholders melhorou visivelmente após o curso interno. Seguir investindo em autonomia para assumir decisões técnicas sem validação constante.",
  },
  {
    id: "ev003",
    date: "2026-03-15",
    cycle: "Ciclo 1 · 2026",
    result: "Em desenvolvimento",
    feedback:
      "Início de ciclo com boa base técnica em frontend e qualidade de código, mas ainda com gaps relevantes em cloud e segurança da informação. Definido plano de desenvolvimento focado nessas duas competências.",
  },
]
