import React from "react";
import { motion } from "framer-motion";

// ---------------------------------------------
// Sharifarm — AgriTech website (single‑file React)
// Notes:
// 1) Replace LOGO_URL with your logo file (PNG/SVG) when hosting.
// 2) All photography uses dynamic Unsplash sources with keywords so you get
//    real, natural images right away. Swap any URL with your own images later.
// 3) Tailwind classes assume Tailwind is available in the environment (it is in ChatGPT canvas preview).
// ---------------------------------------------

const LOGO_URL = "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/leaflet.svg"; // swap with your actual logo URL

const IMAGES = {
  hero: "https://source.unsplash.com/1600x900/?greenhouse,hydroponics,agriculture",
  sensors: "https://source.unsplash.com/900x700/?plant,sensor,technology",
  irrigation: "https://source.unsplash.com/900x700/?drip,irrigation,farm",
  photobio: "https://source.unsplash.com/900x700/?algae,bioreactor,greenhouse",
  analytics: "https://source.unsplash.com/900x700/?dashboard,data,analytics",
  drone: "https://source.unsplash.com/1200x800/?drone,farmland",
  lab: "https://source.unsplash.com/1200x800/?laboratory,chemistry",
  field: "https://source.unsplash.com/1200x800/?wheat,field,agriculture",
};

const nav = [
  { name: "Home", href: "#home" },
  { name: "Solutions", href: "#solutions" },
  { name: "Research", href: "#research" },
  { name: "Pilots", href: "#pilots" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const container = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function SectionTitle({ kicker, title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {kicker && (
        <div className="inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold tracking-wider text-emerald-700">
          {kicker}
        </div>
      )}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-gray-600">{subtitle}</p>
      )}
    </div>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-emerald-200 px-3 py-1 text-xs font-medium text-emerald-700">
      {children}
    </span>
  );
}

