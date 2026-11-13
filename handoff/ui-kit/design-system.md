# Design System — Nexify | Portal do Colaborador

> Tokens, cores, tipografia, grid, espaçamento e componentes base. Serve de referência tanto para o protótipo em React/Tailwind quanto para a organização do arquivo Figma.

---

## 1. Identidade visual

**Nome do produto:** Nexify  
**Conceito:** Corporativo moderno. Clean, sem excesso de decoração. Legível e funcional em uso contínuo.  
**Referência de linguagem visual:** SaaS enterprise — próximo a Linear, Leapsome, Notion.

---

## 2. Paleta de cores

### Cores primárias

| Token | Nome | Hex | Uso |
|-------|------|-----|-----|
| `--color-navy` | Azul marinho | `#102A43` | Sidebar, headers escuros, dark mode base |
| `--color-primary` | Azul principal | `#1769AA` | CTAs, links, elementos interativos |
| `--color-cyan` | Ciano | `#20B8C5` | Destaques, badges, acentos |

### Cores neutras

| Token | Nome | Hex | Uso |
|-------|------|-----|-----|
| `--color-bg-light` | Fundo claro | `#F4F7FA` | Background da página (light mode) |
| `--color-surface` | Superfície | `#FFFFFF` | Cards, modais, painéis |
| `--color-text-primary` | Texto principal | `#243447` | Corpo de texto, títulos |
| `--color-text-secondary` | Texto secundário | `#5A7184` | Labels, metadados, placeholders |
| `--color-border` | Borda | `#DDE3EA` | Divisores, bordas de card |

### Cores semânticas

| Token | Nome | Hex | Uso |
|-------|------|-----|-----|
| `--color-success` | Verde | `#19A974` | Meta atingida, pesquisa respondida, leitura confirmada |
| `--color-warning` | Amarelo | `#F5A623` | Meta em risco, prazo próximo |
| `--color-danger` | Vermelho | `#E32D2D` | Urgente, meta atrasada, prazo < 48h |
| `--color-info` | Azul info | `#0288D1` | Informativos, dicas, tooltips |

### Dark mode

| Token | Hex |
|-------|-----|
| `--color-bg-dark` | `#0D1B2A` |
| `--color-surface-dark` | `#162436` |
| `--color-surface-dark-elevated` | `#1E3148` |
| `--color-text-primary-dark` | `#E8F0F7` |
| `--color-text-secondary-dark` | `#8AAABB` |
| `--color-border-dark` | `#243447` |

---

## 3. Tipografia

**Família:** Inter (Google Fonts)  
**Fallback:** `system-ui, -apple-system, sans-serif`

### Escala tipográfica

| Token | Tamanho | Peso | Line-height | Uso |
|-------|---------|------|-------------|-----|
| `--text-xs` | 11px | 400 | 1.4 | Labels, badges, metadados |
| `--text-sm` | 13px | 400 | 1.5 | Texto de suporte, legenda |
| `--text-base` | 15px | 400 | 1.6 | Corpo de texto padrão |
| `--text-md` | 16px | 500 | 1.5 | Texto de destaque, subtítulo de card |
| `--text-lg` | 20px | 600 | 1.4 | Título de card, seção |
| `--text-xl` | 24px | 700 | 1.3 | Título de página |
| `--text-2xl` | 32px | 700 | 1.2 | Headline, número de destaque |

---

## 4. Grid e espaçamento

### Grid (Bootstrap padrão)

| Propriedade | Valor |
|-------------|-------|
| Colunas | 12 |
| Largura máxima do container | 1440px |
| Gutter (espaço entre colunas) | 24px |
| Margin lateral mínima | 32px |

### Escala de espaçamento (múltiplos de 8px)

| Token | Valor | Uso típico |
|-------|-------|-----------|
| `--space-1` | 4px | Micro espaçamentos, ícone + label |
| `--space-2` | 8px | Padding interno pequeno, gap mínimo |
| `--space-3` | 12px | Padding de badge, espaço entre linhas |
| `--space-4` | 16px | Padding interno de card pequeno |
| `--space-5` | 20px | Gap entre elementos de seção |
| `--space-6` | 24px | Padding de card, gap de colunas |
| `--space-8` | 32px | Margem de seção, padding de página |
| `--space-10` | 40px | Espaço entre seções |
| `--space-12` | 48px | Padding de seção maior |
| `--space-16` | 64px | Espaço grande entre blocos |

### Layout base

```
┌─────────────────────────────────────────────────────┐
│  Topbar (altura: 64px)                              │
├──────────┬──────────────────────────────────────────┤
│          │                                          │
│ Sidebar  │  Content area                            │
│ 240px    │  (flex-1, padding: 32px)                 │
│          │                                          │
│          │  Max-width: 1200px centrado              │
│          │                                          │
└──────────┴──────────────────────────────────────────┘
```

