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

/* --- Process-stage icons (Our Approach) — same solid style as the set above --- */

export function SearchIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="15.2" y="14.4" width="6.2" height="2.5" rx="1.25" transform="rotate(45 15.2 14.4)" />
      <path
        fillRule="evenodd"
        d="M10.6 3a7.6 7.6 0 1 1 0 15.2 7.6 7.6 0 0 1 0-15.2Zm0 2.5a5.1 5.1 0 1 0 0 10.2 5.1 5.1 0 0 0 0-10.2Z"
      />
    </svg>
  );
}

export function LightbulbIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2.4a6.6 6.6 0 0 0-3.9 11.93c.46.34.73.87.73 1.44v.13h6.34v-.13c0-.57.27-1.1.73-1.44A6.6 6.6 0 0 0 12 2.4Z" />
      <rect x="8.83" y="17.4" width="6.34" height="1.7" rx="0.85" />
      <rect x="10.1" y="20" width="3.8" height="1.7" rx="0.85" />
    </svg>
  );
}

export function BlueprintIcon(props) {
  return (
    <svg {...base} {...props}>
      <path
        fillRule="evenodd"
        d="M5 3h14a1.6 1.6 0 0 1 1.6 1.6v14.8A1.6 1.6 0 0 1 19 21H5a1.6 1.6 0 0 1-1.6-1.6V4.6A1.6 1.6 0 0 1 5 3Zm1.6 3.6v4.2h4.2V6.6H6.6Zm6.4 0v1.6h4.4V6.6H13Zm0 3.1v1.6h4.4V9.7H13Zm-6.4 3.7v1.6h10.8v-1.6H6.6Zm0 3.4v1.6h7.2v-1.6H6.6Z"
      />
    </svg>
  );
}

export function GearIcon(props) {
  return (
    <svg {...base} {...props}>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <rect key={deg} x="10.9" y="1.6" width="2.2" height="4.8" rx="0.8" transform={`rotate(${deg} 12 12)`} />
      ))}
      <path
        fillRule="evenodd"
        d="M12 4.8a7.2 7.2 0 1 0 0 14.4 7.2 7.2 0 0 0 0-14.4Zm0 4.3a2.9 2.9 0 1 1 0 5.8 2.9 2.9 0 0 1 0-5.8Z"
      />
    </svg>
  );
}

export function RocketIcon(props) {
  return (
    <svg {...base} {...props}>
      <path
        fillRule="evenodd"
        d="M12 1.8c2.9 2 4.7 5.3 4.9 8.9l.05 1.1 1.55 1.6a2.6 2.6 0 0 1 .72 1.8v3.5l-3.4-1.6-.5.5a2 2 0 0 1-1.42.6h-3.8a2 2 0 0 1-1.42-.6l-.5-.5-3.4 1.6v-3.5a2.6 2.6 0 0 1 .72-1.8l1.55-1.6.05-1.1c.2-3.6 2-6.9 4.9-8.9Zm0 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
      />
      <path d="M10.3 20.1h3.4l-1.1 1.85a.7.7 0 0 1-1.2 0L10.3 20.1Z" />
    </svg>
  );
}

export function ShieldCheckIcon(props) {
  return (
    <svg {...base} {...props}>
      <path
        fillRule="evenodd"
        d="M12 2.1 4.5 5v6.4c0 4.4 3.05 8.5 7.5 10.5 4.45-2 7.5-6.1 7.5-10.5V5L12 2.1Zm3.75 6.63a1.05 1.05 0 0 1 .12 1.48l-4.3 4.9a1.05 1.05 0 0 1-1.55.03l-2.2-2.3a1.05 1.05 0 1 1 1.52-1.45l1.4 1.47 3.53-4.02a1.05 1.05 0 0 1 1.48-.09Z"
      />
    </svg>
  );
}
