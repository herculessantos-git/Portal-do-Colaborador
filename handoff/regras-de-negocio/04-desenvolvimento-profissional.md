# Regras de Negócio — Desenvolvimento Profissional

**Módulo:** Desenvolvimento (`/desenvolvimento`)
**Fonte:** `src/types/index.ts` (`Skill`, `SkillCategory`, `SkillLevel`, `PdiAction`,
`PdiActionStatus`, `EvaluationHistoryEntry`), `src/pages/Development/`

---

### RN-DEV-01 — Toda competência pertence a exatamente uma categoria

`category` é `technical` (técnica) ou `behavioral` (comportamental). Competências técnicas
alimentam o radar de competências; comportamentais aparecem como lista ao lado do PDI — as duas
categorias nunca se misturam na mesma visualização.

### RN-DEV-02 — Nível de competência é uma escala fechada de 1 a 5

`currentLevel` e `expectedLevel` são sempre um inteiro entre 1 e 5. A comparação entre os dois
(nível atual vs. nível esperado para o cargo) é o dado central do detalhe de cada competência —
nunca um texto livre.

### RN-DEV-03 — O radar de competências cobre só as competências técnicas

As comportamentais, por terem geralmente mais itens e nomes mais longos, ficam em lista — essa
separação evita um radar com eixos ilegíveis.

### RN-DEV-04 — Abaixo de 1024px de largura, o radar é ocultado, não redesenhado

A lista de competências já cobre o mesmo dado de forma legível em telas estreitas, então o radar
(que teria rótulos de eixo cortados nesse espaço) simplesmente não é exibido — sem tentar uma
versão compacta do próprio gráfico.

### RN-DEV-05 — PDI (Plano de Desenvolvimento Individual) é somente leitura neste protótipo

Toda ação do PDI tem `status` (`not-started`, `in-progress`, `completed`), um responsável e um
prazo. Não existe, no escopo atual, uma ação de criar, editar ou concluir uma ação do PDI pela
interface — é uma lista informativa, preenchida a partir de uma conversa com o gestor fora do
produto.

### RN-DEV-06 — PDI sem ações cadastradas mostra um estado vazio, não uma lista quebrada

Se o colaborador ainda não tem nenhuma ação de desenvolvimento registrada, a seção de PDI informa
isso explicitamente, em vez de aparecer em branco.

### RN-DEV-07 — O histórico de avaliações é organizado por ciclo, do mais recente ao mais antigo

Cada entrada do histórico tem data, ciclo, resultado e o feedback completo daquele ciclo — expansível
individualmente, sem exigir que o colaborador abra todo o histórico de uma vez para ler um ciclo
específico.
