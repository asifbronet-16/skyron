import { Poppins, Orbitron } from "next/font/google";
import Script from "next/script";
import AnalyticsEvents from "@/components/AnalyticsEvents";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/constants/site";
import { siteGraph } from "@/lib/schema";
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

// Google Analytics 4. Production only, so local dev traffic stays out of the reports.
const GA_MEASUREMENT_ID = "G-BX89E4FXS6";
const LOAD_ANALYTICS = process.env.NODE_ENV === "production";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${poppins.variable} ${orbitron.variable} bg-[#08060f] font-sans antialiased`}
      >
        {children}

        {/* Organization, Dubai studio and WebSite, tying the site, the office and
            the social profiles to one entity (lib/schema.ts). */}
        <JsonLd data={siteGraph()} />

        {LOAD_ANALYTICS && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
            </Script>
            <AnalyticsEvents />
          </>
        )}
      </body>
    </html>
  );
}
