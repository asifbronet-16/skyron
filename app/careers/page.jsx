import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import FeatureGrid from "@/components/FeatureGrid";
import SectionHeading from "@/components/SectionHeading";
import ApplicationForm from "@/components/careers/ApplicationForm";
import { Briefcase, ChevronRight, MapPin, Paperclip } from "@/components/icons";
import { SITE } from "@/constants/site";
import { CV_MAX_MB, JOB_OPENINGS } from "@/constants/careers";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Careers — Skyron",
  description:
    "Join Skyron's team of artists, designers and technologists crafting immersive spatial experiences. See open roles and apply online.",
  path: "/careers",
});

const WHY_SKYRON = [
  {
    title: "Work Across Mediums",
    description: "Projection mapping one month, holograms or AR the next. Our briefs span 2D, 3D, live action, real-time and spatial tech, so no two projects look alike.",
  },
  {
    title: "See Your Work Live",
    description: "What you make doesn't stay on a screen. It lands on building facades, exhibition floors and stages, in front of real audiences.",
  },
  {
    title: "Story Before Stack",
    description: "Every project starts from the idea and the emotion it should create. The technology is chosen to serve your craft, never the other way round.",
  },
  {
    title: "One Team, End To End",
    description: "Concept, content, hardware and on-site delivery sit under one roof, so you follow a project from first sketch to opening night.",
  },
  {
    title: "Craft Obsessed",
    description: "Motion, sound and spatial detail get tuned frame by frame. You'll work with people who care about the details most studios ship past.",
  },
  {
    title: "Grow With The Industry",
    description: "Displays, engines and AI tools keep moving, and so do we. You'll pick up new pipelines and formats as the medium evolves.",
  },
];

const APPLY_CHECKLIST = [
  `Your CV, as a PDF or Word file up to ${CV_MAX_MB}MB`,
  "A link to your portfolio, showreel, Behance or GitHub",
  "A few lines on the work you'd love to do with us",
];

function Eyebrow({ children, center = false }) {
  return (
    <div className={`flex items-center gap-4 ${center ? "justify-center" : ""}`}>
      <span className="h-0.5 w-16 bg-linear-to-r from-transparent via-[#5f30ca] to-[#317890]" />
      <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#8b7bd8]">
        {children}
      </span>
      {center && <span className="h-0.5 w-16 bg-linear-to-r from-[#317890] via-[#5f30ca] to-transparent" />}
    </div>
  );
}

