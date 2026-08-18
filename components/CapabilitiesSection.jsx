import CapabilityCard from "./CapabilityCard";
import {
  BuildingIcon,
  ClapperboardIcon,
  CubeIcon,
  DisplayIcon,
  HeadsetIcon,
  PavilionIcon,
} from "./CapabilityIcons";

const defaultCapabilities = [
  {
    icon: ClapperboardIcon,
    accent: "violet",
    title: "Projection Mapping Solutions",
    description:
      "We create immersive projection mapping experiences that transform surfaces, spaces, and objects into dynamic storytelling platforms.",
  },
  {
    icon: CubeIcon,
    accent: "teal",
    title: "Hologram, HoloBox & Volumetric Display",
    description:
      "We create advanced holographic display experiences that present people, products, and digital content as immersive volumetric visuals.",
  },
  {
    icon: HeadsetIcon,
    accent: "rose",
    title: "AR VR XR Immersive Technologies",
    description:
      "We develop immersive AR, VR, and XR experiences that blend digital content with real environments to enhance visualization and training.",
  },
  {
    icon: BuildingIcon,
    accent: "violet",
    title: "Experience Centre Consulting & Execution",
    description:
      "We design and deliver immersive experience centres that communicate ideas, engage audiences, and bring brands and technologies to life.",
  },
  {
    icon: PavilionIcon,
    accent: "teal",
    title: "Events, Exhibitions & Brand Activation",
    description:
      "We create immersive events, exhibitions, and brand activations combining storytelling, spatial design, and interactive technology.",
  },
  {
    icon: DisplayIcon,
    accent: "rose",
    title: "Interactive Technologies",
    description:
      "We develop interactive technology solutions that enable users to engage with digital content through intuitive, responsive, and immersive interfaces.",
  },
];

export default function CapabilitiesSection({ capabilities = defaultCapabilities }) {
  return (
    <section className="relative overflow-hidden bg-[#08080D] py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-10 h-[420px] w-[420px] rounded-full bg-rose-600/15 blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-indigo-600/15 blur-[150px]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
        <h2 className="mx-auto max-w-4xl text-center text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          Interactive Experiences That People{" "}
          <span className="bg-gradient-to-r from-fuchsia-500 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
            Don&apos;t Just See — They Feel.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-slate-400 md:text-left">
          In a world overloaded with content, interaction is the new attention. We help brands move
          beyond passive visuals into immersive experiences.
        </p>

        <div className="mt-14 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <CapabilityCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
