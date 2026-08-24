/**
 * Two-tone section heading: white lead text + gradient accent text.
 *
 * <SectionHeading lead="Where Creativity" accent="Meets Experience" />
 * <SectionHeading lead="Frequently Asked" accent="Questions" align="center" inline />
 * <SectionHeading lead="Where Imagination" accent="Becomes Dimension" inline accentClassName="from-violet-500 via-fuchsia-500 to-pink-500" />
 */
export default function SectionHeading({
  lead,
  accent,
  align = "left",
  inline = false,
  as: Tag = "h2",
  className = "",
  accentClassName = "from-violet-500 via-indigo-400 to-sky-400",
}) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <Tag
      className={`text-2xl font-normal leading-none tracking-wide text-white sm:text-4xl lg:text-5xl ${alignment} ${className}`}
    >
      {lead}
      {inline ? " " : <br />}
      <span className={`bg-linear-to-r ${accentClassName} bg-clip-text text-transparent`}>
        {accent}
      </span>
    </Tag>
  );
}
