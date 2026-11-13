# Regras de Negócio — Metas e Resultados

**Módulo:** Metas e Resultados (`/metas`)
**Fonte:** `src/types/index.ts` (`Goal`, `GoalStatus`, `GoalScope`, `BonusEstimate`),
`src/pages/Goals/`

---

### RN-MET-01 — Toda meta tem um escopo e um status, cada um com valor único

`scope` é `company` (empresa), `team` (equipe) ou `individual`. `status` é `on-track` (no prazo),
`at-risk` (em risco), `delayed` (atrasada) ou `completed` (concluída). Uma meta não pode estar em
mais de um status ao mesmo tempo.

### RN-MET-02 — Agregação de um grupo de metas usa o pior status do conjunto, nunca uma média

Ao consolidar várias metas (ex.: todas as metas de equipe, ou todas as individuais) em um único
indicador, o status exibido é o mais severo entre elas (`delayed` > `at-risk` > `on-track` >
`completed`, em ordem de severidade). Uma meta atrasada no meio de três no prazo não pode
desaparecer numa média que pareça tudo bem — ela determina a cor do indicador agregado. O
progresso agregado (%), por sua vez, é a média aritmética simples do grupo.

### RN-MET-03 — A visão de Metas tem duas abas, Individual e Equipe, com Individual como padrão

A troca de aba não recarrega dados — é apenas uma alternância de qual subconjunto de metas (e sua
agregação, RN-MET-02) é exibido. A meta da empresa e a seção de bonificação ficam visíveis
independentemente da aba selecionada.

### RN-MET-04 — A bonificação individual é composta por três fatores com pesos fixos

60% vem do fechamento da meta anual da **empresa**; 30% da média de progresso das metas
**individuais** do colaborador no ciclo; 10% do resultado da última **avaliação de desempenho**.
O simulador de bônus da tela de Metas varia apenas o primeiro fator (meta da empresa), mantendo os
outros dois fixos no valor atual do colaborador — por isso o resultado é rotulado como estimativa,
nunca como valor confirmado antes do fechamento do ciclo.

### RN-MET-05 — O valor de bonificação para 100% de fechamento da empresa é fixo, e o valor
intermediário é proporcional

O valor pago quando a empresa fecha a meta anual em 100% é uma constante de referência do produto.
Para qualquer percentual de fechamento abaixo disso, o valor da bonificação é proporcional ao
percentual, arredondado para o múltiplo de R$ 50 mais próximo (nunca um valor quebrado em centavos
na tela).

### RN-MET-06 — `BonusEstimate.state` reflete o estado do ciclo, não o valor calculado

`state` é `partial` (ciclo em andamento — a faixa de valor é uma estimativa), `confirmed` (meta
batida — valor já garantido) ou `zero` (meta não atingida no ciclo encerrado — sem bonificação).
O simulador de cenários hipotéticos (RN-MET-04/05) é uma ferramenta de exploração independente
deste estado — ele não muda o `state` real do ciclo vigente.

### RN-MET-07 — "Minhas metas" na Home mostra apenas metas individuais

A seção de metas na Home (`MyGoals`) exibe só o conjunto `scope: "individual"` do colaborador
logado — metas de empresa e de equipe aparecem exclusivamente dentro da tela de Metas e
Resultados.
