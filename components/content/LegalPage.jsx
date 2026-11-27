import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleBody from "@/components/content/ArticleBody";

/** A legal page (Privacy Policy, Terms of Use) from its LegalDoc in constants/legal.ts. */
export default function LegalPage({ doc }) {
  const updated = new Date(doc.updated).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <article className="relative bg-[#08060f] px-6 pt-28 pb-16 sm:pt-44 sm:pb-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-normal leading-tight text-white sm:text-4xl">{doc.h1}</h1>
          <p className="mt-4 text-sm text-white/50">
            Last updated <time dateTime={doc.updated}>{updated}</time>
          </p>
          <ArticleBody nodes={doc.body} />
        </div>
      </article>
      <Footer />
    </main>
  );
}