export default function SharifarmSite() {
  return (
    <div className="min-h-screen scroll-smooth bg-white text-gray-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <img src={LOGO_URL} alt="Sharifarm logo" className="h-8 w-8" />
            <span className="text-lg font-bold">Sharifarm</span>
          </a>
          <nav className="hidden gap-8 md:flex">
            {nav.map((n) => (
              <a key={n.name} href={n.href} className="text-sm font-medium text-gray-700 hover:text-emerald-700">
                {n.name}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 md:inline-block"
          >
            Book a Demo
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.hero} alt="Greenhouse with rows of thriving plants" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-28 sm:py-36 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <Pill>Biotech • Sensing • Water Intelligence</Pill>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              Sustainable agriculture powered by science & smart technology
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/80">
              Sharifarm blends environmental chemistry, nanomaterials, and data to deliver practical solutions for farms, greenhouses, and aquaculture—saving water, monitoring quality, and boosting productivity.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#solutions" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-emerald-700 shadow hover:shadow-md">Explore Solutions</a>
              <a href="#contact" className="rounded-xl border border-white/70 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">Talk to Us</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section aria-label="partners" className="border-b border-gray-100 bg-gray-50/60">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500">
            <span>Trusted by researchers & growers across</span>
            <Pill>Universities</Pill>
            <Pill>Greenhouse Ops</Pill>
            <Pill>Aquaculture</Pill>
            <Pill>Local Governments</Pill>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="solutions" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          kicker="Solutions"
          title="From sensing to savings—one integrated platform"
          subtitle="Modular tools you can adopt individually or as a full stack."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Leaf & Soil Sensors",
              img: IMAGES.sensors,
              desc: "Wireless probes track pH, EC, DO, nutrients, and PFAS indicators in real time.",
              bullets: ["Plug‑and‑play", "LoRa/4G", "Battery 18+ mo"],
            },
            {
              title: "Smart Irrigation",
              img: IMAGES.irrigation,
              desc: "AI‑assisted schedules cut water use 20–40% while protecting yields.",
              bullets: ["Valve control", "Weather sync", "Leak alerts"],
            },
            {
              title: "Algae Photobioreactor Roofs",
              img: IMAGES.photobio,
              desc: "Shading + cooling + biomass: integrated panels for greenhouses & hatcheries.",
              bullets: ["Retrofit kits", "Thermal benefits", "Nutrient uptake"],
            },
            {
              title: "Water Quality Analytics",
              img: IMAGES.analytics,
              desc: "Dashboards turn lab + sensor data into decisions, with alerts & reports.",
              bullets: ["PFAS flags", "Custom KPIs", "CSV/API export"],
            },
          ].map((c) => (
            <motion.article key={c.title} variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md">
              <div className="relative h-44 w-full overflow-hidden">
                <img src={c.img} alt={c.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              </div>
              <div className="space-y-3 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{c.title}</h3>
                <p className="text-sm text-gray-600">{c.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {c.bullets.map((b) => (
                    <Pill key={b}>{b}</Pill>
                  ))}
                </div>
                <a href="#contact" className="inline-block text-sm font-semibold text-emerald-700 hover:text-emerald-800">Request details →</a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gradient-to-br from-emerald-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionTitle
            kicker="How it works"
            title="Start small. Scale fast."
            subtitle="We co‑design pilots with you, then expand to full operations."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { n: "01", title: "Site Assessment", text: "We review water use, environmental risks, and existing infrastructure." },
              { n: "02", title: "Pilot & Training", text: "Install a low‑risk pilot. Your team learns by doing with our support." },
              { n: "03", title: "Scale & Integrate", text: "Connect sensors, analytics, and controls across your operation." },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
                <div className="text-emerald-700">{s.n}</div>
                <h4 className="mt-1 text-xl font-semibold">{s.title}</h4>
                <p className="mt-2 text-gray-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILOTS / CASES */}
      <section id="pilots" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          kicker="Pilots"
          title="Real environments, measurable impact"
          subtitle="Examples from fields, labs, and coastal facilities."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[{
            title: "Smart irrigation cuts water 32%",
            img: IMAGES.field,
            body: "Soil‑moisture + weather automation reduced water use while maintaining yields in semi‑arid plots.",
            stats: ["-32% water", "+2% yield", "3‑month ROI"],
          }, {
            title: "PFAS early‑warning in aquaculture",
            img: IMAGES.lab,
            body: "Sensor + lab protocol flagged anomalies within 24h, preventing stock loss and costly shutdowns.",
            stats: ["24h alerts", "Zero downtime", "Reg‑ready logs"],
          }].map((k) => (
            <article key={k.title} className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
              <div className="relative h-56 w-full">
                <img src={k.img} alt={k.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{k.title}</h3>
                <p className="mt-2 text-gray-600">{k.body}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {k.stats.map((s) => (
                    <Pill key={s}>{s}</Pill>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* RESEARCH */}
      <section id="research" className="bg-gray-50/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionTitle
            kicker="Research"
            title="Peer‑reviewed science behind Sharifarm"
            subtitle="Selected publications and ongoing projects."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Nano‑enabled microalgae reactors for water quality & cooling",
                outlet: "ACS (2025)",
                link: "#",
              },
              {
                title: "Surface chemistry approach to PFAS detection in hydroponics",
                outlet: "EST Eng. (2025)",
                link: "#",
              },
              {
                title: "Smart irrigation scheduling with multi‑sensor data fusion",
                outlet: "Agri‑Systems (2024)",
                link: "#",
              },
            ].map((p) => (
              <a key={p.title} href={p.link} className="group block rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md">
                <h3 className="text-lg font-semibold group-hover:text-emerald-700">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.outlet}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-emerald-700">View abstract →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl">
            <img src={IMAGES.drone} alt="Drone surveying farmland for precision agriculture" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          <div>
            <SectionTitle title="Science‑first. Field‑ready." subtitle="We’re a team of environmental chemists, engineers, and growers building practical technology that respects farm realities." />
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Led by Dr. Sharifan (UTEP) with partners across FAU, FIU, and local growers.</li>
              <li>• Focus areas: PFAS sensing, algae‑based cooling, water‑use efficiency, and resilience planning.</li>
              <li>• We co‑produce solutions with communities to ensure adoption and equity.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-emerald-700">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-white">Let’s design your pilot</h2>
              <p className="mt-2 max-w-lg text-emerald-50">
                Share a bit about your operation and goals. We’ll respond with a simple pilot plan and budget range.
              </p>
              <div className="mt-6 space-y-2 text-emerald-50">
                <div>📧 hello@sharifarm.io</div>
                <div>📍 El Paso, TX • Boca Raton, FL</div>
              </div>
            </div>

            <form
              className="rounded-2xl bg-white p-6 shadow-xl"
              action="mailto:hello@sharifarm.io"
              method="post"
              encType="text/plain"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium text-gray-700">
                  Name
                  <input name="name" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-emerald-600 focus:outline-none" />
                </label>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                  <input name="email" type="email" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-emerald-600 focus:outline-none" />
                </label>
                <label className="block text-sm font-medium text-gray-700 sm:col-span-2">
                  Organization
                  <input name="org" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-emerald-600 focus:outline-none" />
                </label>
                <label className="block text-sm font-medium text-gray-700 sm:col-span-2">
                  What are you hoping to solve?
                  <textarea name="message" rows={4} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-emerald-600 focus:outline-none" />
                </label>
              </div>
              <button type="submit" className="mt-4 w-full rounded-xl bg-emerald-600 px-4 py-3 font-semibold text-white shadow hover:bg-emerald-700">Send</button>
              <p className="mt-2 text-center text-xs text-gray-500">This form uses mailto:. Swap to your CRM later (Netlify/Vercel serverless or Formspree).</p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <img src={LOGO_URL} alt="Sharifarm logo" className="h-6 w-6" />
              <span className="text-sm font-semibold">Sharifarm</span>
            </div>
            <div className="text-xs text-gray-500">© {new Date().getFullYear()} Sharifarm. All rights reserved.</div>
            <div className="flex gap-4 text-sm">
              <a href="#privacy" className="text-gray-500 hover:text-gray-700">Privacy</a>
              <a href="#terms" className="text-gray-500 hover:text-gray-700">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
