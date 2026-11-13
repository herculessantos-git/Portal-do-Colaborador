# Histórias de Usuário — Metas e Resultados

---

## US-MET-01 — Ver o progresso da meta anual da empresa

**Como** colaborador, **quero** ver o percentual de conclusão da meta anual da empresa, **para**
entender como a empresa está indo no ciclo, não só o meu desempenho individual.

```gherkin
Funcionalidade: Meta da empresa

  Cenário: Consultar a meta anual da empresa
    Dado que estou na tela de Metas e Resultados
    Então vejo a barra de progresso da meta anual da empresa
    E o percentual exibido corresponde ao progresso registrado
    E a data da última atualização aparece abaixo da barra
```

---

## US-MET-02 — Alternar entre minhas metas e as da equipe

**Como** colaborador, **quero** alternar entre a visão das minhas metas individuais e as da minha
equipe, **para** comparar meu progresso com o do time sem sair da tela.

**Critérios de aceite**
- A aba "Individual" é a selecionada por padrão (RN-MET-03).
- O indicador agregado de cada aba usa o pior status do conjunto, nunca uma média de status
  (RN-MET-02).

```gherkin
Funcionalidade: Abas Individual / Equipe

  Cenário: Aba padrão ao abrir a tela
    Dado que acabei de abrir a tela de Metas e Resultados
    Então a aba "Individual" está selecionada

  Cenário: Uma meta atrasada no grupo rebaixa o indicador agregado
    Dado que a equipe tem 3 metas: duas "no prazo" e uma "atrasada"
    Quando visualizo a aba "Equipe"
    Então o indicador agregado da equipe mostra status "atrasada"
    E não um status "no prazo" calculado por média
```

---

## US-MET-03 — Simular cenários de bonificação

**Como** colaborador, **quero** simular quanto eu receberia de bônus em diferentes cenários de
fechamento da meta da empresa, **para** entender o impacto financeiro antes do ciclo terminar.

**Critérios de aceite**
- O simulador varia apenas o fator "meta da empresa" (60% do cálculo), mantendo os outros dois
  fatores fixos (RN-MET-04).
- O valor em 100% é uma referência fixa; valores intermediários são proporcionais, arredondados
  para o múltiplo de R$ 50 mais próximo (RN-MET-05).
- "Entender o cálculo" sempre abre um modal explicando os três fatores e seus pesos.

```gherkin
Funcionalidade: Simulador de bônus

  Cenário: Simular o cenário de 100%
    Dado que estou na seção "Simulador de bônus", expandida
    Quando arrasto o controle para 100%
    Então o valor exibido é o valor de referência máximo do produto

  Cenário: Entender o cálculo
    Dado que estou na seção "Simulador de bônus"
    Quando clico em "Entender o cálculo"
    Então vejo um modal explicando os pesos de 60% (empresa), 30% (individual) e 10% (avaliação)
```

---

## US-MET-04 — Ver minhas metas individuais na Home

**Como** colaborador, **quero** ver minhas metas pessoais na Home, **para** ter um resumo rápido do
meu progresso sem precisar abrir o módulo de Metas.

```gherkin
Funcionalidade: Minhas metas na Home

  Cenário: Home mostra só metas individuais
    Dado que estou na Home
    Então a seção "Minhas metas" lista apenas metas com escopo individual
    E metas de empresa ou de equipe não aparecem nessa seção
```
