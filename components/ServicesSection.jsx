import ServiceCard from "./ServiceCard";

const defaultServices = [
  {
    number: "01",
    accent: "violet",
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
    <section className="relative overflow-hidden bg-[#08080D] py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-20 h-[420px] w-[420px] rounded-full bg-fuchsia-600/15 blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-indigo-600/15 blur-[150px]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
        <h2 className="mx-auto max-w-4xl text-center text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          Crafting{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            intelligent,
          </span>{" "}
          AI-driven solutions
        </h2>

        <div className="mt-14 grid items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.number} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
