import LogoStrip from "./LogoStrip";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

// Only clients who have approved the use of their logo belong here.
const defaultLogos = [
  { name: "Dubai Municipality", src: "/logos/dubai-municipality.png" },
  { name: "Sudair One Renewable Energy Company", src: "/logos/sudair-one.png" },
  { name: "Ministry of Energy", src: "/logos/ministry-of-energy.png" },
  { name: "ACWA Power", src: "/logos/acwa-power.png" },
  { name: "Ministry of Culture", src: "/logos/ministry-of-culture.png" },
  { name: "Toyota", src: "/logos/toyota.png" },
];

export default function TrustedBySection({
  logos = defaultLogos,
  marquee = false,
  heading = "Trusted by organisations across the Middle East",
}) {
  return (
    <section className="relative overflow-hidden  py-8 sm:py-20">


      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            text={heading}
            align="center"
            inline
            size="md"
            accentClassName="from-indigo-500 via-blue-500 to-sky-400"
          />
        </Reveal>

        <Reveal delay={120} className="mt-8 sm:mt-14">
          <LogoStrip logos={logos} marquee={marquee} />
        </Reveal>
      </div>
    </section>
  );
}
