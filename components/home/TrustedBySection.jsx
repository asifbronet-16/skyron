import LogoStrip from "./LogoStrip";
import Reveal from "../Reveal";

const defaultLogos = [
  { name: "Dubai Municipality", src: "/logos/dubai-municipality.png" },
  { name: "Sudair One Renewable Energy Company", src: "/logos/sudair-one.png" },
  { name: "Ministry of Environment and Climate Change, Qatar", src: "/logos/moecc-qatar.png" },
  { name: "ACWA Power", src: "/logos/acwa-power.png" },
  { name: "Ministry of Culture", src: "/logos/ministry-of-culture.png" },
  { name: "Toyota", src: "/logos/toyota.png" },
];

export default function TrustedBySection({
  logos = defaultLogos,
  marquee = false,
}) {
  return (
    <section className="relative overflow-hidden  py-8 sm:py-20">


      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
        <Reveal as="h2" className="text-center text-xl font-normal tracking-tight text-white sm:text-2xl lg:text-4xl">
          Trusted By{" "}
          <span className="bg-linear-to-r from-indigo-500 via-blue-500 to-sky-400 bg-clip-text text-transparent">
            Well-Known Organizations
          </span>
        </Reveal>

        <Reveal delay={120} className="mt-8 sm:mt-14">
          <LogoStrip logos={logos} marquee={marquee} />
        </Reveal>
      </div>
    </section>
  );
}
