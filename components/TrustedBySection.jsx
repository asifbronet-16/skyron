import LogoStrip from "./LogoStrip";

const defaultLogos = [
  { name: "Dubai Municipality", src: "/logos/dubai-municipality.svg" },
  { name: "Sudair One Renewable Energy Company", src: "/logos/sudair-one.svg" },
  { name: "Ministry of Environment and Climate Change, Qatar", src: "/logos/moecc-qatar.svg" },
  { name: "ACWA Power", src: "/logos/acwa-power.svg" },
  { name: "Ministry of Culture", src: "/logos/ministry-of-culture.svg" },
  { name: "Toyota", src: "/logos/toyota.svg" },
];

export default function TrustedBySection({
  logos = defaultLogos,
  count = "3450+",
  marquee = false,
}) {
  return (
    <section className="relative overflow-hidden bg-[#08080D] py-16 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[140px]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Trusted by{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-blue-500 to-sky-400 bg-clip-text text-transparent">
            {count}
          </span>{" "}
          happy customers
        </h2>

        <div className="mt-14">
          <LogoStrip logos={logos} marquee={marquee} />
        </div>
      </div>
    </section>
  );
}
