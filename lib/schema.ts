/**
 * schema.org structured data (JSON-LD), as specified in section 6 of the
 * developer handoff. Rendered by components/JsonLd.jsx.
 *
 * Never add FAQPage, Review, AggregateRating or HowTo markup to this site.
 */
import { SITE, SOCIALS } from "@/constants/site";

const url = (path: string) => `${SITE.url}${path === "/" ? "/" : path}`;

const ORGANIZATION_ID = url("/#organization");
const WEBSITE_ID = url("/#website");
const LOGO_ID = url("/#logo");

/** Organization + ProfessionalService + WebSite: on every page, from the root layout. */
export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        name: SITE.name,
        legalName: SITE.legalName,
        url: url("/"),
        logo: { "@type": "ImageObject", "@id": LOGO_ID, url: url(SITE.logoSquare), width: 512, height: 512 },
        email: SITE.email,
        telephone: SITE.phone,
        sameAs: SOCIALS.map((social) => social.href),
      },
      {
        "@type": "ProfessionalService",
        "@id": url("/#dubai-studio"),
        name: SITE.name,
        parentOrganization: { "@id": ORGANIZATION_ID },
        image: { "@id": LOGO_ID },
        url: url("/"),
        telephone: SITE.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE.address.street,
          addressLocality: SITE.address.locality,
          addressCountry: SITE.address.country,
        },
        ...(SITE.googleBusinessProfileUrl && { hasMap: SITE.googleBusinessProfileUrl }),
        areaServed: ["AE", "SA", "QA", "Middle East"],
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: url("/"),
        name: SITE.name,
        publisher: { "@id": ORGANIZATION_ID },
      },
    ],
  };
}

type Crumb = { label: string; href: string };

function breadcrumbList(crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.label,
      item: url(crumb.href),
    })),
  };
}

/** Service + BreadcrumbList for a service page. `crumbs` runs Home → hub → the page. */
export function serviceGraph({
  name,
  serviceType,
  path,
  crumbs,
  areaServed = ["AE", "SA", "QA"],
}: {
  name: string;
  serviceType: string;
  path: string;
  crumbs: Crumb[];
  areaServed?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url(path)}#service`,
        name,
        serviceType,
        provider: { "@id": ORGANIZATION_ID },
        areaServed,
        url: url(path),
      },
      breadcrumbList(crumbs),
    ],
  };
}

/** AboutPage (Who We Are) or ContactPage (Contact). */
export function webPageGraph({ type, path, name }: { type: "AboutPage" | "ContactPage"; path: string; name: string }) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url(path)}#webpage`,
    url: url(path),
    name,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
  };
}

/**
 * Article + BreadcrumbList for an Insights post. A named author is a Person;
 * "Skyron team" is credited as the organisation itself.
 */
export function articleGraph({
  headline,
  path,
  author,
  datePublished,
  dateModified,
  image,
  crumbs,
}: {
  headline: string;
  path: string;
  author: { name: string; role?: string };
  datePublished: string;
  dateModified?: string;
  image: string;
  crumbs: Crumb[];
}) {
  const isTeam = /team$/i.test(author.name);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url(path)}#article`,
        headline,
        url: url(path),
        mainEntityOfPage: url(path),
        author: isTeam
          ? { "@id": ORGANIZATION_ID }
          : { "@type": "Person", name: author.name, ...(author.role && { jobTitle: author.role }) },
        datePublished,
        dateModified: dateModified ?? datePublished,
        publisher: { "@id": ORGANIZATION_ID },
        image: url(image),
      },
      breadcrumbList(crumbs),
    ],
  };
}
