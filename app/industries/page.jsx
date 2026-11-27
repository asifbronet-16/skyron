import Link from "next/link";
import Image from "next/image";
import { altFor } from "@/constants/imageAlt";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import TrustedBySection from "@/components/home/TrustedBySection";
import Reveal from "@/components/Reveal";
import { CardGrid } from "@/components/content/Blocks";
import { ChevronRight } from "@/components/icons";
import { PATHS } from "@/constants/paths";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Industries We Serve in the UAE & Middle East | Skyron",
  description:
    "Content creation and immersive experiences for government, museums, real estate, retail and events across the UAE, Saudi Arabia and the Middle East.",
  path: PATHS.industries,
});

// Each sector is its own H2 in the copy deck, with two links into the services.
const INDUSTRIES = [
  {
    title: "Government, authorities and mega projects",
    body: "Vision galleries, VIP briefing rooms and public pavilions that explain national strategies and giga-projects to ministers, delegations and citizens. We design the story, produce the films and 3D, and integrate projection, LED and holograms into one journey.",
    image: "/assets/banners/industries/1.webp",
    links: [
      { label: "Experience centres for government", href: PATHS.experienceCentres },
      { label: "Projection mapping", href: PATHS.projectionMapping },
    ],
  },
  {
    title: "Museums, culture and heritage",
    body: "Interpretation galleries, interactive exhibits and immersive rooms that tell regional stories with care. Content can be updated, so the gallery stays current as research and collections grow.",
    image: "/assets/banners/events-exhibitions-brand-activations/1.webp",
    links: [
      { label: "Interactive installations", href: PATHS.interactive },
      { label: "Projection mapping", href: PATHS.projectionMapping },
    ],
  },
  {
    title: "Live events and experiential marketing",
    body: "Launches, ceremonies, festivals and exhibition stands where content, hardware and staging run as one system.",
    image: "/assets/banners/events-exhibitions-brand-activations/2.webp",
    links: [
      { label: "Brand activations", href: PATHS.events },
      { label: "Holograms", href: PATHS.holograms },
    ],
  },
  {
    title: "Luxury, retail and malls",
    body: "Window projections, HoloBox product reveals, anamorphic screens and interactive flagship installations that make people stop, look and come in.",
    image: "/assets/cards/industries/3.webp",
    links: [
      { label: "3D anamorphic billboards", href: PATHS.anamorphic },
      { label: "Holograms", href: PATHS.holograms },
    ],
  },
  {
    title: "Real estate, architecture and destinations",
    body: "Interactive 3D masterplans, projection-mapped scale models, VR walkthroughs and sales gallery content that show buyers a place before it's built.",
    image: "/assets/cards/industries/1.webp",
    links: [
      { label: "3D visualization", href: PATHS.threeD },
      { label: "AR and VR", href: PATHS.arVr },
    ],
  },
  {
    title: "Entertainment and media",
    body: "Film and series launches, music events and fan experiences that turn audiences into participants.",
    image: "/assets/cards/industries/2.webp",
    links: [
      { label: "Holograms", href: PATHS.holograms },
      { label: "Live action and VFX", href: PATHS.liveAction },
    ],
  },
];

export default function IndustriesPage() {
  return (
    <main className="relative overflow-hidden mt-18 sm:mt-30">

      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-70 top-[10%] h-130 w-130 rounded-full bg-[#FF2D78] opacity-35 blur-[120px] z-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-55 bottom-0 h-130 w-130 rounded-full bg-[#31417D] opacity-50 z-10 blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-80 h-130 w-130  rounded-full bg-[#2A6DF4] opacity-40 blur-[110px] z-10"
        />

        <Navbar active="Our Story" />

        <div className="relative bg-[#08060f]">


          <section className="relative isolate flex min-h-[60vh] items-center overflow-hidden px-6 pt-16 pb-16 sm:min-h-[85vh] sm:pt-40 sm:pb-32 lg:px-34">

            {/* Image layer — absolute, full bleed, anchored right */}
            <div className="absolute inset-y-0 right-0 h-full w-[55%] overflow-hidden">
              <Image
                src="/assets/banners/industries/1.webp"
                alt={altFor("/assets/banners/industries/1.webp")}
                fill
                preload
                sizes="55vw"
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />

              {/* top + bottom falloff so the image melts into the sections around it */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,#08060f_0%,transparent_16%,transparent_84%,#08060f_100%)]"
              />

              {/* left-edge falloff, scoped to the video itself (not the whole section) so it's
                  fully opaque right at the container's edge — no visible seam — and eases out
                  from there instead of already being partway faded when the video starts */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#08060f_0%,#08060f_10%,rgba(8,6,15,0.85)_22%,rgba(8,6,15,0.55)_36%,rgba(8,6,15,0.25)_50%,transparent_65%)]"
              />
            </div>

            <div className="relative mx-auto w-full ">
              <div className="w-full max-w-xl">
                <Reveal as="p" className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80">
                  Industries we serve
                </Reveal>

                <Reveal as="h1" delay={100} className="mt-6 text-[2.25rem] font-semibold leading-[1.2] tracking-tight text-white sm:text-5xl lg:text-[3.2rem]">
                  Industries where{" "}
                  <span className="bg-linear-to-r from-fuchsia-500 via-purple-500 to-indigo-400 bg-clip-text text-transparent">
                    experience drives impact
                  </span>
                </Reveal>

                <Reveal as="p" delay={200} className="mt-7 max-w-md text-base leading-relaxed text-white/60">
                  We build immersive content and spaces for organisations that need people to understand
                  something and remember it. These are the sectors we work in across the UAE, Saudi
                  Arabia, the wider Middle East and beyond.
                </Reveal>

                <Reveal as="p" delay={260} className="mt-4 max-w-md text-base leading-relaxed text-white/60">
                  In every sector we create the content as well as the experience: 2D and 3D animation,
                  anamorphic 3D, generative AI content, live shoots and visual effects.
                </Reveal>

                <Reveal delay={300} className="mt-10">
                  <Link
                    href={PATHS.brief}
                    className="inline-flex items-center gap-3 rounded-full bg-[linear-gradient(90deg,#9B1FA8_0%,#7B2C9E_35%,#2A7F92_100%)] py-2 pl-7 pr-2 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
                  >
                    Start the conversation
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                      <ChevronRight className="h-4 w-4" strokeWidth={2.2} />
                    </span>
                  </Link>
                </Reveal>
              </div>
            </div>

          </section>

          <section className="relative overflow-hidden bg-[#08060f] px-6 py-12 sm:py-24">
            <div className="relative mx-auto max-w-6xl">
              <CardGrid headingAs="h2" cards={INDUSTRIES} />
            </div>
          </section>

          <TrustedBySection />
        </div>

        <CtaBanner
          heading="Tell us about your sector and your space"
          text="We reply within two working days."
          button={{ label: "Start the conversation", href: PATHS.brief }}
        />
      </div>

      <Footer />
    </main>
  );
}
