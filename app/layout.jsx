import { Poppins, Orbitron } from "next/font/google";
import { SITE, SOCIALS } from "@/constants/site";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-orbitron",
});

// Pages set their own full titles (e.g. "Blogs — Skyron"), so there's no
// title template here — it would double the brand up.
//
// No canonical, openGraph or twitter here on purpose: metadata merges
// shallowly, so every page that didn't set them would inherit the home
// page's. Each page builds its own with pageMetadata() (lib/metadata.ts).
export const metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.title,
  description: SITE.description,
};

// Organization markup so search engines tie the site, the office, and the
// social profiles to one entity. `sameAs` is the list they read to confirm
// a profile is officially ours.
const ORGANIZATION_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.url,
  logo: `${SITE.url}/assets/image-2.png`,
  description: SITE.description,
  email: SITE.email,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    addressCountry: SITE.address.country,
  },
  sameAs: SOCIALS.map((social) => social.href),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${poppins.variable} ${orbitron.variable} bg-[#08060f] font-sans antialiased`}
      >
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_LD) }}
        />
      </body>
    </html>
  );
}
