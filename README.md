# Port — Lucas Anunciato

Portfólio Angular 22 (SPA) com tema cyberpunk.

## Desenvolvimento

```bash
npm ci
npm start
```

Abra `http://localhost:4200/`.

## Build local

```bash
npm run build
```

Saída de produção: `dist/port/browser`.

## Deploy no AWS Amplify Hosting

1. Envie o repositório para GitHub/GitLab/Bitbucket/CodeCommit.
2. No [Amplify Console](https://console.aws.amazon.com/amplify/), **Create new app** → **Host web app** → conecte o repositório e a branch.
3. O Amplify detecta o `amplify.yml` (Node 22, `npm ci`, `npm run build`, artefatos em `dist/port/browser`).
4. Após o primeiro deploy, em **Hosting → Rewrites and redirects**, importe ou cole o conteúdo de `amplify-rewrites.json` para as rotas Angular (`/about`, `/projects`, etc.) funcionarem no refresh.

Regra SPA equivalente:

| Source | Target | Type |
|--------|--------|------|
| `/<*>` | `/index.html` | `404 (Rewrite)` |

5. Salve e republicue se necessário.

Não é preciso Amplify CLI nem backend — só Hosting estático.
