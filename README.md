# meu-portfolio

Portfólio pessoal de **David Felicio** — Desenvolvedor de Software Fullstack.

> A complexidade reduzida à sua forma mais simples.

Aplicação web minimalista construída com **Next.js 16 (App Router)**, mobile-first, com arquitetura limpa e dados desacoplados.

## ✨ Funcionalidades

- **Profile** — apresentação com avatar, bio e localização (bandeira real via `flag-icons`).
- **Experiência** — card "Atualmente" + cargos anteriores em **timeline** com expand animado.
- **Projetos** — carrossel (sempre 3 cards) com **busca** e **filtros** por tecnologia e ano.
- **Stack** — chips com ícones de marca oficiais e hover animado.
- **Navbar** — toggle de **tema (dark mode real)**, idioma (PT/EN) e links sociais.

## 🛠️ Stack

| Categoria | Tecnologias |
|---|---|
| Framework | Next.js `16.2.7` (App Router, Turbopack) · React `19.2.7` |
| Linguagem | TypeScript `5.7.3` (strict) |
| Estilo | TailwindCSS `3.4.17` · `clsx` + `tailwind-merge` |
| Tema | `next-themes` `0.4.6` |
| Ícones | `lucide-react` · `simple-icons` · `flag-icons` |
| Fontes | Inter (`next/font`) · Geist Mono |

## 🚀 Como rodar

```bash
npm install
npm run dev      # ambiente de desenvolvimento
npm run build    # build de produção
npm run start    # servir o build
npm run lint     # checagem de lint
```

App disponível em `http://localhost:3000`.

## 🧱 Arquitetura

Dependências fluem em uma única direção: `app → features → services → lib`.

- Componentes e hooks **nunca** importam mock — sempre via `services/`.
- `types/` global apenas para tipos compartilhados entre módulos.
- `components/ui` reservado para o que é reutilizado por mais de um módulo.
- SRP rígido, máximo de 150 linhas por arquivo, mobile-first.

```
src/
├── app/                    # layout, page e estilos globais
├── features/               # módulos: profile, experience, projects, stack, navbar
│   └── [modulo]/
│       ├── components/
│       ├── hooks/
│       ├── data/mock.ts
│       └── types.ts
├── services/               # acesso aos dados por módulo
├── components/             # ui/ compartilhado (button, tag, brand-icon, ...)
├── hooks/                  # hooks globais
├── lib/                    # utilitários (cn, brand-icons)
└── types/                  # tipos compartilhados
```

### Ordem de criação de um módulo

`types.ts → mock.ts → service.ts → hook → component → page`

## 📄 Licença

Projeto pessoal. Todos os direitos reservados a David Felicio.
