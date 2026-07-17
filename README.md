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

Saída de produção: `dist/port` (com `index.html` na raiz dessa pasta).

## Deploy no AWS Amplify Hosting

1. Envie o repositório para o GitHub (branch `master`).
2. No Amplify: **Hosting → Build settings**
   - Use o `amplify.yml` **do repositório** (não deixe a especificação antiga do console sobrescrever).
   - **Node.js** em Live package updates: **20** ou **22**.
   - Artefatos: `baseDirectory: dist/port`
3. Em **Hosting → Deployments**, abra o último job e confira se o build passou (verde). Se falhou, o site fica na página “Welcome”.
4. Clique em **Redeploy this version** após corrigir o `amplify.yml`.
5. Em **Rewrites and redirects**, cole o JSON de `amplify-rewrites.json` para `/about`, `/projects`, etc. funcionarem no refresh.

Não é preciso Amplify CLI nem backend — só Hosting estático.
