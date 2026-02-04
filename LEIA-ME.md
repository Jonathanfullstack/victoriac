# Victoria — Fotografia do Sagrado e da Ancestralidade

Site minimalista para portfólio de fotografia documental com foco em religiões de matriz africana (Candomblé, Umbanda, Quimbanda).

## Estrutura

- **index.html** — Página inicial (hero + manifesto)
- **portfolio.html** — Portfólio com grid por categorias e modal de fotos
- **sobre.html** — Página Sobre a fotógrafa
- **contato.html** — Contato (Instagram, WhatsApp, e-mail)

## Imagens

1. **Hero (página inicial)**  
   Coloque uma imagem grande em: `assents/img/hero.jpg`

2. **Sobre**  
   Foto da fotógrafa em: `assents/img/sobre-fotografa.jpg`

3. **Portfólio**
   - Crie a pasta `assents/img/portfolio/`
   - Adicione as fotos (ex.: `1.jpg`, `2.jpg`, …)
   - Edite a lista de fotos em **js/portfolio-data.js** (título, categoria, descrição, caminho da imagem)

## Editar portfólio

Abra **js/portfolio-data.js** e altere o array `PORTFOLIO_PHOTOS`. Cada item deve ter:

- `id` — número único
- `title` — título da foto
- `category` — uma das categorias: Candomblé, Umbanda, Quimbanda, Retratos Ancestrais, Rituais e Festas
- `description` — texto curto (ex.: “Registro com autorização…”)
- `image` — caminho da imagem (ex.: `assents/img/portfolio/1.jpg`)

## Contato

Em **contato.html**, troque os links pelos reais:

- Instagram: `href="https://instagram.com/SEU_USUARIO"`
- WhatsApp: `href="https://wa.me/5511999999999"` (número com DDI e DDD, sem espaços)
- E-mail: `href="mailto:seu@email.com"`

## Tecnologias

- HTML5
- [Tailwind CSS](https://tailwindcss.com) (via CDN)
- Google Fonts: Cormorant Garamond (títulos), Outfit (textos)
- CSS customizado em **assents/style-victoria.css** (botões, hovers, footer)
- JavaScript vanilla (nav mobile, filtros e modal do portfólio)

## Como rodar

Abra o **index.html** no navegador ou use um servidor local (ex.: extensão “Live Server” no VS Code).
