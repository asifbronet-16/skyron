/**
 * Two-tone section heading: white lead text + gradient accent text.
 *
 * <SectionHeading lead="Where Creativity" accent="Meets Experience" />
 * <SectionHeading lead="Frequently Asked" accent="Questions" align="center" inline />
 */
export default function SectionHeading({
  lead,
  accent,
  align = "left",
  inline = false,
  as: Tag = "h2",
  className = "",
}) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <Tag
      className={`text-2xl font-normal leading-none tracking-wide text-white sm:text-4xl lg:text-5xl ${alignment} ${className}`}
    >
      {lead}
      {inline ? " " : <br />}
      <span className="bg-linear-to-r from-violet-500 via-indigo-400 to-sky-400 bg-clip-text text-transparent">
        {accent}
      </span>
    </Tag>
  );
}
