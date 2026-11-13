import type { Communication } from "../types"

export const communications: Communication[] = [
  {
    id: "c001",
    title: "Mudança na política de home office a partir de janeiro",
    summary:
      "A diretoria aprovou o novo modelo híbrido com 3 dias presenciais obrigatórios por semana.",
    content:
      "A partir de 5 de janeiro de 2027, a Nexify adota o novo modelo híbrido de trabalho, com 3 dias presenciais obrigatórios por semana (terça, quarta e quinta) para todas as áreas, exceto times 100% remotos já formalizados em contrato. A decisão segue o resultado da pesquisa de clima realizada em outubro, que apontou necessidade de maior colaboração presencial em momentos de definição de produto. As escalas de mesa serão divulgadas até 20 de dezembro pelo RH, e cada liderança receberá um guia de transição para conversar com o time. Dúvidas podem ser enviadas diretamente para rh@nexify.com.",
    priority: "urgent",
    category: "Diretoria",
    date: "2026-11-10",
    status: "unread",
    author: "Diretoria Executiva",
    requiresConfirmation: true,
  },
  {
    id: "c002",
    title: "Janela de manutenção nos servidores de produção",
    summary:
      "Sistemas internos ficarão indisponíveis das 23h às 2h de sábado para migração de infraestrutura.",
    content:
      "A equipe de Infraestrutura realizará uma migração crítica dos servidores de produção para a nova região de cloud. Durante a janela de manutenção (sábado, 23h às 2h de domingo), os sistemas internos — incluindo este portal, o CRM e o ERP — ficarão indisponíveis. Nenhuma ação é necessária por parte dos colaboradores. Em caso de urgência fora do horário comercial, utilize o canal de on-call no WhatsApp corporativo.",
    priority: "urgent",
    category: "TI",
    date: "2026-11-12",
    status: "unread",
    author: "Equipe de Infraestrutura",
    requiresConfirmation: true,
  },
  {
    id: "c003",
    title: "Resultado da pesquisa de clima organizacional",
    summary:
      "87% de participação e nota geral de satisfação de 7,8 — confira os destaques por área.",
    content:
      "A pesquisa de clima organizacional realizada em outubro teve 87% de participação, um recorde histórico para a Nexify. A nota geral de satisfação foi 7,8 (em uma escala de 0 a 10), com destaque positivo para autonomia e propósito do trabalho, e pontos de atenção em comunicação entre áreas e carga de trabalho em períodos de fechamento. O relatório completo, segmentado por área e senioridade, está disponível para os gestores a partir desta semana. Agradecemos a todos que participaram.",
    priority: "important",
    category: "RH",
    date: "2026-11-05",
    status: "unread",
    author: "RH Nexify",
  },
  {
    id: "c004",
    title: "Novo plano de saúde entra em vigor em dezembro",
    summary:
      "Upgrade de cobertura sem custo adicional para o colaborador. Carteirinhas chegam até 15/12.",
    content:
      "A partir de 1º de dezembro, a Nexify migra todos os colaboradores para o novo plano de saúde, com rede ampliada e cobertura odontológica incluída, sem nenhum custo adicional na folha. As novas carteirinhas físicas e digitais serão enviadas até 15 de dezembro. Dependentes já cadastrados são migrados automaticamente; novos dependentes podem ser incluídos até 30/11 pelo portal de benefícios.",
    priority: "important",
    category: "RH",
    date: "2026-11-08",
    status: "read",
    author: "RH Nexify",
  },
  {
    id: "c005",
    title: "Nova política de reembolso de despesas",
    summary:
      "Prazo de envio de notas fiscais passa de 30 para 45 dias corridos após a despesa.",
    content:
      "Atendendo a pedidos frequentes das equipes, o prazo para envio de notas fiscais no sistema de reembolso passa de 30 para 45 dias corridos a partir da data da despesa. A política entra em vigor imediatamente e vale também para despesas já pendentes. O fluxo de aprovação pelo gestor direto permanece inalterado.",
    priority: "important",
    category: "RH",
    date: "2026-10-28",
    status: "read",
    author: "Financeiro",
  },
  {
    id: "c006",
    title: "Nexify abre vagas internas para o time de Dados",
    summary:
      "3 posições abertas para Analista e Engenheiro de Dados. Indicações internas têm prioridade.",
    content:
      "O time de Dados está crescendo e abriu 3 posições: 1 Analista de Dados Pleno e 2 Engenheiros de Dados Sênior. Colaboradores interessados em transição de carreira interna têm prioridade no processo seletivo. Interessados devem conversar com o gestor direto antes de se candidatar pelo portal de vagas internas.",
    priority: "informational",
    category: "RH",
    date: "2026-10-22",
    status: "read",
    author: "RH Nexify",
  },
  {
    id: "c007",
    title: "Confraternização de fim de ano marcada para 12 de dezembro",
    summary:
      "Evento será no espaço Vila Rooftop, a partir das 19h. Confirme presença até 28/11.",
    content:
      "A festa de fim de ano da Nexify acontece no dia 12 de dezembro, a partir das 19h, no espaço Vila Rooftop. Haverá open bar, jantar e música ao vivo. Acompanhantes são bem-vindos (1 por colaborador). Confirme sua presença pelo formulário até 28 de novembro para garantir a lista de convidados.",
    priority: "informational",
    category: "Geral",
    date: "2026-11-01",
    status: "read",
    author: "Comitê de Eventos",
  },
  {
    id: "c008",
    title: "Nova sala de reunião disponível no 5º andar",
    summary:
      "Sala 'Orbit', com capacidade para 10 pessoas, já está disponível para agendamento.",
    content:
      "A nova sala de reunião 'Orbit', no 5º andar, está disponível para agendamento pelo sistema interno de reservas. Capacidade para 10 pessoas, com TV 65\" e sistema de videoconferência integrado. Ajuda a aliviar a disputa por salas nos horários de pico.",
    priority: "informational",
    category: "Geral",
    date: "2026-10-15",
    status: "read",
    author: "Facilities",
  },
]
