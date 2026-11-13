# Histórias de Usuário — Comunicação Interna

---

## US-COM-01 — Ler os comunicados mais recentes direto na Home

**Como** colaborador, **quero** ver os comunicados mais recentes assim que abro a Home, **para**
não precisar entrar em outro módulo só para saber se há algo novo.

**Critérios de aceite**
- A Home exibe até 3 comunicados, ordenados do mais recente para o mais antigo (RN-COM-06).
- Cada card mostra prioridade, categoria e indicador de não lido quando aplicável.
- Há um link para a listagem completa de Comunicação.

```gherkin
Funcionalidade: Comunicados recentes na Home

  Cenário: Home mostra no máximo 3 comunicados
    Dado que existem mais de 3 comunicados cadastrados
    Quando o colaborador abre a Home
    Então no máximo 3 comunicados são exibidos na seção "Comunicados recentes"
    E eles estão ordenados do mais recente para o mais antigo
```

---

## US-COM-02 — Filtrar comunicados por categoria

**Como** colaborador, **quero** filtrar a listagem de comunicados por categoria, **para** achar
rapidamente avisos de uma área específica (RH, Diretoria, TI ou Geral).

```gherkin
Funcionalidade: Filtro por categoria

  Cenário: Filtrar por uma categoria com comunicados
    Dado que estou na listagem de Comunicação
    Quando seleciono a categoria "TI"
    Então apenas comunicados com categoria "TI" aparecem na lista

  Cenário: Filtrar por uma categoria sem comunicados
    Dado que a categoria "Diretoria" não tem nenhum comunicado no momento
    Quando seleciono a categoria "Diretoria"
    Então vejo uma mensagem de estado vazio, não uma lista quebrada ou em branco
```

---

## US-COM-03 — Ler um comunicado comum e tê-lo marcado como lido automaticamente

**Como** colaborador, **quero** que abrir um comunicado sem exigência especial já conte como
leitura, **para** não precisar de um clique extra em toda mensagem.

```gherkin
Funcionalidade: Leitura automática

  Cenário: Abrir um comunicado sem exigência de confirmação
    Dado um comunicado não lido com requiresConfirmation ausente ou falso
    Quando abro o detalhe desse comunicado
    Então o status muda para "lido" automaticamente, sem ação adicional
    E a tag "Comunicado lido" aparece no rodapé do detalhe
```

---

## US-COM-04 — Confirmar a leitura de um comunicado urgente

**Como** colaborador, **quero** que comunicados marcados como obrigatórios exijam uma confirmação
explícita, **para** que a empresa tenha certeza de que a mensagem foi de fato lida, não só aberta.

**Critérios de aceite**
- RN-COM-05: abrir a tela não muda o status sozinho quando `requiresConfirmation: true`.
- O botão "Confirmar leitura" só aparece nesse caso, e só enquanto o status for "não lido".
- Confirmar dispara um toast ("Leitura confirmada.") e atualiza o status.

```gherkin
Funcionalidade: Confirmação de leitura obrigatória

  Cenário: Comunicado com confirmação obrigatória ainda não lido
    Dado um comunicado não lido com requiresConfirmation = true
    Quando abro o detalhe desse comunicado
    Então o status permanece "não lido"
    E vejo o botão "Confirmar leitura" em destaque

  Cenário: Confirmar a leitura
    Dado que estou no detalhe de um comunicado que exige confirmação
    Quando clico em "Confirmar leitura"
    Então vejo o toast "Leitura confirmada."
    E o status do comunicado muda para "lido"
    E o botão de confirmação some, dando lugar à tag "Comunicado lido"
```

---

## US-COM-05 — Acessar um comunicado por um link inválido

**Como** colaborador, **quero** uma mensagem clara quando o link de um comunicado não existe mais,
**para** não ficar numa tela em branco sem saber o que aconteceu.

```gherkin
Funcionalidade: Comunicado não encontrado

  Cenário: Acessar um id de comunicado inexistente
    Dado que acesso "/comunicacao/id-que-nao-existe"
    Então vejo a mensagem "Comunicado não encontrado."
    E um botão para voltar à listagem de Comunicação
```
