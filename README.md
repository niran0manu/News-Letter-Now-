
```
news-letter-now (original tree)

├─ app
│  ├─ api
│  │  └─ (auth)
│  │     └─ users
│  │        └─ route.ts
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ page.module.css
│  └─ page.tsx
├─ lib
│  ├─ db.ts
│  └─ dbSchemaModels
│     └─ user.ts
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ public
│  ├─ next.svg
│  └─ vercel.svg
├─ README.md
├─ schemaDump.txt
└─ tsconfig.json

<!-- ```the tree to be  -->

app
├─ api
│  ├─ (auth)
│  │  └─ users
│  │     └─ route.ts
│  ├─ newsletters
│  │  ├─ route.ts
│  │  ├─ [id]
│  │  │  ├─ route.ts
│  │  │  └─ subscribe
│  │  │     └─ route.ts
│  ├─ issues
│  │  ├─ route.ts
│  │  └─ [id]
│  │     └─ route.ts
│  ├─ comments
│  │  ├─ route.ts
│  │  └─ [id]
│  │     └─ route.ts
│  └─ creators
│     ├─ route.ts
│     └─ [id]
│        ├─ route.ts
│        └─ follow
│           └─ route.ts
├─ favicon.ico
├─ globals.css
├─ layout.tsx
├─ page.module.css
└─ page.tsx
lib
├─ db.ts
└─ dbSchemaModels
   ├─ user.ts
   ├─ newsletter.ts
   ├─ issue.ts
   ├─ comment.ts
   └─ creator.ts