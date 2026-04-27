// app/about/page.tsx  (or pages/about.tsx)
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Gandaki",
  description:
    "Gandaki is a family-run animal rescue shelter in Bangalore, providing shelter, food, and care to over 100 rescued animals since 2007.",
};

const stats = [
  { num: "100+", label: "Animals in our care" },
  { num: "2007", label: "Founded in Bangalore" },
  { num: "6+", label: "Species housed" },
  { num: "₹4.7L", label: "Monthly care cost" },
];

const timeline = [
  {
    year: "1997",
    text: "Gandaki family trust formally established with a vision to preserve Indian cattle breeds.",
  },
  {
    year: "2007",
    text: "Shelter operations begin. Registered as a trust (Reg. No. 143/07-08) at Kodipalya, Hosuru Village, Ramamanagara, Bangalore Rural.",
  },
  {
    year: "2019",
    text: "Adopted 15 rescued cows — the moment that defined Gandaki's calling as a dedicated animal rescue shelter.",
  },
  {
    year: "2021",
    text: "Registered with NGO Darpan (Unique ID: KA/2021/0288207), formalizing our commitment to transparency.",
  },
  {
    year: "Today",
    text: "Over 100 animals in our care. Seeking partners to grow our reach, improve facilities, and expand into human welfare programs.",
  },
];

const pillars = [
  {
    icon: "🐄",
    title: "Animal welfare",
    body: "Shelter, food, and long-term veterinary care for rescued and injured animals with no other home.",
  },
  {
    icon: "🌱",
    title: "Sustainable living",
    body: "Organic farming, rainwater harvesting, herbal cultivation, and renewable energy on our grounds.",
  },
  {
    icon: "🧬",
    title: "Breed conservation",
    body: "Preserving India's native cattle breeds through responsible and ethical breeding practices.",
  },
  {
    icon: "🤝",
    title: "Human care (planned)",
    body: "A proposed shelter for destitute girl children and a care facility for neurodiverse individuals.",
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-(--color-cream) py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">

        {/* ── Hero ── */}
        <p className="text-xs tracking-widest uppercase text-(--color-charcoal)/60 mb-2 font-medium">
          Rescue. Love. Care. Repeat.
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold leading-tight text-(--color-charcoal) mb-4">
          A <em className="italic text-emerald-700">sanctuary</em>{" "}
          built on compassion
        </h1>
        <p className="text-base sm:text-lg text-(--color-charcoal)/70 leading-relaxed max-w-xl mb-8 font-light">
          Gandaki has been home to old, injured, and abandoned animals since
          2007 — a family-run labour of love operating entirely without outside
          funding, sustained by dedication alone.
        </p>
        <div className="w-10 h-0.5 bg-emerald-600 rounded mb-10" />

        {/* ── Stats ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          {stats.map(({ num, label }) => (
            <div
              key={label}
              className="bg-white rounded-xl p-4 shadow-sm border border-stone-100"
            >
              <p className="font-serif text-3xl font-semibold text-emerald-700 leading-none mb-1">
                {num}
              </p>
              <p className="text-xs text-(--color-charcoal)/60">{label}</p>
            </div>
          ))}
        </div>

        {/* ── Story ── */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-(--color-charcoal) mb-4">
            Our story
          </h2>
          <div className="space-y-4 text-base text-(--color-charcoal)/75 leading-relaxed font-light">
            <p>
              Gandaki began as a family trust with a quiet, deeply felt purpose
              — to preserve India's native cattle breeds and give back to the
              natural world. For years it was a vision held close, funded
              entirely from personal resources.
            </p>
            <p>
              In 2019, everything changed. The trust was alerted about 15
              rescued cows with nowhere to go. Without hesitation, Gandaki took
              them in. That act of compassion set the shelter on a new path —
              and the animals kept coming.
            </p>
            <p>
              Today, Gandaki is home to over 100 animals: cows, buffaloes,
              goats, a pony, dogs, and cats. Many arrived injured, some
              permanently handicapped from the severity of what they endured.
              Each one found safety here.
            </p>
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-(--color-charcoal) mb-5">
            A journey in milestones
          </h2>
          <ol className="border-l-2 border-stone-200 pl-5 space-y-5">
            {timeline.map(({ year, text }) => (
              <li key={year} className="relative">
                <span className="absolute -left-[1.35rem] top-1.5 w-2.5 h-2.5 rounded-full bg-emerald-600" />
                <p className="text-[11px] tracking-wider uppercase text-emerald-700 font-medium mb-1">
                  {year}
                </p>
                <p className="text-sm text-(--color-charcoal)/70 leading-relaxed">
                  {text}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* ── Pull quote ── */}
        <blockquote className="border-l-4 border-emerald-600 pl-4 mb-12">
          <p className="font-serif italic text-lg text-(--color-charcoal)/70 leading-relaxed">
            "Gandaki has never received a single rupee in outside funding. Every
            animal here was saved on love, commitment, and whatever we could
            spare."
          </p>
        </blockquote>

        {/* ── Pillars ── */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-(--color-charcoal) mb-5">
            What we stand for
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map(({ icon, title, body }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-5 border border-stone-100 shadow-sm"
              >
                <span className="text-xl mb-2 block">{icon}</span>
                <h3 className="text-sm font-medium text-(--color-charcoal) mb-1">
                  {title}
                </h3>
                <p className="text-sm text-(--color-charcoal)/65 leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Location & Registration ── */}
        <section>
          <h2 className="font-serif text-2xl font-semibold text-(--color-charcoal) mb-4">
            Where we are
          </h2>
          <div className="bg-white rounded-xl p-5 border border-stone-100 shadow-sm flex flex-wrap gap-x-6 gap-y-2 text-sm text-(--color-charcoal)/65">
            {[
              "Sy. No. 372, Kodipalya, Hosuru Village",
              "Bidadi Hobli, Ramamanagara Taluk",
              "Bangalore Rural 562109",
              "NGO Darpan: KA/2021/0288207",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}