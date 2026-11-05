# Vinícius Rael | Engenheiro Civil — Site

Site institucional (landing page) com animações, botão flutuante do WhatsApp com mensagem automática e SEO para o Google.

**Stack:** Vite · React · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide Icons

## Rodar localmente
```bash
npm install
npm run dev      # desenvolvimento
npm run build    # gera /dist para produção
```

## Editar contato
Telefone, Instagram e mensagem automática do WhatsApp ficam em `src/config.ts`.

## Deploy (Vercel)
Importe este repositório na Vercel (framework detectado: Vite). Nome sugerido do projeto: `vinicius-rael`
→ URL `https://vinicius-rael.vercel.app`. Se usar outro domínio, atualize a URL em `index.html`,
`public/robots.txt` e `public/sitemap.xml`.

## SEO
- Meta tags, Open Graph e dados estruturados (Schema.org `ProfessionalService`) em `index.html`
- `robots.txt` e `sitemap.xml` em `public/`
- Após o deploy: cadastrar o site no Google Search Console e enviar o sitemap.
