# Histórias de Usuário — Login, Logout, Navegação e Busca

---

## US-AUTH-01 — Entrar no portal

**Como** colaborador, **quero** fazer login informando usuário e senha, **para** acessar meu
portal pessoal.

**Critérios de aceite**
- O campo de usuário aceita qualquer texto, não exige formato de e-mail (RN-AUTH-01).
- Qualquer combinação não vazia de usuário/senha autentica com sucesso.

```gherkin
Funcionalidade: Login

  Cenário: Entrar com qualquer credencial não vazia
    Dado que estou na tela de login, deslogado
    Quando preencho usuário e senha com qualquer texto não vazio
    E clico em "Entrar"
    Então sou redirecionado para a Home, autenticado
```

---

## US-AUTH-02 — Ser impedido de acessar o produto sem login

**Como** colaborador sem sessão ativa, **quero** ser redirecionado ao login ao tentar acessar
qualquer tela do portal, **para** que meus dados fiquem protegidos atrás de uma sessão.

```gherkin
Funcionalidade: Rotas protegidas

  Cenário: Acessar uma rota de produto sem sessão
    Dado que não tenho uma sessão ativa
    Quando acesso diretamente a URL de qualquer módulo do produto (ex.: "/metas")
    Então sou redirecionado para "/login"
```

---

## US-AUTH-03 — Ser lembrado na próxima visita

**Como** colaborador, **quero** marcar "Lembrar meus dados" no login, **para** não digitar meu
usuário toda vez que acessar o portal.

```gherkin
Funcionalidade: Lembrar meus dados

  Cenário: Login com "Lembrar meus dados" marcado
    Dado que faço login com "Lembrar meus dados" marcado
    Quando saio e volto à tela de login depois
    Então o campo de usuário já vem preenchido
    E o campo de senha continua vazio
```

---

## US-AUTH-04 — Sair do portal

**Como** colaborador, **quero** encerrar minha sessão pelo menu de perfil, **para** proteger meus
dados ao usar um computador compartilhado.

```gherkin
Funcionalidade: Logout

  Cenário: Sair pelo menu de perfil
    Dado que estou autenticado, em qualquer tela do produto
    Quando abro o menu de perfil e clico em "Sair"
    Então sou redirecionado para "/login"
    E uma nova tentativa de acessar uma rota de produto exige login novamente
```

---

## US-AUTH-05 — Buscar um comunicado ou pesquisa pelo topo da tela

**Como** colaborador, **quero** buscar por um comunicado ou pesquisa direto da topbar, **para** não
precisar navegar manualmente até o módulo certo quando já sei o que procuro.

```gherkin
Funcionalidade: Busca global

  Cenário: Buscar um termo com resultado
    Dado que digito um termo que corresponde ao título de um comunicado
    Então vejo esse comunicado listado nos resultados, com o rótulo "Comunicado"

  Cenário: Buscar um termo sem resultado
    Dado que digito um termo que não corresponde a nenhum comunicado ou pesquisa
    Então vejo a mensagem "Nenhum resultado para [termo]"

  Cenário: Selecionar um resultado
    Dado que a busca retornou ao menos um resultado
    Quando clico em um resultado
    Então sou levado à tela de detalhe correspondente
    E o campo de busca é limpo
```

---

## US-AUTH-06 — Buscar pelo celular

**Como** colaborador usando o celular, **quero** acessar a busca sem que ela ocupe espaço
permanente na tela, **para** ter mais espaço de conteúdo numa tela pequena.

```gherkin
Funcionalidade: Busca mobile

  Cenário: Abrir a busca no mobile
    Dado que acesso o produto numa tela estreita (abaixo de 768px)
    Quando toco no ícone de busca na topbar
    Então o campo de busca expande ocupando a largura inteira
    E o campo já vem com o foco, pronto para digitar

  Cenário: Fechar a busca mobile
    Dado que a busca mobile está aberta
    Quando toco no "X" ao lado do campo
    Então a topbar volta ao estado padrão (tema, notificações, perfil)
```
