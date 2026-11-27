import NavbarMenu from "@/components/NavbarMenu";
import { INSIGHTS_LIVE } from "@/constants/blogs";
import { CASE_STUDIES_LIVE } from "@/constants/caseStudies";
import { PATHS } from "@/constants/paths";
import { ALL_SOLUTIONS, CREATIVE_SECTION, TECHNOLOGY_SECTION } from "@/lib/solutions";

// The menu, as in the copy deck's shared text. Built here on the server from
// the content lists, so the browser receives only these labels and links,
// never the pages' copy.
const servicesIn = (section) =>
  ALL_SOLUTIONS.filter((item) => item.section === section).map((item) => ({ label: item.navLabel, href: item.href }));

const NAV_LINKS = [
  { label: "Home", href: PATHS.home },
  {
    label: "Our Story",
    href: "",
    children: [
      { label: "Who We Are", href: PATHS.whoWeAre },
      { label: "Our Approach", href: PATHS.ourApproach },
      { label: "Industries We Serve", href: PATHS.industries },
      { label: "Careers", href: PATHS.careers },
    ],
  },
  {
    label: "What We Do",
    href: "",
    children: [
      { label: CREATIVE_SECTION.label, href: CREATIVE_SECTION.href, children: servicesIn(CREATIVE_SECTION) },
      { label: TECHNOLOGY_SECTION.label, href: TECHNOLOGY_SECTION.href, children: servicesIn(TECHNOLOGY_SECTION) },
    ],
  },
  // Both stay hidden until they have real content (see constants/).
  ...(CASE_STUDIES_LIVE ? [{ label: "Case Studies", href: PATHS.caseStudies }] : []),
  ...(INSIGHTS_LIVE ? [{ label: "Insights", href: PATHS.insights }] : []),
];

export default function Navbar({ active = "Home" }) {
  return <NavbarMenu links={NAV_LINKS} active={active} />;
}
