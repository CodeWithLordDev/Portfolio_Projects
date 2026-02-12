import Link from "next/link";
import {
  Code2,
  MonitorSmartphone,
  Palette,
  Search,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import BackgroundGrid from "@/components/BackgroundGrid";

const services = [
  {
    title: "Web Development",
    desc: "Fast, scalable websites and web apps using modern frontend and backend architecture.",
    icon: Code2,
  },
  {
    title: "UI/UX Design",
    desc: "Clean interfaces with strong usability, better content hierarchy, and conversion-focused flows.",
    icon: Palette,
  },
  {
    title: "Mobile Development",
    desc: "Responsive cross-platform apps with smooth interactions and reliable performance.",
    icon: MonitorSmartphone,
  },
  {
    title: "Technical SEO",
    desc: "Performance, indexing, and on-page improvements that help you rank and retain traffic.",
    icon: Search,
  },
  {
    title: "API Integrations",
    desc: "Secure integrations for payments, automation tools, analytics, and third-party services.",
    icon: Workflow,
  },
  {
    title: "Maintenance & Support",
    desc: "Ongoing updates, bug fixes, and monitoring to keep your product stable and secure.",
    icon: ShieldCheck,
  },
];

const processSteps = [
  "Discovery and requirements",
  "Design and architecture",
  "Build and iteration",
  "Testing and launch",
];

export default function ServicesPage() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#03050b] text-white">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-55">
        <BackgroundGrid />
      </div>
      <div className="pointer-events-none fixed inset-0 z-[1] bg-[#03050b]/45" />

      <div className="relative z-10 mx-auto max-w-6xl space-y-10 px-4 pb-20 pt-24 sm:px-6 lg:px-10">
        <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-8 md:p-12">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-400">Services</p>
          <h1 className="mb-4 text-4xl font-semibold md:text-5xl">
            Minimal, reliable digital product services
          </h1>
          <p className="max-w-3xl text-slate-300">
            We design and build product experiences with a clean engineering process.
            Focus on speed, clarity, and long-term maintainability.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-0.5 hover:border-slate-300/30"
              >
                <div className="mb-4 inline-flex rounded-xl border border-white/10 bg-slate-900/60 p-2.5">
                  <Icon className="h-5 w-5 text-slate-200" />
                </div>
                <h2 className="mb-2 text-lg font-semibold text-white">{service.title}</h2>
                <p className="text-sm leading-relaxed text-slate-300">{service.desc}</p>
              </article>
            );
          })}
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <h2 className="mb-4 text-2xl font-semibold">Working Process</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {processSteps.map((step, i) => (
              <div
                key={step}
                className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-slate-200"
              >
                <span className="mr-2 text-slate-400">0{i + 1}.</span>
                {step}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-slate-950 p-6 md:p-8">
          <h2 className="mb-2 text-2xl font-semibold">Have a project in mind?</h2>
          <p className="mb-6 text-slate-300">Share your goals and we can shape a practical roadmap.</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
            <Link
              href="/portfolio"
              className="rounded-xl border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              View Portfolio
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
