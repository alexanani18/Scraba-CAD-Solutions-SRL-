import React from "react";

/** Pagina Politică de Confidențialitate – stil și structură compatibile cu ScrabaCADPage */
export default function PoliticaDeConfidentialitate() {
  const year = new Date().getFullYear();

  return (
    <div className="font-sans text-slate-800 scroll-smooth bg-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Scraba CAD Solutions SRL acasă"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M3 18l9-14 9 14H3z" className="fill-slate-900" />
              <path d="M7 18l5-8 5 8H7z" className="fill-[#0a2540]" />
            </svg>
            <span className="text-[#0a2540] font-semibold text-lg tracking-tight">
              Scraba CAD Solutions SRL
            </span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a href="/" className="text-slate-700 hover:text-[#0a2540]">
              Acasă
            </a>
          </div>
        </div>
      </nav>

      {/* CONTENT */}
      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-[#0a2540] mb-6">
          Politica de Confidențialitate
        </h1>

        <p className="text-slate-700 mb-4">
          Această politică de confidențialitate explică modul în care{" "}
          <strong>Scraba CAD Solutions SRL</strong> colectează, utilizează și
          protejează datele cu caracter personal ale vizitatorilor și
          clienților săi.
        </p>

        <h2 className="text-xl font-semibold text-[#0a2540] mt-8 mb-2">
          1. Operatorul de date
        </h2>
        <p className="text-slate-700">
          Operatorul responsabil pentru prelucrarea datelor este:
          <br />
          <strong>Scraba CAD Solutions SRL</strong>
          <br />
          CUI: 50476915
          <br />
          Sediu: Str. Principală nr. 83, Mărgina, jud. Timiș, România
          <br />
          Email: <a href="mailto:contact@geoexpert.ro" className="underline">contact@geoexpert.ro</a>
          <br />
          Telefon: <a href="tel:+40721154391" className="underline">+40 721 154 391</a>
        </p>

        <h2 className="text-xl font-semibold text-[#0a2540] mt-8 mb-2">
          2. Ce date colectăm
        </h2>
        <ul className="list-disc list-inside text-slate-700 space-y-1">
          <li>Date de contact: nume, email, număr de telefon;</li>
          <li>Informații trimise prin formulare de contact;</li>
          <li>Date tehnice (adresa IP, tipul de browser, cookie-uri necesare).</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#0a2540] mt-8 mb-2">
          3. Scopul prelucrării datelor
        </h2>
        <p className="text-slate-700">
          Datele sunt utilizate exclusiv pentru a oferi servicii de consultanță,
          a răspunde solicitărilor și pentru comunicări contractuale sau
          comerciale, conform legislației în vigoare (GDPR - Regulamentul
          2016/679).
        </p>

        <h2 className="text-xl font-semibold text-[#0a2540] mt-8 mb-2">
          4. Temeiul legal
        </h2>
        <p className="text-slate-700">
          Prelucrarea datelor se bazează pe consimțământul utilizatorului sau pe
          necesitatea executării unui contract/obligații legale.
        </p>

        <h2 className="text-xl font-semibold text-[#0a2540] mt-8 mb-2">
          5. Stocarea datelor
        </h2>
        <p className="text-slate-700">
          Datele sunt păstrate doar atât timp cât este necesar pentru scopurile
          pentru care au fost colectate sau conform obligațiilor legale.
        </p>

        <h2 className="text-xl font-semibold text-[#0a2540] mt-8 mb-2">
          6. Drepturile utilizatorilor
        </h2>
        <ul className="list-disc list-inside text-slate-700 space-y-1">
          <li>Dreptul de acces la datele personale;</li>
          <li>Dreptul la rectificare sau ștergere („dreptul de a fi uitat”);</li>
          <li>Dreptul la restricționarea prelucrării;</li>
          <li>Dreptul la portabilitatea datelor;</li>
          <li>Dreptul de opoziție.</li>
        </ul>

        <p className="text-slate-700 mt-3">
          Pentru exercitarea acestor drepturi, ne poți contacta la adresa:
          <br />
          <a href="mailto:contact@geoexpert.ro" className="underline">
            contact@geoexpert.ro
          </a>
        </p>

        <h2 className="text-xl font-semibold text-[#0a2540] mt-8 mb-2">
          7. Securitatea datelor
        </h2>
        <p className="text-slate-700">
          Implementăm măsuri tehnice și organizatorice pentru a proteja datele
          împotriva accesului neautorizat, pierderii sau distrugerii.
        </p>

        <h2 className="text-xl font-semibold text-[#0a2540] mt-8 mb-2">
          8. Politica cookie-urilor
        </h2>
        <p className="text-slate-700">
          Website-ul nostru utilizează cookie-uri esențiale pentru funcționare
          și analiză. Poți gestiona preferințele în setările browserului.
        </p>

        <h2 className="text-xl font-semibold text-[#0a2540] mt-8 mb-2">
          9. Actualizări
        </h2>
        <p className="text-slate-700">
          Ne rezervăm dreptul de a modifica această politică ori de câte ori este
          necesar. Ultima actualizare: {year}.
        </p>

        <p className="mt-8 text-slate-600 text-sm">
          © {year} Scraba CAD Solutions SRL. Toate drepturile rezervate.
        </p>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#0a2540] text-white">
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-center text-white/70 text-sm">
            © 2024 - {year} Scraba CAD Solutions SRL •
            <a
              href="/politica-de-confidentialitate"
              className="underline ml-1"
            >
              Politică de confidențialitate
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
