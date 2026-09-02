import ServiceCard from "./ServiceCard";
import Reveal from "@/components/Reveal";

const defaultServices = [
  {
    number: "01",
    accent: "violet",
    image: "/assets/Skyon Web Banner Images/Banners-20260822T084715Z-1-001/Banners/Home/1.png",
    title: "Interactive Experiential Content Production",
    description:
      "We create end-to-end interactive content for live and digital environments combining creative direction, design, technology, and execution.",
    points: [
      "Interactive installations",
      "Experiential brand activations",
      "Immersive storytelling environments",
      "Audience-driven digital experiences",
    ],
  },
  {
    number: "02",
    accent: "cyan",
    image: "/assets/Skyon Web Banner Images/Banners-20260822T084715Z-1-001/Banners/Home/2.png",
    title: "Immersive & Spatial Media",
    description: "We design content that exists in space, not just on screens.",
    points: [
      "Transparent LED & volumetric displays",
      "Holographic & 3D visual experiences",
      "Projection-mapped environments",
      "Large-format experiential visuals",
    ],
  },
  {
    number: "03",
    accent: "rose",
    image: "/assets/Skyon Web Banner Images/Banners-20260822T084715Z-1-001/Banners/Home/3.png",
    title: "Motion Graphics & 3D Content",
    description: "High-end motion design and 3D visuals crafted for experiential formats.",
    points: [
      "3D motion graphics for events & launches",
      "Real-time visual systems",
      "Cinematic brand films for experiential use",
      "Digital scenography",
    ],
  },
  {
    number: "04",
    accent: "purple",
    image: "/assets/Skyon Web Banner Images/Banners-20260822T084715Z-1-001/Banners/Home/4.png",
    title: "AR, XR & Interactive Technology",
    description:
      "We integrate emerging technology to make experiences responsive and intelligent.",
    points: [
      "Augmented Reality (AR) Experiences",
      "XR & mixed-reality content",
      "Sensor-based and touchless interaction",
      "Real-time audience engagement systems",
    ],
  },
];

export default function ServicesSection({ services = defaultServices }) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10"> 
        <Reveal as="h2" className="mx-auto max-w-4xl text-center text-2xl font-normal leading-relaxed tracking-itght text-white sm:text-2xl lg:text-4xl">
          Crafting{" "}
          <span className="bg-linear-to-r from-indigo-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            intelligent,
          </span>{" "}
          AI-driven solutions
        </Reveal>

        <div className="mt-14 grid items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.number} delay={Math.min(i, 5) * 90} distance={28} className="h-full">
              <ServiceCard {...service} className="h-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
