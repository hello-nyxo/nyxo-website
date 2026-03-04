# Nyxo Website

The website that powers [nyxo.app](https://nyxo.app). Built with:

- [Next.js 15](https://nextjs.org/) (App Router)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [next-intl](https://next-intl.dev/) (i18n — en, fi, es, de, sv, fr)
- [Contentful](https://www.contentful.com/) (coaching content)
- [Bun](https://bun.sh/) (package manager)

## Quick Start

### 1. Install dependencies

```sh
bun install
```

### 2. Set up environment variables

Create a `.env.local` file in the project root:

```
CONTENTFUL_SPACE_ID=YOUR_KEY
CONTENTFUL_ACCESS_TOKEN=YOUR_KEY
CONTENTFUL_ENVIRONMENT=YOUR_ENVIRONMENT
```

For development you can use the public testing environment:

```
CONTENTFUL_SPACE_ID=2bj8pq0ood89
CONTENTFUL_ACCESS_TOKEN=7yCg2oVBg-kQAhPrNTI0935HDiUJ7FYlUyIwM3Tspgg
CONTENTFUL_ENVIRONMENT=public
```

### 3. Start the dev server

```sh
bun dev
```

The site will be running at `http://localhost:3000`.

## Contributing

Contributions are welcome! This includes blog posts, translations, data visualizations, and new features.

## License

MIT
