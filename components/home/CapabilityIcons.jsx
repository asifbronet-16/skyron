/**
 * Small inline icon set for CapabilityCard. Every icon inherits currentColor
 * and sizes off the parent, so no icon library is needed. Filled (solid)
 * style — shapes are closed silhouettes rather than outlines.
 */
const base = {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  stroke: "none",
  "aria-hidden": "true",
  className: "h-5 w-5",
};

export function ClapperboardIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <rect x="2.3" y="3.6" width="19.4" height="4" rx="1" transform="rotate(-8 12 5.6)" />
    </svg>
  );
}

export function CubeIcon(props) {
  return (
    <svg {...base} {...props}>
      <polygon points="12,2.8 20,7 12,11.2 4,7" fillOpacity="1" />
      <polygon points="20,7 20,17 12,21.2 12,11.2" fillOpacity="0.75" />
      <polygon points="4,7 12,11.2 12,21.2 4,17" fillOpacity="0.5" />
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
      <path
        fillRule="evenodd"
        d="M4 21V8l6-3v16H4Z M6.2 11.5h1.4v1.4H6.2Z M6.2 15.5h1.4v1.4H6.2Z"
      />
      <path
        fillRule="evenodd"
        d="M10 21V11l8-3v13H10Z M12.2 10.5h1.4v1.4h-1.4Z M12.2 14.5h1.4v1.4h-1.4Z M15.4 9.3h1.4v1.4h-1.4Z"
      />
      <rect x="3" y="20.3" width="18" height="1.4" rx="0.4" />
    </svg>
  );
}

export function PavilionIcon(props) {
  return (
    <svg {...base} {...props}>
      <path
        fillRule="evenodd"
        d="M12 3 3.5 19h17L12 3Z M9.2 19c0-2.5 1.2-4 2.8-4s2.8 1.5 2.8 4Z"
      />
    </svg>
  );
}

export function DisplayIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="18" height="12.5" rx="2" />
      <rect x="11.2" y="16.5" width="1.6" height="4" />
      <rect x="8" y="20.2" width="8" height="1.6" rx="0.8" />
    </svg>
  );
}
