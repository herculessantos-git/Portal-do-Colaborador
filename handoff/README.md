# Nexify | Portal do Colaborador — Pacote de Handoff

Entrega de design para desenvolvimento: protótipo navegável, UI de produção, UI Kit, regras de
negócio e histórias de usuário. Não é o repositório de trabalho completo — é só o que o dev
precisa para construir as telas com fidelidade.

---

## Como abrir cada parte

### 1. `prototipo-navegavel/Nexify-Prototipo.html`
Arquivo único, abre com duplo clique, **sem precisar de servidor ou internet**. É o produto
inteiro — login (aceita qualquer usuário/senha) e os 5 módulos (Home, Comunicação, Metas,
Pesquisas, Desenvolvimento) — navegável de verdade, incluindo a documentação viva do Design System
(acessível pelo rodapé/URL `#design-system` depois de logar). Use para apresentar ou para conferir
comportamento antes de tocar no código.

### 2. `ui/`
Código-fonte de produção (React + TypeScript + Tailwind + shadcn/ui), organizado como no projeto
original:

```
ui/
├── App.tsx          ← rotas da aplicação
├── index.css        ← tokens do design system em CSS
├── components/       ← componentes reutilizáveis (Badge, Card, Button, ui/* do shadcn...)
├── layouts/          ← AppLayout, Sidebar, Topbar, BottomNav, busca global
├── pages/             ← uma pasta por módulo (Home, Communication, Goals, Surveys, Development, Login)
├── hooks/             ← useAuth, useAppData, useTheme, useToast
├── data/              ← dados mockados (sem backend)
└── types/            ← tipos TypeScript compartilhados
```

Copie estas pastas para dentro do seu projeto (stack igual: Vite + React + TypeScript + Tailwind
v3 + shadcn/ui) — não são um andaime de protótipo, é o código real das telas.

### 3. `ui-kit/design-system.md`
Especificação escrita do design system: paleta, tipografia, grid, espaçamento, componentes base.
A versão **viva e navegável** do mesmo conteúdo está dentro do protótipo (`#design-system`).

### 4. `regras-de-negocio/`
Uma regra por ID (`RN-<módulo>-<número>`), um arquivo por módulo, em `.md` e `.docx`.

### 5. `historias-de-usuario/`
Histórias de usuário em BDD/Gherkin (pt-BR), cenários `Dado`/`Quando`/`Então`, um arquivo por
módulo, em `.md` e `.docx`. Cada critério de aceite cita a regra de negócio correspondente.

---

## Stack técnica (para rodar `ui/` como projeto)

```
React 19 + TypeScript + Vite 8
Tailwind CSS v3
React Router v7
shadcn/ui (Radix UI) + Lucide React
Recharts
Dados 100% mockados — sem backend, sem autenticação real
```

## O que fica de fora deste pacote (de propósito)

Configuração de build, scripts internos de geração de assets, documentação de planejamento/pesquisa
(benchmarking, personas, fluxogramas) — tudo isso é material de processo da fase de design, não
necessário para implementar as telas.
