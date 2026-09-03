import FaqAccordion from "./FaqAccordion";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const defaultFaqs = [
  {
    question: "What does Skyron specialize in?",
    answer:
      "Skyron specializes in experiential design, immersive technologies, and interactive content production. We combine storytelling, creative design, and intelligent technology to create engaging spatial experiences for brands, institutions, and public spaces.",
  },
  {
    question: "What types of experiences does Skyron create?",
    answer:
      "Projection mapping, LED and immersive rooms, interactive installations, museum and exhibition media, and live brand activations — built as one connected experience rather than separate pieces.",
  },
  {
    question: "Does Skyron handle both creative concept and technical execution?",
    answer:
      "Yes. The same team takes a project from concept and storyboard through content production, hardware integration, on-site installation, and testing.",
  },
  {
    question: "What industries does Skyron work with?",
    answer:
      "Retail and hospitality, real estate, culture and museums, government and public spaces, and large-scale events across the region.",
  },
  {
    question: "How can I start a project with Skyron?",
    answer:
      "Send us your brief, site details, and timeline. We reply within two working days with a concept direction, scope, and an indicative budget.",
  },
];

export default function FaqSection({ items = defaultFaqs }) {
  return (
    <section className="relative overflow-hidden bg-[#08080D] py-8 sm:py-28">

      <div className="relative mx-auto w-full max-w-3xl px-6">
        <Reveal>
          <SectionHeading
            lead="Frequently Asked"
            accent="Questions"
            align="center"
            inline
          />
        </Reveal>

        <Reveal delay={120} className="mt-8 sm:mt-14">
          <FaqAccordion items={items} />
        </Reveal>
      </div>
    </section>
  );
}
