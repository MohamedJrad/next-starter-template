# Template built with Next JS

🚀 Next.js Template ⚡️ Made with developer experience first: Next.js, TypeScript,
Storybook,ESLint, Prettier, Husky, Lint-Staged, Styled-components,React Testing Library,Cypress.

Clone this project and use it to create your own [Next.js](https://nextjs.org) project.

### Features

Developer experience first:

- 🔥 [Next.js](https://nextjs.org) for Static Site Generator
- 💅 Integrate with[Styled-Components](https://styled-components.com)
- 🎉 Type checking [TypeScript](https://www.typescriptlang.org)
- ✅ Strict Mode for TypeScript and React 17
- ✏️ Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals and Airbnb configuration)
- 🛠 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🤖 SEO metadata, JSON-LD and Open Graph tags with Next SEO
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- 💯 Maximize lighthouse score

Built-in feature from Next.js:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting

### Philosophy

- Minimal code
- SEO-friendly
- 🚀 Production-ready

### Requirements

- Node.js and npm

### Getting started

Run the following command on your local environment:

```
git clone git@github.com:AIEOX/nextjs-starter.git  my-project-name
cd my-project-name
yarn install
```

Then, you can run locally in development mode with live reload:

```
yarn dev
```

Open <http://localhost:3000> with your favorite browser to see your project. For your information, Next JS need to take some time to compile the project for your first time.

And For Storybook

```
yarn storybook
```

To commit your changes

```
yarn commit
```

To push your changes

```
yarn push branch-name
```

```
├── README.md # README file
├── next.config.js # Next JS configuration
├── public # Public folder
│ └── assets
│ └── images # Image used by default template
├── src
│ ├── components # Atomic Design components
├── atoms
├── molecules
├── organisms
├── templates
├── pages
│ ├── pages # Next JS pages
└── tsconfig.json # TypeScript configuration
```
