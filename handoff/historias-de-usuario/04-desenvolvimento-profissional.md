# Histórias de Usuário — Desenvolvimento Profissional

---

## US-DEV-01 — Visualizar minhas competências técnicas num radar

**Como** colaborador, **quero** ver minhas competências técnicas num gráfico radar, **para**
identificar rapidamente onde estou mais forte e mais fraco.

**Critérios de aceite**
- O radar cobre só competências técnicas (RN-DEV-03).
- Abaixo de 1024px de largura, o radar é ocultado e a lista de competências permanece visível
  (RN-DEV-04).

```gherkin
Funcionalidade: Radar de competências técnicas

  Cenário: Radar visível em tela larga
    Dado que acesso Desenvolvimento numa tela de 1280px de largura
    Então o radar de competências técnicas é exibido

  Cenário: Radar oculto em tela estreita
    Dado que acesso Desenvolvimento numa tela de 768px de largura
    Então o radar não é exibido
    E a lista de competências técnicas continua visível com os mesmos dados
```

---

## US-DEV-02 — Ver o detalhe de uma competência específica

**Como** colaborador, **quero** clicar numa competência e ver meu nível atual comparado ao esperado
para o cargo, **para** entender exatamente onde preciso evoluir.

```gherkin
Funcionalidade: Detalhe de competência

  Cenário: Abrir o detalhe de uma competência
    Dado que estou na tela de Desenvolvimento
    Quando clico em uma competência, técnica ou comportamental
    Então vejo um modal com nível atual, nível esperado para o cargo e histórico da competência
```

---

## US-DEV-03 — Consultar meu Plano de Desenvolvimento Individual (PDI)

**Como** colaborador, **quero** ver minhas ações de desenvolvimento combinadas com responsável e
prazo, **para** saber o que preciso fazer antes da próxima 1:1 com o gestor.

```gherkin
Funcionalidade: PDI

  Cenário: PDI com ações cadastradas
    Dado que tenho ações de desenvolvimento cadastradas
    Então vejo cada ação com título, responsável, prazo e status

  Cenário: PDI sem ações cadastradas
    Dado que não tenho nenhuma ação de desenvolvimento cadastrada
    Então vejo a mensagem "Nenhuma ação cadastrada ainda."
```

---

## US-DEV-04 — Consultar o histórico de avaliações por ciclo

**Como** colaborador, **quero** ver minhas avaliações anteriores organizadas por ciclo, **para**
acompanhar minha evolução ao longo do tempo sem perder o feedback de ciclos antigos.

```gherkin
Funcionalidade: Histórico de avaliações

  Cenário: Expandir um ciclo específico
    Dado que estou na timeline de avaliações, com vários ciclos listados
    Quando expando um ciclo específico
    Então vejo o feedback completo daquele ciclo
    E os demais ciclos continuam recolhidos
```
