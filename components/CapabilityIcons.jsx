/**
 * Small inline icon set for CapabilityCard. Every icon inherits currentColor
 * and sizes off the parent, so no icon library is needed.
 */
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  className: "h-5 w-5",
};

export function ClapperboardIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="M3 9V6.5a1 1 0 0 1 .8-.98l14-2.5A1 1 0 0 1 19 4v.7" />
      <path d="M7.5 8.4 9 4.2M12.5 7.6 14 3.4M17.5 6.9 19 5.2" />
    </svg>
  );
}

export function CubeIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2.8 20 7v10l-8 4.2L4 17V7l8-4.2Z" />
      <path d="M4 7l8 4.2L20 7M12 11.2V21" />
    </svg>
  );
}

export function HeadsetIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 10.5A2.5 2.5 0 0 1 5.5 8h13A2.5 2.5 0 0 1 21 10.5v3a2.5 2.5 0 0 1-2.5 2.5h-2.2a2 2 0 0 1-1.5-.7l-1.3-1.5a2 2 0 0 0-3 0l-1.3 1.5a2 2 0 0 1-1.5.7H5.5A2.5 2.5 0 0 1 3 13.5v-3Z" />
    </svg>
  );
}

export function BuildingIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 21V8l6-3v16" />
      <path d="M10 21V11l8-3v13" />
      <path d="M3 21h18M13.5 12.5v.01M13.5 16v.01M6.8 10v.01M6.8 13.5v.01" />
    </svg>
  );
}

export function PavilionIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 3.5 19h17L12 3Z" />
      <path d="M12 3v16M8.5 19c0-3 1.6-5 3.5-5s3.5 2 3.5 5" />
    </svg>
  );
}

export function DisplayIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="18" height="12.5" rx="2" />
      <path d="M9 20.5h6M12 16.5v4" />
    </svg>
  );
}
