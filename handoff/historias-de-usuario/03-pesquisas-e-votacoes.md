# Histórias de Usuário — Pesquisas e Votações

---

## US-PES-01 — Ver pesquisas separadas por status

**Como** colaborador, **quero** ver minhas pesquisas organizadas por Abertas, Respondidas e
Encerradas, **para** saber rapidamente o que ainda preciso responder.

```gherkin
Funcionalidade: Abas de status

  Cenário: Pesquisa aberta aparece na aba certa
    Dado uma pesquisa com status "aberta"
    Quando abro a listagem de Pesquisas e Votações
    Então essa pesquisa aparece na aba "Abertas", com a contagem correspondente
```

---

## US-PES-02 — Responder uma pesquisa passo a passo

**Como** colaborador, **quero** responder uma pesquisa uma pergunta por vez, com a opção de revisar
antes de enviar, **para** não errar uma resposta por pressa.

**Critérios de aceite**
- Fluxo fixo: introdução → formulário → revisão → confirmação (RN-PES-04).
- O botão de avançar fica desabilitado sem uma resposta válida na pergunta atual (RN-PES-05).
- Voltar da revisão para o formulário preserva as respostas já dadas (RN-PES-07).

```gherkin
Funcionalidade: Fluxo de resposta

  Cenário: Não avançar sem responder
    Dado que estou na pergunta 2 de 5 de uma pesquisa aberta
    E ainda não selecionei nenhuma opção
    Então o botão "Próxima" está desabilitado

  Cenário: Revisar e voltar sem perder respostas
    Dado que respondi todas as perguntas e estou na tela de revisão
    Quando clico em "Voltar para o formulário" e volto à revisão
    Então todas as respostas dadas anteriormente continuam preenchidas

  Cenário: Enviar a resposta
    Dado que estou na tela de revisão de uma pesquisa aberta
    Quando clico em "Enviar resposta"
    Então vejo a tela de confirmação "Resposta enviada!"
    E a pesquisa passa a aparecer na aba "Respondidas"
```

---

## US-PES-03 — Não conseguir responder uma pesquisa encerrada

**Como** colaborador, **quero** ser impedido de responder uma pesquisa cujo prazo já passou,
**para** que os dados coletados reflitam só quem respondeu dentro do prazo.

```gherkin
Funcionalidade: Pesquisa encerrada

  Cenário: Acessar uma pesquisa encerrada
    Dado uma pesquisa com status "encerrada"
    Quando abro o detalhe dessa pesquisa
    Então vejo uma tela de bloqueio citando a data de encerramento
    E não vejo o botão "Começar" em nenhum momento
```

---

## US-PES-04 — Não conseguir responder a mesma pesquisa duas vezes

**Como** colaborador, **quero** que uma pesquisa já respondida não me deixe responder de novo,
**para** que meu voto/resposta conte uma única vez.

```gherkin
Funcionalidade: Pesquisa já respondida

  Cenário: Reabrir uma pesquisa respondida
    Dado uma pesquisa com status "respondida" e data de resposta registrada
    Quando abro o detalhe dessa pesquisa
    Então vejo uma tela de agradecimento com a data em que respondi
    E não vejo o formulário de resposta
```
