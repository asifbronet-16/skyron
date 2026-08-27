import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import SectionHeading from "@/components/SectionHeading";
import FeatureGrid from "@/components/FeatureGrid";
import FaqSection from "@/components/home/FaqSection";
import ServiceCard from "@/components/home/ServiceCard";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Our Approach — Skyron",
  description:
    "How Skyron takes an idea from first brief to opening night — discovery, design, build, and on-site delivery under one accountable team.",
};

const STEPS = [
  {
    image: "/assets/banners/our-approach/1.jpeg",
    number: "01",
    accent: "violet",
    title: "Envision & Discovery",
    description:
      "We begin by listening and observing. Through collaborative dialogue, research, and insight-led exploration, we understand your vision, audience, and challenges — establishing clarity, alignment, and a shared strategic direction that guides every experiential decision forward.",
  },
  {
    image: "/assets/banners/our-approach/1.jpeg",
    number: "02",
    accent: "cyan",
    title: "Concept Development",
    description:
      "Ideas are shaped through creative exploration and strategic intent. We define the narrative, experience flow, and technological direction, assessing feasibility and impact — translating possibilities into a clear concept, structured roadmap, and confident foundation for execution.",
  },
  {
    image: "/assets/banners/our-approach/1.jpeg",
    number: "03",
    accent: "rose",
    title: "Design & Experience Architecture",
    description:
      "Creative vision meets technical precision as concepts evolve into detailed experience architectures. Interaction logic, visual language, and system frameworks are developed through prototyping and previsualization — ensuring coherence, usability, and design integrity before production begins.",
  },
  {
    image: "/assets/banners/our-approach/1.jpeg",
    number: "04",
    accent: "purple",
    title: "Production & Integration",
    description:
      "Our multidisciplinary teams bring experiences to life through content creation, development, and system integration. Structured reviews, demonstrations, and collaborative checkpoints ensure consistency, quality, and alignment — transforming designed concepts into fully realized experiential solutions.",
  },
  {
    image: "/assets/banners/our-approach/1.jpeg",
    number: "05",
    accent: "violet",
    title: "Experience Deployment & Activation",
    description:
      "We manage on-site implementation, calibration, and final refinements to ensure a seamless activation. Each experience is tested, optimized, and launched with confidence — supported by clear documentation and knowledge transfer for smooth handover.",
  },
  {
    image: "/assets/banners/our-approach/1.jpeg",
    number: "06",
    accent: "cyan",
    title: "Ongoing Support",
    description:
      "Our involvement continues beyond launch. We provide ongoing monitoring, maintenance, and technical support — ensuring stability, performance, and adaptability as experiences evolve, scale, and continue delivering value over time.",
  },
];

const PRINCIPLES = [
  {
    title: "Collaboration First",
    description: "You're in the room for every major decision — concept reviews, tech walkthroughs, and on-site rehearsals included.",
  },
  {
    title: "Iterative by Design",
    description: "We prototype early and test on real hardware fast, so surprises show up in a rehearsal, not on opening night.",
  },
  {
    title: "One Accountable Team",
    description: "Creative, technical, and production sit under one roof — no vendor hand-offs, no dropped context between teams.",
  },
  {
    title: "Built to Scale",
    description: "Every system is designed with the next activation in mind, so what we build together keeps paying off.",
  },
];

const APPROACH_FAQS = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most activations run 6–12 weeks from signed brief to opening night, depending on scale and fabrication lead times. You'll get a realistic timeline out of the discovery stage, not an optimistic one.",
  },
  {
    question: "Do you work with our internal marketing or ops team?",
    answer:
      "Yes — we embed with your team rather than working at arm's length. You're in the room for concept reviews, tech walkthroughs, and on-site rehearsals.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We stay on for run-of-show support, content refreshes, and iteration as the experience evolves. Launch day is the start of the relationship, not the end of the project.",
  },
  {
    question: "Can you take over a project that's already underway?",
    answer:
      "Sometimes — it depends what's already been locked in. Send us where things stand and we'll tell you honestly whether we can add value.",
  },
  {
    question: "How do you handle scope changes mid-project?",
    answer:
      "Every stage ends with a sign-off, so changes get scoped and priced before they touch the timeline — no surprise invoices at the end.",
  },
];

