// Drop-in replacements for the lucide-react icons used in the site.
// Same API: <Mail className="h-5 w-5" strokeWidth={1.8} />

const base = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function Mail({ strokeWidth = 2, ...props }) {
  return (
    <svg {...base} strokeWidth={strokeWidth} aria-hidden="true" {...props}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export function Phone({ strokeWidth = 2, ...props }) {
  return (
    <svg {...base} strokeWidth={strokeWidth} aria-hidden="true" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function MapPin({ strokeWidth = 2, ...props }) {
  return (
    <svg {...base} strokeWidth={strokeWidth} aria-hidden="true" {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function Send({ strokeWidth = 2, ...props }) {
  return (
    <svg {...base} strokeWidth={strokeWidth} aria-hidden="true" {...props}>
      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
      <path d="m21.854 2.147-10.94 10.939" />
    </svg>
  );
}

export function Menu({ strokeWidth = 2, ...props }) {
  return (
    <svg {...base} strokeWidth={strokeWidth} aria-hidden="true" {...props}>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  );
}

export function X({ strokeWidth = 2, ...props }) {
  return (
    <svg {...base} strokeWidth={strokeWidth} aria-hidden="true" {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export function ChevronDown({ strokeWidth = 2, ...props }) {
  return (
    <svg {...base} strokeWidth={strokeWidth} aria-hidden="true" {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function ChevronRight({ strokeWidth = 2, ...props }) {
  return (
    <svg {...base} strokeWidth={strokeWidth} aria-hidden="true" {...props}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export function Zap({ strokeWidth = 2, fill: fillProp = "none", ...props }) {
  return (
    <svg {...base} fill={fillProp} strokeWidth={strokeWidth} aria-hidden="true" {...props}>
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
    </svg>
  );
}

/**
 * Social icons: pull the official SVG from each brand's press/brand-guidelines
 * page and drop it in here, or install @icons-pack/react-simple-icons.
 * Wrap whatever you use in this shell so sizing and colour stay consistent.
 */
export function SocialIcon({ children, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

// Simple Icons dropped LinkedIn at the company's request, so its mark is
// hand-rolled here rather than re-exported like the rest.
export function Linkedin(props) {
  return (
    <SocialIcon {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </SocialIcon>
  );
}

export {
  SiInstagram as Instagram,
  SiFacebook as Facebook,
  SiYoutube as Youtube,
  SiBehance as Behance,
  SiWhatsapp as Whatsapp,
} from "@icons-pack/react-simple-icons";
