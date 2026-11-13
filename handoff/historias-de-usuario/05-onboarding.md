# Histórias de Usuário — Onboarding (widget da Home)

---

## US-ONB-01 — Acompanhar meu progresso de integração na Home

**Como** colaborador recém-chegado, **quero** ver quantos passos do meu onboarding já completei,
**para** entender quanto falta sem precisar perguntar ao RH.

**Critérios de aceite**
- Cada passo vale 20 pontos; a soma total é 100 (RN-ONB-02).
- Marcar/desmarcar um passo atualiza a barra de progresso e a pontuação imediatamente.

```gherkin
Funcionalidade: Progresso do onboarding

  Cenário: Marcar um passo como concluído
    Dado que estou com o onboarding expandido, com 2 de 5 passos concluídos
    Quando marco um terceiro passo como concluído
    Então a barra de progresso passa a refletir 3 de 5 passos
    E a pontuação exibida aumenta em 20 pontos
```

---

## US-ONB-02 — Celebrar a conclusão da Fase 1 e decidir quando avançar

**Como** colaborador, **quero** uma celebração ao completar a Fase 1, com controle sobre quando
avançar para a Fase 2, **para** aproveitar o momento sem ser empurrado para a etapa seguinte.

**Critérios de aceite**
- Completar o último passo pendente dispara a celebração automaticamente (RN-ONB-03).
- Os botões "Ver depois" e "Continuar" aparecem juntos — nenhum avanço automático por tempo.

```gherkin
Funcionalidade: Celebração da Fase 1

  Cenário: Completar o último passo da Fase 1
    Dado que faltava 1 passo para concluir a Fase 1
    Quando marco esse último passo como concluído
    Então vejo a animação de celebração com a pontuação final (100 pontos)
    E vejo os botões "Ver depois" e "Continuar"

  Cenário: Escolher ver depois
    Dado que estou na tela de celebração da Fase 1
    Quando clico em "Ver depois"
    Então o widget recolhe, mas a Fase 2 já fica registrada como liberada

  Cenário: Escolher continuar
    Dado que estou na tela de celebração da Fase 1
    Quando clico em "Continuar"
    Então vejo os passos de pré-visualização da Fase 2
```

---

## US-ONB-03 — Ver a Fase 2 como pré-visualização, sem poder interagir

**Como** colaborador, **quero** entender que o roteiro de integração continua depois da Fase 1,
**para** saber o que esperar nos próximos meses, mesmo sem poder marcar nada ainda.

```gherkin
Funcionalidade: Fase 2 (pré-visualização)

  Cenário: Passos da Fase 2 não são clicáveis
    Dado que estou na Fase 2 do onboarding
    Então cada passo aparece com um ícone de círculo vazio, sem checkbox funcional
    E nenhum clique num passo da Fase 2 altera seu estado
```
