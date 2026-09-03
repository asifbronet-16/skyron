import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Page Not Found — Skyron",
  description: "The page you're looking for doesn't exist, moved, or never made it past concept.",
};

export default function NotFound() {
  return (
    <main className="relative">
      <Navbar active="" />

      <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-[#08060f] px-6 pt-16 pb-16 sm:min-h-[85vh] sm:pt-40 sm:pb-24">
        {/* ambient glow, signature palette */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-[8%] h-100 w-100 rounded-full bg-[#FF2D78] opacity-20 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 bottom-0 h-100 w-100 rounded-full bg-[#31417D] opacity-25 blur-[120px]"
        />

        <div className="relative mx-auto max-w-2xl text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-0.5 w-14 bg-linear-to-r from-transparent via-[#5f30ca] to-[#317890]" />
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#8b7bd8]">
              Error 404
            </span>
            <span className="h-0.5 w-14 bg-linear-to-r from-[#317890] via-[#5f30ca] to-transparent" />
          </div>

          <p className="font-logo text-[5.5rem] font-medium leading-none tracking-wide text-transparent bg-clip-text bg-linear-to-r from-violet-500 via-fuchsia-400 to-sky-400 sm:text-[8rem]">
            404
          </p>

          <SectionHeading lead="This Page Drifted" accent="Off The Grid" align="center" className="mt-6" />

          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-white/55 sm:text-base">
            The page you&apos;re looking for doesn&apos;t exist, moved, or never made it past concept.
            Let&apos;s get you back to something real.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="rounded-full bg-linear-to-r from-violet-600 via-blue-500 to-cyan-400 px-7 py-3.5 text-sm font-medium text-white
                         shadow-[0_0_30px_-8px_rgba(99,102,241,.7)] transition hover:shadow-[0_0_38px_-6px_rgba(56,189,248,.8)]"
            >
              Back To Home
            </Link>
            <Link
              href="/#contact"
              className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:border-white/60 hover:bg-white/5"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </main>
  );
}
