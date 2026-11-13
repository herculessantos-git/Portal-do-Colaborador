# Regras de Negócio — Premissas Gerais

**Produto:** Nexify | Portal do Colaborador
**Escopo:** regras que atravessam mais de um módulo, ou que todo módulo herda por padrão.

> Nomenclatura: cada regra tem um ID (`RN-<módulo>-<número>`), citado nas histórias de usuário
> correspondentes em `docs/user-stories/`. Regra sem ID não existe — toda regra documentada aqui
> tem código de produto correspondente.

---

### RN-GER-01 — Toda rota de produto exige sessão ativa

Nenhuma tela do portal (Home, Comunicação, Metas, Pesquisas, Desenvolvimento) é acessível sem
login. Sem sessão válida, qualquer URL do produto redireciona para `/login`.

### RN-GER-02 — Dados são 100% fictícios e locais

Não existe backend, API externa ou persistência real de dados de negócio. Todo conteúdo
(comunicados, metas, pesquisas, competências) vem de arquivos estáticos (`src/data/`) e vive em
memória durante a sessão do navegador — um recarregamento de página devolve o estado inicial
(exceto sessão de login e tema, que persistem via armazenamento local do navegador).

### RN-GER-03 — Modo claro/escuro é funcional, não decorativo

A alternância de tema troca de fato os tokens de cor da interface (não é só um preview visual) e
persiste a preferência entre sessões.

### RN-GER-04 — Toda ação sem fluxo real por trás avisa o colaborador, não finge funcionar

Funcionalidades fora do escopo deste ciclo (ex.: "Esqueci minha senha", "Configurações" no menu de
perfil) respondem com um aviso explícito de indisponibilidade, em vez de simular uma tela ou abrir
silenciosamente para nenhum lugar.

### RN-GER-05 — Busca global está restrita aos dados que existem

A busca no topo do produto pesquisa apenas comunicados e pesquisas (título e resumo/descrição).
Pessoas, departamentos e outros módulos não fazem parte do escopo de busca — não há diretório de
colaboradores no produto, então a busca não finge indexar o que não existe.

### RN-GER-06 — Identificadores inválidos na URL são um estado de erro de primeira classe

`/comunicacao/:id` e `/pesquisas/:id` tratam explicitamente o caso de um `id` que não corresponde
a nenhum registro: tela de erro dedicada ("não encontrado") com retorno à listagem, nunca uma tela
em branco ou quebrada.