**Sidebar colapsada (modo compacto):** 64px (somente ícones)

---

## 5. Bordas e sombras

| Token | Valor | Uso |
|-------|-------|-----|
| `--radius-sm` | 6px | Badges, chips, inputs |
| `--radius-md` | 10px | Cards padrão |
| `--radius-lg` | 16px | Modais, painéis |
| `--radius-full` | 9999px | Avatares, toggles |

| Token | Valor | Uso |
|-------|-------|-----|
| `--shadow-sm` | `0 1px 3px rgba(0,0,0,0.08)` | Cards em repouso |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.10)` | Cards elevados, dropdowns |
| `--shadow-lg` | `0 8px 24px rgba(0,0,0,0.12)` | Modais, popovers |

---

## 6. Componentes base

### Badges de prioridade

| Nível | Cor de fundo | Cor de texto | Label |
|-------|-------------|-------------|-------|
| Urgente | `#FFEBEE` / danger 10% | `#E32D2D` | `URGENTE` |
| Importante | `#FFF8E1` / warning 10% | `#F5A623` | `IMPORTANTE` |
| Informativo | `#E3F2FD` / info 10% | `#0288D1` | `INFORMATIVO` |

Dark mode: fundo mais opaco, texto inalterado.

### Badges de status (pesquisas/metas)

| Status | Cor | Ícone |
|--------|-----|-------|
| Pendente | Warning | ⏳ |
| Em andamento | Primary | 🔄 |
| Respondido / Concluído | Success | ✅ |
| Encerrado | Neutral | 🔒 |
| Atrasado / Crítico | Danger | ⚠️ |

### Barra de progresso

```
┌──────────────────────────────────┐
│ Label da meta              73%   │
│ [████████████████████░░░░░░░░░] │
│ Atualizado em: Nov 2026          │
└──────────────────────────────────┘
```

- Cor da barra: baseada em status (success / warning / danger)
- Fundo: `--color-border` / `--color-border-dark`
- Altura: 8px, border-radius: `--radius-full`

### Cards

```
┌────────────────────────────────────────┐
│ [badge de tipo]                 [data] │
│                                        │
│ Título do card em --text-lg            │
│                                        │
│ Descrição curta em --text-base         │
│ --color-text-secondary                 │
│                                        │
│ [ação secundária]        [CTA primário]│
└────────────────────────────────────────┘
```

- Padding: `--space-6`
- Border: 1px solid `--color-border`
- Border-radius: `--radius-md`
- Shadow: `--shadow-sm`
- Hover: `--shadow-md` + cursor pointer

### Botões

| Variante | Fundo | Texto | Uso |
|----------|-------|-------|-----|
| Primary | `--color-primary` | white | Ação principal (Confirmar, Enviar, Responder) |
| Secondary | transparent | `--color-primary` | Ação secundária (Ver mais, Cancelar) |
| Danger | `--color-danger` | white | Ações destrutivas |
| Ghost | transparent | `--color-text-secondary` | Ações terciárias, links de navegação |

Altura padrão: 40px | Padding: 0 `--space-6` | Border-radius: `--radius-sm`

---

## 7. Iconografia

**Biblioteca:** Lucide Icons (open source, estilo outline consistente)  
**Tamanhos:** 16px (inline), 20px (padrão), 24px (destaque), 32px (empty states)  
**Cor padrão:** `--color-text-secondary` / muda para `--color-primary` em estado ativo

### Ícones por módulo

| Módulo | Ícone Lucide |
|--------|-------------|
| Home | `LayoutDashboard` |
| Comunicação | `Bell` ou `Megaphone` |
| Metas e Resultados | `Target` ou `TrendingUp` |
| Pesquisas e Votações | `ClipboardList` |
| Desenvolvimento | `GraduationCap` ou `BarChart2` |

---

## 8. Checklist de consistência (Figma)

Antes de considerar o arquivo .fig finalizado:

- [ ] Todos os componentes usam variáveis de cor (não hex fixo)
- [ ] Todos os textos usam estilos de texto definidos
- [ ] Light mode e dark mode da Home com as mesmas variáveis
- [ ] Grid de 12 colunas aplicado em todas as telas desktop
- [ ] Responsividade da Home testada em 375px (mobile) e 1440px (desktop)
- [ ] Estados de componente definidos: default, hover, active, disabled
- [ ] Badges de prioridade e status presentes nos comunicados e pesquisas
- [ ] Barra de progresso com cor condicionada ao status da meta
