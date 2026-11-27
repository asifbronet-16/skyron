import FaqAccordion from "./FaqAccordion";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

// The home page's questions. Other pages pass their own `items` and `heading`.
const defaultFaqs = [
  {
    question: "What does Skyron specialise in?",
    answer:
      "Skyron is a Dubai-based spatial experience studio. We specialise in content creation and creative storytelling for interactive and immersive experiences, and in the technology that delivers them: projection mapping, holograms, AR/VR, interactive installations and experience centres, for brands, developers and government entities across the Middle East and beyond.",
  },
  {
    question: "What types of experiences does Skyron create?",
    answer:
      "Projection mapping shows, LED and immersive rooms, interactive installations, museum and exhibition media, and live brand activations, each with content created in-house and built as one connected experience rather than separate pieces.",
  },
  {
    question: "Does Skyron handle both creative concept and technical execution?",
    answer:
      "Yes. The same team takes a project from research and concept through user experience design, content creation, programming, hardware installation and on-site testing.",
  },
  {
    question: "What industries does Skyron work with?",
    answer:
      "Retail and hospitality, real estate, culture and museums, government and public spaces, and large-scale events across the UAE, Saudi Arabia, the wider Middle East and beyond.",
  },
  {
    question: "How can I start a project with Skyron?",
    answer:
      "Send us your brief, site details and timeline. We reply within two working days with a concept direction, scope and an indicative budget.",
  },
];

// Questions are shown as plain content: the site deliberately carries no
// FAQPage schema markup.
export default function FaqSection({ items = defaultFaqs, heading = "Frequently asked questions" }) {
  return (
    <section className="relative overflow-hidden bg-[#08080D] py-8 sm:py-28">

      <div className="relative mx-auto w-full max-w-3xl px-6">
        <Reveal>
          <SectionHeading text={heading} align="center" inline size="md" />
        </Reveal>

        <Reveal delay={120} className="mt-8 sm:mt-14">
          <FaqAccordion items={items} />
        </Reveal>
      </div>
    </section>
  );
}
