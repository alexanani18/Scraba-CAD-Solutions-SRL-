# Scraba CAD Solutions SRL

> React + TypeScript + Vite + TailwindCSS landing page pentru servicii de topografie, cadastru și trasare.

## 🧩 Tehnologii utilizate

- ⚛️ **React 18** – UI component-based SPA
- 🧠 **TypeScript** – tipare statice și siguranță la compilare
- ⚡ **Vite** – bundler ultra-rapid pentru build și HMR
- 🎨 **TailwindCSS** – sistem de design utility-first
- 🔍 **ESLint + Prettier** – linting și formatare automată
- 🌍 **React Router DOM** – rutare client-side (`/`, `/politica-de-confidentialitate`)
- 📄 **HTML5 + Open Graph + JSON-LD** – SEO avansat

---

## 🚀 Setup local

### 1️⃣ Clonează repository-ul

### 2️⃣ Instalează dependențele

```bash
npm install
```

### 3️⃣ Rulează serverul de dezvoltare

```bash
npm run dev
```

Aplicația va porni la:  
👉 [http://localhost:5173](http://localhost:5173)

---

## 🏗️ Build pentru producție

```bash
npm run build
```

Rezultatul va fi generat în folderul:
```
dist/
```

### Pentru testarea build-ului local:
```bash
npm run preview
```

---

## 🌐 Deploy pe cPanel / Apache

1. Rulează `npm run build`  
2. Încarcă conținutul din `dist/` în `public_html`  
3. Creează fișierul `.htaccess` cu următorul conținut:

```apache
Options -MultiViews
RewriteEngine On
RewriteBase /

RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [L]
```

---

## 📂 Structura proiectului

```
Scraba-CAD-Solutions-SRL/
│
├── src/
│   ├── component/
│   │   └── ScrabaCADPage.tsx          # Landing page principală
│   ├── PoliticaDeConfidentialitate.tsx # Pagina legală GDPR
│   ├── main.tsx                       # Punct de intrare React
│   └── App.tsx                        # Router + layout principal
│
├── public/                            # Active statice
├── index.html                         # Document principal HTML
├── tailwind.config.js                 # Configurația TailwindCSS
├── vite.config.ts                     # Configurația Vite
├── tsconfig*.json                     # Setări TypeScript
└── package.json                       # Scripturi & dependențe
```

---

## ⚙️ Scripturi utile

| Comandă               | Descriere                               |
|------------------------|------------------------------------------|
| `npm run dev`          | Pornește serverul local (HMR)           |
| `npm run build`        | Compilează aplicația pentru producție   |
| `npm run preview`      | Testează build-ul local                 |
| `npm run lint`         | Rulează ESLint                          |

---

## 🧠 Funcționalități cheie

- Formulare cu validare (`useState` + regex)
- Trimitere automată e-mail prin `mailto:`
- SEO complet (meta tags, Open Graph, JSON-LD)
- Responsivitate completă (TailwindCSS)
- Secțiuni: Hero, Servicii, Despre, Contact, Footer
- Pagină legală: Politica de Confidențialitate (`/politica-de-confidentialitate`)

---

## MAIL

- Ca sa configurezi mail-ul ai nevoie de phpMailer instalat: 
```apache
In public_html, creează un folder numit phpmailer/
Descarcă PHPMailer de aici:
👉 https://github.com/PHPMailer/PHPMailer
Extrage fișierele și urcă în acel folder tot conținutul din src/)
```
- configurarea send-email.php in public_html
-> Actualizare link in react

---

## 🔗 Linkuri utile

- 🌍 [Scraba CAD Solutions SRL](https://geoexpert.ro)
- 🐙 [GitHub Repo](https://github.com/alexanani18/Scraba-CAD-Solutions-SRL-)