import CapabilityCard from "./CapabilityCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { PATHS } from "@/constants/paths";
import {
  BuildingIcon,
  ClapperboardIcon,
  CubeIcon,
  DisplayIcon,
  HeadsetIcon,
  PavilionIcon,
  ProjectorIcon,
  TouchIcon,
} from "./CapabilityIcons";

// "What we build" on the home page, in the copy deck's order: content
// creation first, then the experiences it powers.
const defaultCapabilities = [
  {
    icon: ClapperboardIcon,
    accent: "violet",
    title: "Content creation",
    description:
      "2D and 3D animation, anamorphic 3D, generative AI content, live shoots and visual effects, created for facades, LED walls, holograms, headsets and custom screens.",
    image: "/assets/cards/3d-animation-motion-graphics/1.webp",
    link: { label: "Content creation", href: PATHS.creativeSolutions },
  },
  {
    icon: BuildingIcon,
    accent: "teal",
    title: "Experience centres",
    description:
      "Visitor centres, vision galleries and sales pavilions, from the story and the content to the technology that makes a big idea easy to understand.",
    image: "/assets/banners/experience-centre/1.webp",
    link: { label: "Experience centre design", href: PATHS.experienceCentres },
  },
  {
    icon: ProjectorIcon,
    accent: "rose",
    title: "Projection mapping",
    description:
      "Facades, interiors, scale models and stages, with content created for the real geometry of the surface.",
    image: "/assets/banners/projection-mapping-solutions/1.webp",
    link: { label: "Projection mapping in Dubai", href: PATHS.projectionMapping },
  },
  {
    icon: CubeIcon,
    accent: "violet",
    title: "Holograms and HoloBox",
    description:
      "Life-size presenters, floating products and stage holograms, with hologram content made in-house.",
    image: "/assets/banners/hologram-holobox-volumetric-display/2.webp",
    link: { label: "Hologram displays in the UAE", href: PATHS.holograms },
  },
  {
    icon: HeadsetIcon,
    accent: "teal",
    title: "AR, VR and XR",
    description:
      "Configurators, training simulations and virtual tours, with 3D content built to run reliably in public venues.",
    image: "/assets/banners/ar-vr-xr-immersive-technologies/1.webp",
    link: { label: "AR and VR experiences", href: PATHS.arVr },
  },
  {
    icon: DisplayIcon,
    accent: "rose",
    title: "3D anamorphic billboards",
    description: "Anamorphic 3D content that appears to step out of corner and curved LED screens.",
    image: "/assets/banners/anamorphic-3d-content-creation/1.webp",
    link: { label: "3D billboards in Dubai", href: PATHS.anamorphic },
  },
  {
    icon: TouchIcon,
    accent: "violet",
    title: "Interactive installations",
    description:
      "Touch tables, gesture walls and interactive floors, with content that responds to the person in front of them.",
    image: "/assets/banners/interactive-technologies/2.webp",
    link: { label: "Interactive installations", href: PATHS.interactive },
  },
  {
    icon: PavilionIcon,
    accent: "teal",
    title: "Events and brand activations",
    description:
      "Launches, exhibition stands and pop-ups where content, hardware and staging work as one system.",
    image: "/assets/banners/events-exhibitions-brand-activations/2.webp",
    link: { label: "Brand activations", href: PATHS.events },
  },
];

export default function CapabilitiesSection({ capabilities = defaultCapabilities, heading = "What we build" }) {
  return (
    <section className="relative overflow-hidden py-8 sm:py-28">

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading text={heading} align="center" inline size="md" accentClassName="from-fuchsia-500 via-fuchsia-400 to-pink-400" />
        </Reveal>

        <div className="mt-8 sm:mt-14 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
