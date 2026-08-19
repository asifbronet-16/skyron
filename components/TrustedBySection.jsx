import LogoStrip from "./LogoStrip";

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
  count = "3450+",
  marquee = false,
}) {
  return (
    <section className="relative overflow-hidden  py-16 sm:py-20">
      

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
        <h2 className="text-center text-xl font-normal tracking-tight text-white sm:text-2xl lg:text-4xl">
          Trusted by{" "}
          <span className="bg-linear-to-r from-indigo-500 via-blue-500 to-sky-400 bg-clip-text text-transparent">
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