export default function CareersPage() {
  return (
    <main className="relative overflow-hidden">
      {/* glows are scoped to this wrapper (hero → apply form) instead of the hero
          section alone, so the ambient wash bleeds across the whole page instead
          of getting clipped at the hero's own overflow-hidden edge */}
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-60 top-[10%] z-10 h-130 w-130 rounded-full bg-[#FF2D78] opacity-20 blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-55 bottom-0 z-10 h-130 w-130 rounded-full bg-[#31417D] opacity-30 blur-[100px]"
        />

        <Navbar active="Our Story" />

        <section className="relative overflow-hidden bg-[#08060f] px-6 pt-28 pb-8 sm:pt-44 sm:pb-16">
          <div className="relative mx-auto max-w-3xl text-center">
            <Reveal>
              <Eyebrow center>Careers</Eyebrow>
            </Reveal>

            <Reveal delay={100}>
              <SectionHeading as="h1" lead="Shape The Future Of" accent="Spatial Storytelling" align="center" className="mt-6" />
            </Reveal>

            <Reveal as="p" delay={200} className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/55 sm:text-base">
              We&apos;re a studio of artists, designers and technologists turning spaces into living
              stories. If you love the moment craft meets technology, we&apos;d love to meet you.
            </Reveal>

            <Reveal delay={300} className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#openings"
                className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:border-white/60 hover:bg-white/5"
              >
                See Open Roles
              </Link>
              <Link
                href="#apply"
                className="inline-block rounded-full bg-[linear-gradient(90deg,#9B1FA8_0%,#7B2C9E_35%,#2A7F92_100%)] px-8 py-3.5 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
              >
                Apply Now
              </Link>
            </Reveal>
          </div>
        </section>

        <FeatureGrid
          lead="Why Build"
          accent="With Skyron"
          subtitle="The kind of work, and the kind of team, you'd be joining."
          cards={WHY_SKYRON}
        />

        <section id="openings" className="relative scroll-mt-24 overflow-hidden bg-[#08060f] px-6 py-12 sm:py-20 lg:scroll-mt-32">
          <div className="relative mx-auto max-w-6xl">
            <Reveal>
              <Eyebrow>Open Roles</Eyebrow>
              <SectionHeading lead="Current" accent="Openings" inline className="mt-6" />
            </Reveal>

            {JOB_OPENINGS.length > 0 ? (
              <ul className="mt-10 grid gap-4">
                {JOB_OPENINGS.map((job, i) => (
                  <Reveal as="li" key={job.slug} delay={Math.min(i, 4) * 90}>
                    <article className="group flex flex-col gap-5 rounded-2xl border border-white/8 bg-white/3 p-6 transition-colors hover:border-violet-400/30 sm:flex-row sm:items-center sm:justify-between sm:p-7">
                      <div>
                        <h3 className="text-lg font-medium text-white">{job.title}</h3>
                        <p className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-white/45">
                          <span className="inline-flex items-center gap-1.5">
                            <Briefcase className="h-3.5 w-3.5 text-violet-400" strokeWidth={1.8} />
                            {job.department} · {job.type}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5 text-violet-400" strokeWidth={1.8} />
                            {job.location}
                          </span>
                        </p>
                        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/55">{job.summary}</p>
                      </div>
                      <Link
                        href={`/careers?role=${job.slug}#apply`}
                        aria-label={`Apply for ${job.title}`}
                        className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition hover:border-violet-400/40 hover:bg-violet-500/10 sm:self-center"
                      >
                        Apply
                        <ChevronRight className="h-4 w-4" strokeWidth={2} />
                      </Link>
                    </article>
                  </Reveal>
                ))}
              </ul>
            ) : (
              <Reveal
                delay={100}
                className="mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl border border-dashed border-white/12 bg-white/2 p-6 sm:flex-row sm:items-center sm:p-8"
              >
                <div>
                  <h3 className="text-lg font-medium text-white">No open roles right now</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/55">
                    We&apos;re still keen to hear from talented 3D artists, motion designers, developers
                    and producers. Send a general application and we&apos;ll keep you in mind for
                    what&apos;s next.
                  </p>
                </div>
                <Link
                  href="#apply"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition hover:border-violet-400/40 hover:bg-violet-500/10"
                >
                  Send an application
                  <ChevronRight className="h-4 w-4" strokeWidth={2} />
                </Link>
              </Reveal>
            )}
          </div>
        </section>

        <section id="apply" className="relative scroll-mt-24 overflow-hidden bg-[#08060f] px-6 pt-8 pb-16 sm:pt-16 sm:pb-28 lg:scroll-mt-32">
          <div className="pointer-events-none absolute inset-0 [background:radial-gradient(50%_45%_at_75%_45%,rgba(56,189,248,.07),transparent_70%)]" />

          <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:gap-16">
            <Reveal as="div">
              <Eyebrow>Apply</Eyebrow>
              <SectionHeading lead="Send Us Your" accent="Application" className="mt-6" />

              <p className="mt-6 max-w-md text-base leading-relaxed text-white/55">
                Tell us the role you&apos;re after, or leave it blank for a general application.
                Every application is read by the team.
              </p>

              <h3 className="mt-8 text-[11px] font-medium uppercase tracking-[0.14em] text-white/40">
                What to include
              </h3>
              <ul className="mt-4 space-y-3">
                {APPLY_CHECKLIST.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/75">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-violet-400/15 bg-violet-500/10">
                      <Paperclip className="h-3.5 w-3.5 text-violet-400" strokeWidth={1.8} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-sm text-white/45">
                Prefer email? Send your CV to{" "}
                <a href={`mailto:${SITE.careersEmail}`} className="text-white/85 transition hover:text-violet-300">
                  {SITE.careersEmail}
                </a>
                .
              </p>
            </Reveal>

            <ApplicationForm />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
