import CapabilityCard from "./CapabilityCard";
import Reveal from "@/components/Reveal";
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
    image: "/assets/banners/projection-mapping-solutions/1.jpeg",
  },
  {
    icon: CubeIcon,
    accent: "teal",
    title: "Hologram, HoloBox & Volumetric Display",
    description:
      "We create advanced holographic display experiences that present people, products, and digital content as immersive volumetric visuals.",
    image: "/assets/banners/hologram-holobox-volumetric-display/2.jpeg",
  },
  {
    icon: HeadsetIcon,
    accent: "rose",
    title: "AR VR XR Immersive Technologies",
    description:
      "We develop immersive AR, VR, and XR experiences that blend digital content with real environments to enhance visualization and training.",
    image: "/assets/banners/ar-vr-xr-immersive-technologies/1.jpeg",
  },
  {
    icon: BuildingIcon,
    accent: "violet",
    title: "Experience Centre Consulting & Execution",
    description:
      "We design and deliver immersive experience centres that communicate ideas, engage audiences, and bring brands and technologies to life.",
    image: "/assets/banners/experience-centre/1.jpeg",
  },
  {
    icon: PavilionIcon,
    accent: "teal",
    title: "Events, Exhibitions & Brand Activation",
    description:
      "We create immersive events, exhibitions, and brand activations combining storytelling, spatial design, and interactive technology.",
    image: "/assets/banners/events-exhibitions-brand-activations/2.jpeg",
  },
  {
    icon: DisplayIcon,
    accent: "rose",
    title: "Interactive Technologies",
    description:
      "We develop interactive technology solutions that enable users to engage with digital content through intuitive, responsive, and immersive interfaces.",
    image: "/assets/banners/interactive-technologies/2.jpeg",
  },
];

export default function CapabilitiesSection({ capabilities = defaultCapabilities }) {
  return (
    <section className="relative overflow-hidden py-12 sm:py-28">

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
        <Reveal className="flex flex-col max-w-5xl mx-auto">
          <div className="">
            <h2 className="text-2xl font-light leading-tight tracking-normal text-white sm:text-2xl lg:text-5xl">
              Interactive Experiences That
              <br/>

            </h2>
          </div>

          <div className="">
            <h2 className="bg-linear-to-r from-fuchsia-500 via-fuchsia-400 to-pink-400 bg-clip-text text-right tracking-tight text-transparent text-2xl font-normal leading-tight sm:text-2xl lg:text-5xl">
               <span className="text-2xl font-light leading-tight tracking-normal text-white sm:text-2xl lg:text-5xl">People {" "}</span>
                Don&apos;t Just See — They Feel.
            </h2>
          </div>
        </Reveal>

        <Reveal as="p" delay={100} className="mt-6 max-w-2xl text-sm leading-relaxed text-white/40 mx-auto">
          In a world overloaded with content, interaction is the new attention. We help brands move beyond passive visuals into engaging, participatory, and immersive experiences that drive real audience connection.
        </Reveal>

        <div className="mt-14 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, i) => (
            <Reveal key={item.title} delay={Math.min(i, 5) * 90} distance={28} className="h-full">
              <CapabilityCard {...item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
