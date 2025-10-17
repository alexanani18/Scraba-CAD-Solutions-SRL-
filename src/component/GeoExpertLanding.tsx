import React, { useMemo, useState } from "react";

// Scraba CAD Solutions SRL – Single-file React landing page
// Styling uses TailwindCSS utility classes.
// Palette: white + dark blue (#0a2540) with subtle accents.

/** SEO Head injector: adds meta tags, Open Graph, Twitter and JSON-LD schema. */
function SEOHead() {
  React.useEffect(() => {
    const siteUrl = "https://www.geoexpert.ro/"; // actualizează dacă e diferit
    const title = "Scraba CAD Solutions SRL – Topografie, Cadastru și Trasare în România";
    const description = "Servicii profesionale de ridicări topografice, cadastru, trasare construcții și planuri pentru autorizații. Ofertă în aceeași zi. Autorizat ANCPI.";
    const hero = "https://images.unsplash.com/photo-1610808072077-9e1b3c040f1d?q=80&w=1600&auto=format&fit=crop";

    // Titlu și limbă
    document.title = title;
    document.documentElement.setAttribute("lang", "ro");

    const upsert = (selector:any, attrs:any)   => {
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement(selector.split(/[\[\.\#]/)[0]);
        document.head.appendChild(el);
      }
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
      return el;
    };

    // Canonical & hreflang
    upsert('link[rel="canonical"]', { rel: 'canonical', href: siteUrl });
    upsert('link[rel="alternate"][hreflang="ro-RO"]', { rel: 'alternate', hreflang: 'ro-RO', href: siteUrl });

    // Meta de bază
    upsert('meta[name="description"]', { name: 'description', content: description });
    upsert('meta[name="robots"]', { name: 'robots', content: 'index,follow,max-image-preview:large' });
    upsert('meta[name="googlebot"]', { name: 'googlebot', content: 'index,follow' });
    upsert('meta[name="viewport"]', { name: 'viewport', content: 'width=device-width, initial-scale=1' });
    upsert('meta[name="theme-color"]', { name: 'theme-color', content: '#0a2540' });
    upsert('meta[name="keywords"]', { name: 'keywords', content: 'topografie, cadastru, trasare, ridicari topografice, planuri autorizatie, GeoExpert, Bucuresti, Brasov' });

    // Open Graph
    upsert('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    upsert('meta[property="og:locale"]', { property: 'og:locale', content: 'ro_RO' });
    upsert('meta[property="og:title"]', { property: 'og:title', content: title });
    upsert('meta[property="og:description"]', { property: 'og:description', content: description });
    upsert('meta[property="og:url"]', { property: 'og:url', content: siteUrl });
    upsert('meta[property="og:site_name"]', { property: 'og:site_name', content: 'Scraba CAD Solutions SRL' });
    upsert('meta[property="og:image"]', { property: 'og:image', content: hero });
    upsert('meta[property="og:image:alt"]', { property: 'og:image:alt', content: 'Echipă GeoExpert pe teren cu stație totală' });

    // Twitter
    upsert('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsert('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
    upsert('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
    upsert('meta[name="twitter:image"]', { name: 'twitter:image', content: hero });

    // Preload imagine hero
    const preloadSel = 'link[rel="preload"][as="image"][href="'+hero+'"]';
    if (!document.head.querySelector(preloadSel)) {
      const link = document.createElement('link');
      link.setAttribute('rel', 'preload');
      link.setAttribute('as', 'image');
      link.setAttribute('href', hero);
      document.head.appendChild(link);
    }

    // Favicons (placeholders)
    upsert('link[rel="icon"]', { rel: 'icon', href: '/favicon.ico' });

    // JSON-LD: Organization + LocalBusiness(ProfessionalService) + WebSite + BreadcrumbList
    const ld = [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Scraba CAD Solutions SRL',
        url: siteUrl,
        logo: hero,
        email: 'contact@contact.ro',
        telephone: '+40700000000'
      },
      {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Scraba CAD Solutions SRL',
        url: siteUrl,
        areaServed: 'RO',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Str. Exemplu 10',
          addressLocality: 'București',
          addressCountry: 'RO'
        },
        telephone: '+40700000000',
        openingHours: 'Mo-Fr 09:00-18:00',
        makesOffer: [
          { '@type': 'Offer', name: 'Ridicări topografice' },
          { '@type': 'Offer', name: 'Cadastru' },
          { '@type': 'Offer', name: 'Trasare construcții' },
          { '@type': 'Offer', name: 'Planuri pentru autorizații' }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Scraba CAD Solutions SRL',
        url: siteUrl,
        potentialAction: {
          '@type': 'SearchAction',
          target: siteUrl + '?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Acasă', item: siteUrl }
        ]
      }
    ];

    // Inject/replace single script[type=json+ld]
    const id = 'geoexpert-jsonld';
    let script = document.getElementById(id);
    if (!script) {
      script = document.createElement('script');
    //   script.type = 'application/ld+json';
      script.id = id;
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(ld);
  }, []);
  return null;
}

export default function GeoExpertLanding() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({} as Record<string, string>);
  const year = useMemo(() => new Date().getFullYear(), []);

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Numele este obligatoriu.";
    if (!form.email.trim()) e.email = "Emailul este obligatoriu.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Introduceți un email valid.";
    if (!form.phone.trim()) e.phone = "Telefonul este obligatoriu.";
    else if (!/^[0-9+()\-\s]{7,20}$/.test(form.phone)) e.phone = "Introduceți un număr de telefon valid.";
    if (!form.message.trim()) e.message = "Mesajul este obligatoriu.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;

    // Lead-gen friendly: open a prefilled email (works without backend)
    const subject = encodeURIComponent("Cerere ofertă – Scraba CAD Solutions SRL");
    const body = encodeURIComponent(
      `Nume: ${form.name}\nEmail: ${form.email}\nTelefon: ${form.phone}\n\nMesaj:\n${form.message}`
    );
    window.location.href = `mailto:oferta@geoexpert.ro?subject=${subject}&body=${body}`;
  }

  const nav = (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group" aria-label="Scraba CAD Solutions SRL acasă">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="shrink-0">
            <path d="M3 18l9-14 9 14H3z" className="fill-slate-900"/>
            <path d="M7 18l5-8 5 8H7z" className="fill-[#0a2540]"/>
          </svg>
          <span className="text-[#0a2540] font-semibold text-lg tracking-tight">Scraba CAD Solutions SRL</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-slate-700 hover:text-[#0a2540]">Servicii</a>
          <a href="#about" className="text-slate-700 hover:text-[#0a2540]">Despre noi</a>
          <a href="#why" className="text-slate-700 hover:text-[#0a2540]">De ce noi</a>
          <a href="#contact" className="inline-flex items-center rounded-xl border border-[#0a2540] px-4 py-2 text-[#0a2540] hover:bg-[#0a2540] hover:text-white transition">Cere ofertă</a>
        </div>
      </div>
    </nav>
  );

  return (
    <div id="top" className="font-sans text-slate-800 scroll-smooth">
      <SEOHead />
      {nav}

      {/* HERO */}
      <header className="relative pt-24 pb-16 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-[#0a2540]">
              Topografie, Cadastru și Trasare la standarde profesionale
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Scraba CAD Solutions SRL oferă servicii complete pentru persoane fizice și juridice: ridicări topografice, documentații de cadastru, trasare construcții și planuri pentru autorizații. Rapid, corect și conform normelor ANCPI.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-[#0a2540] px-6 py-3 text-white font-semibold shadow hover:shadow-lg transition">
                Cere ofertă
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 text-slate-700 hover:border-[#0a2540] hover:text-[#0a2540] transition">
                Vezi serviciile
              </a>
            </div>
            <div className="mt-6 text-sm text-slate-500">
              <span className="font-medium text-slate-700">Timp de răspuns:</span> în aceeași zi lucrătoare
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg ring-1 ring-slate-200">
              {/* Hero image placeholder – replace with o fotografie a echipei pe teren cu stație totală */}
              <img
                src="https://images.unsplash.com/photo-1610808072077-9e1b3c040f1d?q=80&w=1600&auto=format&fit=crop"
                alt="Echipă de topografie pe teren cu stație totală"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden sm:block bg-white/90 backdrop-blur rounded-2xl shadow p-4 border border-slate-200">
              <p className="text-sm">
                <span className="font-semibold text-[#0a2540]">Autorizat ANCPI</span> • ETRS89/Stereo70 • Precizie instrumente 1''
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a2540]">Serviciile noastre</h2>
          <p className="mt-2 text-slate-600">Soluții complete și conforme pentru proiecte civile și industriale.</p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Ridicări topografice",
                desc: "Ridicări planimetrice și altimetrice pentru proiectare, DTAC, PUD/PUZ, studii topografice.",
                bullets: ["ETRS89/Stereo 70", "Curbe de nivel", "Planuri 2D/3D"],
              },
              {
                title: "Cadastru",
                desc: "Documentații de intabulare, dezmembrare, alipire, actualizare CF, măsurători precise.",
                bullets: ["Verificare acte", "Dosare complete eTerra", "Suport până la recepție"],
              },
              {
                title: "Trasare construcții",
                desc: "Trasare axe clădiri, cote de nivel, aliniamente drumuri și utilități cu toleranțe milimetrice.",
                bullets: ["Stații totale 1''", "GPS RTK", "Rapoarte de trasare"],
              },
              {
                title: "Planuri pentru autorizații",
                desc: "Planuri de situație, încadrare în zonă, rețele edilitare pentru DTAC/ATU.",
                bullets: ["Format digital + tipărit", "Semnătură electronică", "Livrare rapidă"],
              },
            ].map((s) => (
              <div key={s.title} className="rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-[#0a2540] flex items-center justify-center">
                    <span className="text-white text-lg">◆</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{s.title}</h3>
                </div>
                <p className="mt-3 text-slate-600">{s.desc}</p>
                <ul className="mt-4 space-y-1 text-sm text-slate-600 list-disc list-inside">
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#0a2540]">Despre Scraba CAD Solutions SRL</h2>
            <p className="mt-4 text-slate-700">
              Suntem o echipă de ingineri geodezi cu experiență în proiecte rezidențiale, comerciale și infrastructură. 
              Utilizăm echipamente moderne (stații totale, nivelmente digitale, GNSS RTK) și fluxuri digitale pentru 
              livrări precise și rapide. Firma este <span className="font-semibold">autorizată ANCPI</span> pentru lucrări de 
              specialitate și operează conform normelor în vigoare.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full bg-white border border-slate-200 px-3 py-1">Certificare ANCPI</span>
              <span className="rounded-full bg-white border border-slate-200 px-3 py-1">Instrumente calibrate</span>
              <span className="rounded-full bg-white border border-slate-200 px-3 py-1">Arhivă digitală livrări</span>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
            <h3 className="text-xl font-semibold text-[#0a2540]">Autorizații & conformitate</h3>
            <ul className="mt-4 space-y-2 text-slate-700 list-disc list-inside">
              <li>Autorizare ANCPI pentru lucrări de specialitate</li>
              <li>Respectarea sistemelor naționale de referință: ETRS89 / Stereo 70</li>
              <li>Protecția datelor și semnătură electronică calificată</li>
              <li>Procese verbale și rapoarte standardizate</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a2540]">De ce să ne alegi</h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Precizie certificată", text: "Toleranțe milimetrice și verificări în teren și birou." },
              { title: "Răspuns rapid", text: "Ofertă în aceeași zi și programări flexibile." },
              { title: "Conformitate totală", text: "Documentații conforme ANCPI și livrări digitale semnate." },
              { title: "Transparență", text: "Devize clare, etape explicate, fără costuri ascunse." },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-slate-200 p-6 bg-slate-50/60 hover:bg-slate-50 transition">
                <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-slate-700">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-[#0a2540]">Solicită o ofertă</h2>
            <p className="mt-2 text-slate-700">Completați formularul și revenim cu o ofertă personalizată.</p>
            <form onSubmit={handleSubmit} className="mt-8 space-y-4" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Nume*</label>
                <input id="name" name="name" autoComplete="name" required
                  value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full rounded-xl border-slate-300 focus:border-[#0a2540] focus:ring-[#0a2540]" />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email*</label>
                  <input id="email" name="email" type="email" autoComplete="email" required
                    value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-1 w-full rounded-xl border-slate-300 focus:border-[#0a2540] focus:ring-[#0a2540]" />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Telefon*</label>
                  <input id="phone" name="phone" inputMode="tel" placeholder="07xx xxx xxx" required
                    value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="mt-1 w-full rounded-xl border-slate-300 focus:border-[#0a2540] focus:ring-[#0a2540]" />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Mesaj*</label>
                <textarea id="message" name="message" rows={5} required
                  value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1 w-full rounded-xl border-slate-300 focus:border-[#0a2540] focus:ring-[#0a2540]" />
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
              </div>
              <div className="flex items-center gap-3">
                <button type="submit" className="inline-flex items-center rounded-xl bg-[#0a2540] px-6 py-3 text-white font-semibold shadow hover:shadow-lg transition">
                  Trimite cererea
                </button>
                <a href="tel:+40700000000" className="text-slate-600 hover:text-[#0a2540]">sau sună: <span className="font-semibold">+40 700 000 000</span></a>
              </div>
              <p className="text-xs text-slate-500">Prin trimiterea formularului sunteți de acord cu prelucrarea datelor conform <a href="#privacy" className="underline">politicii de confidențialitate</a>.</p>
            </form>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
            <h3 className="text-xl font-semibold text-[#0a2540]">Date de contact</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>Scraba CAD Solutions SRL</li>
              <li>CUI: 12345678</li>
              <li>Sediu: Str. Exemplu 10, București</li>
              <li>Punct de lucru: Str. Terenului 5, Brașov</li>
              <li>Email: <a href="mailto:contact@geoexpert.ro" className="underline">contact@geoexpert.ro</a></li>
              <li>Telefon: <a href="tel:+40700000000" className="underline">+40 700 000 000</a></li>
            </ul>
            <div className="mt-6 h-56 w-full rounded-xl overflow-hidden border border-slate-200">
              {/* Placeholder hartă – integrați ulterior un iframe Google Maps */}
              <iframe
                title="Harta sediu Scraba CAD Solutions SRL"
                className="h-full w-full"
                src="https://www.openstreetmap.org/export/embed.html?bbox=26.05%2C44.42%2C26.12%2C44.46&layer=mapnik"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0a2540] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M3 18l9-14 9 14H3z" className="fill-white"/>
              </svg>
              <span className="font-semibold text-lg">Scraba CAD Solutions SRL</span>
            </div>
            <p className="mt-3 text-white/80 text-sm">Topografie • Cadastru • Trasare</p>
          </div>
          <div>
            <h4 className="font-semibold">Date firmă</h4>
            <ul className="mt-3 text-white/80 text-sm space-y-1">
              <li>CUI: 12345678</li>
              <li>Nr. Reg. Com.: J00/0000/2020</li>
              <li>Sediu: Str. Exemplu 10, București</li>
              <li>Email: contact@geoexpert.ro</li>
              <li>Telefon: +40 700 000 000</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Linkuri utile</h4>
            <ul className="mt-3 text-white/80 text-sm space-y-1">
              <li><a href="#services" className="hover:underline">Servicii</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
              <li><a href="#privacy" className="hover:underline">Politică de confidențialitate</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 text-center text-white/70 text-sm">
            © {year} Scraba CAD Solutions SRL. Toate drepturile rezervate.
          </div>
        </div>
      </footer>

      {/* PRIVACY (minimal placeholder) */}
      <section id="privacy" className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0a2540]">Politică de confidențialitate</h2>
          <p className="mt-4 text-slate-700 text-sm leading-relaxed">
            Scraba CAD Solutions SRL prelucrează datele cu caracter personal în scopul furnizării serviciilor de topografie și
            cadastru, în baza temeiului legal al executării contractului și al interesului legitim. Datele sunt păstrate
            pe perioada necesară îndeplinirii scopului și nu sunt transferate către terți decât atunci când este necesar
            pentru îndeplinirea obligațiilor legale. Pentru exercitarea drepturilor dumneavoastră (acces, rectificare,
            ștergere, restricționare), ne puteți contacta la adresa contact@geoexpert.ro.
          </p>
        </div>
      </section>
      
    </div>
  );
}
