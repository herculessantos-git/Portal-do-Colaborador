# Regras de Negócio — Comunicação Interna

**Módulo:** Comunicação (`/comunicacao`, `/comunicacao/:id`)
**Fonte:** `src/types/index.ts` (`Communication`, `Priority`, `CommunicationStatus`,
`CommunicationCategory`), `src/pages/Communication/`

---

### RN-COM-01 — Todo comunicado tem exatamente uma prioridade

`priority` é `urgent` (Urgente), `important` (Importante) ou `informational` (Informativo) — nunca
mais de uma, nunca nenhuma. A prioridade define a cor do badge exibido no card da listagem e no
cabeçalho do detalhe.

### RN-COM-02 — Todo comunicado tem exatamente uma categoria

`category` é `RH`, `Diretoria`, `TI` ou `Geral`. A categoria alimenta o filtro da listagem; um
comunicado aparece em "Todas" e na sua categoria específica, nunca em mais de uma categoria
simultânea.

### RN-COM-03 — Status de leitura tem dois valores, e a transição é unidirecional

`status` é `unread` ou `read`. Uma vez marcado como `read`, um comunicado não volta a `unread`
neste protótipo — não existe ação de "marcar como não lido".

### RN-COM-04 — Comunicado sem exigência de confirmação é marcado como lido automaticamente

Se `requiresConfirmation` não está definido (ou é `false`), abrir a tela de detalhe já marca o
comunicado como lido, sem exigir nenhuma ação adicional do colaborador.

### RN-COM-05 — Comunicado com `requiresConfirmation: true` exige ação explícita

Enquanto `status` for `unread`, um comunicado com `requiresConfirmation: true` **não** é marcado
como lido só por ser aberto — exibe o botão "Confirmar leitura", e só a partir do clique nesse
botão o status muda para `read` (com toast de confirmação). Esta é a única diferença de
comportamento entre um comunicado comum e um que exige confirmação.

### RN-COM-06 — A Home mostra, no máximo, os 3 comunicados mais recentes

A seção "Comunicados recentes" da Home lista até 3 itens, ordenados do mais recente para o mais
antigo por `date`, com link para a listagem completa.

### RN-COM-07 — Filtrar por categoria pode resultar em lista vazia

Não há garantia de que toda categoria tenha pelo menos um comunicado em um dado momento — o filtro
tem um estado vazio dedicado, em vez de impedir a seleção de categorias sem itens.