export default function OurApproachPage() {
  return (
    <main className="relative overflow-hidden">
      {/* glows are scoped to this wrapper (hero → CtaBanner) so bottom-0 lands on
          CtaBanner's opaque, full-bleed background instead of bleeding past Footer's
          narrower, centered container into the page's side gutters */}
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-60 top-[10%] h-130 w-130 rounded-full bg-[#FF2D78] opacity-35 blur-[100px] z-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-35 bottom-0 h-130 w-130 rounded-full bg-[#31417D] opacity-80 z-10 blur-[100px]"
        />

        <Navbar active="Our Story" />

        <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden px-6 pt-32 pb-24 sm:min-h-[85vh] sm:pt-40 sm:pb-32">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          >
            <source src="/assets/OurStory/our-approach.mp4" type="video/mp4" />
          </video>

          {/* eased top/bottom falloff so the video melts into the sections around it */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,#08060f_0%,rgba(8,6,15,0.9)_6%,rgba(8,6,15,0.6)_14%,rgba(8,6,15,0.25)_24%,transparent_38%,transparent_62%,rgba(8,6,15,0.25)_76%,rgba(8,6,15,0.6)_86%,rgba(8,6,15,0.9)_94%,#08060f_100%)]"
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <Reveal className="flex items-center justify-center gap-4">
              <span className="h-0.5 w-16 bg-linear-to-r from-transparent via-[#5f30ca] to-[#317890]" />
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#a996f0]">
                Our Approach
              </span>
              <span className="h-0.5 w-16 bg-linear-to-r from-[#317890] via-[#5f30ca] to-transparent" />
            </Reveal>

            <Reveal delay={100}>
              <SectionHeading lead="We Begin With" accent="Understanding, Not Execution" align="center" className="mt-6" />
            </Reveal>

            <Reveal as="p" delay={200} className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
              Every SKYRON Interactive project starts by looking closely at the purpose of the
              space, the people it&apos;s meant for, the message it needs to carry, and the kind
              of response it should create. From there, we shape the journey — how the audience
              should enter the experience, how the story should unfold, where moments of
              interaction should happen, and how content should move through the environment with
              clarity and impact. Only after that do we determine the most appropriate media,
              systems, and technologies to support it. This is what allows our work to feel
              coherent, rather than crowded. Thoughtful, rather than decorative. Tailored, rather
              than interchangeable.
            </Reveal>
          </div>
        </section>

        <div className="relative bg-[#08060f]">
          <section className="relative overflow-hidden bg-[#08060f] px-6 pt-16 pb-20 sm:pt-20 sm:pb-28">
            <div className="relative mx-auto max-w-6xl">
              <Reveal>
                <SectionHeading
                  lead="Our"
                  accent="Process"
                  inline
                  align="center"
                  accentClassName="from-violet-500 via-fuchsia-500 to-pink-500"
                />
              </Reveal>

              <div className="mt-14 grid items-stretch gap-10 sm:grid-cols-2 xl:grid-cols-4">
                {STEPS.map((step, i) => (
                  <Reveal key={step.number} delay={Math.min(i, 5) * 90} distance={28} className="h-full">
                    <ServiceCard
                      {...step}
                      className="h-full justify-center py-8"
                    />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <FeatureGrid
            lead="Principles We"
            accent="Don't Bend On"
            subtitle="The process only works if the team behind it holds to the same standards on every project."
            cards={PRINCIPLES}
            className="pt-0 sm:pt-0"
          />
          <FaqSection items={APPROACH_FAQS} />
        </div>

      <CtaBanner />
      </div>
      <Footer />
    </main>
  );
}
