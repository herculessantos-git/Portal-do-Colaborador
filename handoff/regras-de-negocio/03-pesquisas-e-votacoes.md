# Regras de Negócio — Pesquisas e Votações

**Módulo:** Pesquisas e Votações (`/pesquisas`, `/pesquisas/:id`)
**Fonte:** `src/types/index.ts` (`Survey`, `SurveyStatus`, `Question`, `QuestionType`),
`src/pages/Surveys/`

---

### RN-PES-01 — Toda pesquisa tem exatamente um status, com transição unidirecional

`status` é `open` (aberta), `answered` (respondida) ou `closed` (encerrada). Uma pesquisa
respondida não volta a `open`; uma pesquisa encerrada não aceita resposta mesmo que nunca tenha
sido respondida — o prazo (`dueDate`) governa a transição para `closed`, independente de ter ou não
resposta registrada.

### RN-PES-02 — Pesquisa `closed` bloqueia o formulário antes mesmo de ele começar

Acessar o detalhe de uma pesquisa encerrada nunca mostra o passo de introdução ou o formulário —
mostra diretamente uma tela de bloqueio, citando a data de encerramento. Não há exceção para
"responder fora do prazo".

### RN-PES-03 — Pesquisa `answered` mostra agradecimento, nunca reabre o formulário

Acessar o detalhe de uma pesquisa já respondida mostra uma tela de agradecimento (com a data da
resposta, quando disponível) — não é possível reenviar ou alterar uma resposta já registrada.

### RN-PES-04 — O fluxo de resposta tem exatamente 4 passos, nesta ordem

Introdução → Formulário (uma pergunta por vez) → Revisão → Confirmação. Não é possível pular
etapas: o botão de avançar no formulário só libera revisão ao chegar na última pergunta, e o envio
definitivo só acontece a partir da tela de revisão, nunca diretamente do formulário.

### RN-PES-05 — Uma pergunta sem resposta bloqueia o avanço

O botão "Próxima"/"Revisar respostas" fica desabilitado enquanto a pergunta atual não tiver uma
resposta válida. Para perguntas de múltipla escolha (`checkbox`), pelo menos uma opção marcada
conta como resposta válida; nenhuma opção marcada não conta.

### RN-PES-06 — Três tipos de pergunta, cada um com sua forma de resposta

`radio` (escolha única), `checkbox` (múltipla escolha) e `scale` (escala numérica, com rótulos de
mínimo e máximo próprios por pergunta — não um rótulo genérico fixo no produto).

### RN-PES-07 — Respostas não são perdidas ao voltar para revisar

Navegar da tela de revisão de volta ao formulário para alterar uma resposta preserva as respostas
já dadas às demais perguntas — revisar não obriga a recomeçar o questionário do zero.

### RN-PES-08 — Enviar a resposta muda o status da pesquisa para `answered` imediatamente

Não há etapa de processamento ou confirmação assíncrona: ao confirmar o envio na tela de revisão,
o status muda, a data de resposta é registrada, e a pesquisa passa a aparecer na aba "Respondidas"
da listagem.
