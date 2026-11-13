# Regras de Negócio — Autenticação, Navegação e Busca

**Onde vive:** `/login`, `src/hooks/useAuth.tsx`, `src/layouts/` (Sidebar, Topbar, BottomNav,
GlobalSearch, ProfileMenu)

---

### RN-AUTH-01 — O campo de usuário aceita qualquer texto, não exige formato de e-mail

O campo de login é `type="text"`, não `type="email"` — decisão deliberada para este protótipo, que
não simula verificação de credencial nenhuma. Qualquer combinação de usuário e senha não vazios
autentica com sucesso.

### RN-AUTH-02 — A sessão persiste entre recarregamentos de página, não entre dispositivos

O estado de autenticação é salvo em armazenamento local do navegador. Fechar a aba e reabrir
mantém a sessão; limpar os dados do navegador ou acessar de outro dispositivo exige novo login.

### RN-AUTH-03 — "Lembrar meus dados" persiste apenas o usuário, nunca a senha

Com a opção marcada, o campo de usuário vem pré-preenchido em visitas futuras. A senha nunca é
armazenada, mesmo com a opção marcada — ela precisa ser digitada a cada login.

### RN-AUTH-04 — Sair encerra a sessão e redireciona para o login, sem exceção

Não existe estado "parcialmente deslogado" — ao sair, a sessão é removida e qualquer tentativa
subsequente de acessar uma rota de produto cai no login (RN-GER-01).

### RN-AUTH-05 — Os itens "Documentos" e "RH / DP" têm rota própria, mas nenhuma funcionalidade

São visualmente idênticos aos demais itens de navegação (mesmo estilo, sem badge ou indicação de
"em breve") e levam a uma página de aviso genérica — a intenção é comunicar que o produto já prevê
esses módulos, sem prometer uma função que este ciclo não implementa.

### RN-AUTH-06 — A busca global pesquisa por substring, em título e resumo/descrição

Não é busca exata nem indexação por relevância — é correspondência de texto (case-insensitive) no
título e no resumo (comunicados) ou descrição (pesquisas), limitada aos 8 primeiros resultados.

### RN-AUTH-07 — No mobile, a busca é uma ação, não um campo sempre visível

Abaixo do breakpoint de tablet, o campo de busca fica oculto na topbar por padrão; um ícone de lupa
abre o campo em largura total, com foco automático. Fechar (botão "X" ou selecionar um resultado)
devolve a topbar ao estado padrão.
