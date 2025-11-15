```bash
/Desktop/frontend-practice-lab/Tailwind Learning$ node -v
v22.18.0

/Desktop/frontend-practice-lab/Tailwind Learning$ npm -v
10.9.3

/Desktop/frontend-practice-lab/Tailwind Learning$ npm create vite@latest tailwindtut
Need to install the following packages:
create-vite@8.0.3
Ok to proceed? (y) y


> npx
> create-vite tailwindtut

│
◇  Select a framework:
│  Vanilla
│
◇  Select a variant:
│  JavaScript
│
◇  Use rolldown-vite (Experimental)?:
│  No
│
◇  Install with npm and start now?
│  Yes
│
◇  Scaffolding project in /home/himanshu/Desktop/frontend-practice-lab/Tailwind Learning/tailwindtut...
│
◇  Installing dependencies with npm...

added 13 packages, and audited 14 packages in 30s

5 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
│
◇  Starting dev server...

> tailwindtut@0.0.0 dev
> vite


  VITE v7.2.2  ready in 410 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```
---

### ⚙️ Framework → **Vanilla**

✅ This means plain **HTML + JS** — no React, Vue, etc.
(Exactly what you wanted.)

---

### 🧠 Variant → **JavaScript**

✅ This creates `.js` files instead of `.ts` (TypeScript).
Keeps things simple.

---

### 🧩 “Use rolldown-vite (Experimental)?” → **No**

❌ Rolldown is a *new experimental bundler* being tested inside Vite.
It’s faster, but still under testing — some plugins (like Tailwind) may misbehave.

👉 So choose **“No”** (which you already selected).

---

After that, it’ll generate your folder structure like:

```
tailwindtut/
 ├─ index.html
 ├─ package.json
 ├─ vite.config.js
 └─ src/
     ├─ main.js
     └─ style.css
```

Next, you’ll just:

```bash
cd tailwindtut
npm install
```
Yes bro ✅ — select **“Yes”** and press **Enter**.

That will automatically do two things for you:

1. **`npm install`** → installs all the dependencies (Vite etc.)
2. **`npm run dev`** → starts your local development server right away

After it finishes, you’ll see something like:

```
  ➜  Local:   http://localhost:5173/
```

That means your Vite project is successfully running 🎉
