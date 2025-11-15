Bilkul! Aapko vanilla HTML + JS ke saath Tailwind chahiye (frameworks nahi), Vite use karke sabse simple aur fast setup yeh hai. Neeche step‑by‑step, saath hi “why this” ki explanation aur ready code.

Overview
- Tailwind v4 mein setup bahut simple ho gaya: bas plugin add karo aur CSS mein @import "tailwindcss". Koi content array ya PostCSS config ki zaroorat nahi by default. 

Prerequisites
- Node.js 18+ recommended
- npm (ya pnpm/yarn)
- Terminal

1) Vite project banao (vanilla)
- Interactive:
  - npm create vite@latest my-app
  - Template: Vanilla
- Non‑interactive one‑liner:
  - npm create vite@latest my-app -- --template vanilla
- Phir:
  - cd my-app
  - npm install

Why: Vite dev server bahut fast HMR deta hai, aur Tailwind v4 ke official flow ke saath seamless hai. 

2) Tailwind v4 + Vite plugin install
- npm i tailwindcss @tailwindcss/vite

Why: v4 ke liye first‑party Vite plugin recommended hai; PostCSS config rakhne ki need nahi, performance bhi better. 

3) Vite config mein plugin add karo
- Project root par vite.config.js (ya .ts) me:

```js
// vite.config.js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
})
```

Why: Yeh plugin Tailwind ko Vite pipeline me hook karta hai, classes scan karke utilities generate karta hai. 

4) Tailwind ko CSS me import karo
- src/style.css (file create karo agar nahi hai):

```css
/* src/style.css */
@import "tailwindcss";
```

Why: v4 me ab @tailwind directives ke bajay ek hi line ka import kaafi hai. Autoprefixing/imports Tailwind khud handle karta hai. 

5) CSS ko HTML me include karo (ya JS me import)
- Option A (simple, HTML‑first): index.html me head me link
```html
<!-- index.html -->
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="/src/style.css" rel="stylesheet" />
    <title>Tailwind + Vite</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/main.js"></script>
  </body>
</html>
```

- Option B (Vite style): CSS ko JS entry me import karo
```js
// main.js
import './src/style.css'

document.querySelector('#app').innerHTML = `
  <h1 class="text-3xl font-bold underline">Hello Tailwind!</h1>
`
```

Why: Dono tareeqe sahi. HTML me link karna straightforward hai; JS import se HMR smooth hota hai. Official example head me link dikhata hai. 

6) Dev server chalao
- npm run dev
- Browser me local URL kholkar check karein.

7) Tailwind classes use karo
- Example HTML snippet:
```html
<h1 class="text-3xl font-bold underline text-indigo-600">
  Hello world!
</h1>
<button class="mt-4 px-4 py-2 rounded bg-black text-white hover:bg-zinc-800">
  Click me
</button>
```

Why (v4 changes that matter)
- No tailwind.config.js required by default; class detection auto hai (content array likhne ki zaroorat nahi). Customize karna ho toh CSS-first directives (@theme, @plugin, @source) use ho sakte hain. 
- PostCSS/autoprefixer ki need nahi jab tak aap specifically PostCSS pipeline nahi chala rahe; Vite plugin ka path simplest + fastest hai. 

Minimal file structure (Option A: HTML me link)
- my-app/
  - index.html
  - main.js
  - src/
    - style.css

Quick troubleshooting
- Classes apply nahi ho rahi?
  - Ensure vite.config.js me plugins: [tailwindcss()] laga hai.
  - Ensure style.css me @import "tailwindcss"; hai aur wo index.html ya main.js se load ho rahi hai.
  - Dev server restart (kabhi‑kabhi plugin add karne ke baad restart zaroori).
  - Project ESM ho (Vite scaffold already ESM hota hai). CommonJS require(...) mat use karein Vite config me. 
- VS Code IntelliSense (v4):
  - Tailwind CSS extension ko aapki CSS file ka path bata dein (settings me “tailwindCSS.experimental.configFile”: "src/style.css"). 

Ready-to-run sample
- Commands:
  - npm create vite@latest my-app -- --template vanilla
  - cd my-app && npm i
  - npm i tailwindcss @tailwindcss/vite
- Add the three files exactly as above, then:
  - npm run dev

References
- Tailwind official: Installing with Vite (v4.1). 
- Tailwind v4 blog (CSS-first, no config, Vite plugin recommended). 

Agar aap chaho toh main yahi se ek minimal repo‑style zip ke liye complete files bhi generate karke de sakta/ सकती hoon.