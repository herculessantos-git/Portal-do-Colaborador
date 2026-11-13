import type { Survey } from "../types"

export const surveys: Survey[] = [
  // ----- Abertas -----
  {
    id: "s001",
    title: "Pesquisa de satisfação com benefícios 2026",
    description:
      "Queremos entender como você avalia os benefícios atuais da Nexify para planejar os ajustes de 2027.",
    status: "open",
    dueDate: "2026-11-16",
    questionsCount: 5,
    estimatedMinutes: 5,
    category: "RH",
    questions: [
      {
        id: "q1",
        type: "scale",
        text: "De 1 a 5, o quanto você está satisfeito com o plano de saúde atual?",
        scaleMin: 1,
        scaleMax: 5,
        scaleLabels: { min: "Muito insatisfeito", max: "Muito satisfeito" },
      },
      {
        id: "q2",
        type: "radio",
        text: "Qual benefício você considera mais relevante no seu dia a dia?",
        options: [
          { id: "o1", label: "Plano de saúde" },
          { id: "o2", label: "Vale-alimentação" },
          { id: "o3", label: "Auxílio home office" },
          { id: "o4", label: "Subsídio de academia" },
        ],
      },
      {
        id: "q3",
        type: "checkbox",
        text: "Quais novos benefícios você gostaria de ver na Nexify? (selecione todos que se aplicam)",
        options: [
          { id: "o1", label: "Auxílio creche" },
          { id: "o2", label: "Previdência privada" },
          { id: "o3", label: "Day off de aniversário" },
          { id: "o4", label: "Apoio psicológico" },
        ],
      },
      {
        id: "q4",
        type: "scale",
        text: "De 1 a 5, o quanto o auxílio home office atende suas necessidades?",
        scaleMin: 1,
        scaleMax: 5,
        scaleLabels: { min: "Não atende", max: "Atende totalmente" },
      },
      {
        id: "q5",
        type: "radio",
        text: "Você recomendaria a Nexify como um bom lugar para trabalhar?",
        options: [
          { id: "o1", label: "Sim, com certeza" },
          { id: "o2", label: "Provavelmente sim" },
          { id: "o3", label: "Não tenho certeza" },
          { id: "o4", label: "Provavelmente não" },
        ],
      },
    ],
  },
  {
    id: "s002",
    title: "Votação: tema da confraternização de fim de ano",
    description:
      "Ajude a escolher o tema da festa de encerramento de 2026. A opção mais votada será confirmada.",
    status: "open",
    dueDate: "2026-11-15",
    questionsCount: 1,
    estimatedMinutes: 1,
    category: "Geral",
    questions: [
      {
        id: "q1",
        type: "radio",
        text: "Qual tema você prefere para a festa de fim de ano?",
        options: [
          { id: "o1", label: "Anos 80" },
          { id: "o2", label: "Gala em branco e dourado" },
          { id: "o3", label: "Praia / verão" },
          { id: "o4", label: "Sem tema (casual)" },
        ],
      },
    ],
  },
  {
    id: "s003",
    title: "Avaliação da nova ferramenta de gestão de projetos",
    description:
      "Após 60 dias de uso do novo sistema de projetos, queremos seu feedback sobre a experiência.",
    status: "open",
    dueDate: "2026-11-20",
    questionsCount: 4,
    estimatedMinutes: 4,
    category: "TI",
    questions: [
      {
        id: "q1",
        type: "scale",
        text: "De 1 a 5, o quão fácil é usar a nova ferramenta no dia a dia?",
        scaleMin: 1,
        scaleMax: 5,
        scaleLabels: { min: "Muito difícil", max: "Muito fácil" },
      },
      {
        id: "q2",
        type: "checkbox",
        text: "Quais funcionalidades você mais utiliza?",
        options: [
          { id: "o1", label: "Quadro Kanban" },
          { id: "o2", label: "Relatórios de progresso" },
          { id: "o3", label: "Integração com o calendário" },
          { id: "o4", label: "Comentários e menções" },
        ],
      },
      {
        id: "q3",
        type: "radio",
        text: "Comparando com a ferramenta anterior, sua produtividade:",
        options: [
          { id: "o1", label: "Melhorou bastante" },
          { id: "o2", label: "Melhorou um pouco" },
          { id: "o3", label: "Ficou igual" },
          { id: "o4", label: "Piorou" },
        ],
      },
      {
        id: "q4",
        type: "scale",
        text: "De 1 a 5, qual a chance de você recomendar a ferramenta para outro time?",
        scaleMin: 1,
        scaleMax: 5,
        scaleLabels: { min: "Nenhuma chance", max: "Altamente provável" },
      },
    ],
  },
  // ----- Respondidas -----
  {
    id: "s004",
    title: "Pesquisa de clima organizacional — Outubro 2026",
    description:
      "Pesquisa trimestral sobre clima, liderança e ambiente de trabalho na Nexify.",
    status: "answered",
    dueDate: "2026-10-30",
    questionsCount: 8,
    estimatedMinutes: 8,
    category: "RH",
    answeredAt: "2026-10-25",
  },
  {
    id: "s005",
    title: "Feedback sobre o programa de onboarding",
    description:
      "Para quem passou pelo onboarding nos últimos 6 meses: como foi sua experiência de entrada na Nexify?",
    status: "answered",
    dueDate: "2026-10-10",
    questionsCount: 6,
    estimatedMinutes: 6,
    category: "RH",
    answeredAt: "2026-10-03",
  },
  // ----- Encerradas -----
  {
    id: "s006",
    title: "Votação: nome da nova sala de reuniões do 5º andar",
    description:
      "Escolha do nome para a sala inaugurada em outubro. Resultado: 'Orbit' venceu com 58% dos votos.",
    status: "closed",
    dueDate: "2026-10-05",
    questionsCount: 1,
    estimatedMinutes: 1,
    category: "Geral",
  },
  {
    id: "s007",
    title: "Pesquisa de expectativas sobre modelo híbrido",
    description:
      "Levantamento realizado em setembro para orientar a definição da nova política de home office.",
    status: "closed",
    dueDate: "2026-09-20",
    questionsCount: 5,
    estimatedMinutes: 5,
    category: "RH",
  },
]
