# Regras de Negócio — Onboarding (widget da Home)

**Onde vive:** widget expansível na Home (`OnboardingCard`), não é uma tela/aba própria.
**Fonte:** `src/data/onboarding.ts`, `src/pages/Home/OnboardingCard.tsx`

> Por que não é uma 6ª tela: o escopo deste ciclo é de 5 telas principais (Home, Comunicação,
> Metas, Pesquisas, Desenvolvimento). Onboarding é, por natureza, um estado **temporário** do
> colaborador — diferente dos outros módulos, que são usados o tempo todo —, então vive como um
> widget que desaparece de relevância quando a jornada termina, em vez de ganhar um item fixo e
> permanente na navegação.

---

### RN-ONB-01 — O onboarding tem duas fases, e a Fase 2 só existe depois da Fase 1 completa

A Fase 1 é interativa (passos com checkbox). A Fase 2 é liberada automaticamente ao concluir 100%
da Fase 1 — nunca antes, e nunca por uma ação manual de "pular etapa".

### RN-ONB-02 — Cada passo da Fase 1 vale pontos fixos, e a soma total é 100

Cinco passos, 20 pontos cada. O número redondo (100) é proposital — lê-se diretamente como
percentual de conclusão.

### RN-ONB-03 — Concluir 100% da Fase 1 dispara uma celebração, e a decisão de avançar é do colaborador

Ao marcar o último passo pendente, o widget expande automaticamente e entra em estado de
celebração (confete, troféu, pontuação final). Daí em diante, **não há avanço automático** — dois
botões, "Ver depois" e "Continuar", e só a escolha do colaborador leva à Fase 2 ou adia a decisão.

### RN-ONB-04 — A Fase 2 é somente pré-visualização, nunca interativa

Nenhum passo da Fase 2 tem checkbox, pontuação ativa ou ação disponível — existe para comunicar
que o roteiro de integração continua (treinamento de segurança, avaliação de 90 dias, plano de
carreira, metas do próximo ciclo), não para ser concluída neste protótipo.

### RN-ONB-05 — Os passos do onboarding não navegam para os módulos reais do produto

Marcar um passo como concluído é uma autodeclaração do colaborador (equivalente a "eu já fiz isso
fora do sistema") — nenhum passo da Fase 1 ou 2 linka para uma tela de Metas, Pesquisas ou outro
módulo, mesmo quando o passo descreve uma ação relacionada a um desses módulos.

### RN-ONB-06 — Não há ranking, comparação ou exposição pública de progresso entre colegas

A gamificação (pontos, estrelas) é inteiramente contida ao progresso do próprio colaborador —
decisão deliberada, não uma omissão: onboarding é um momento de adaptação, e expor publicamente
quem está "atrás" cria pressão onde deveria haver segurança psicológica.
