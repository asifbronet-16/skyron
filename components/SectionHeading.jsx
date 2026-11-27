/**
 * Two-tone section heading: white lead text + gradient accent text.
 *
 * Either pass the copy whole and let it split in two at the middle word:
 * <SectionHeading text="What we create in 3D" />            → "What we" + "create in 3D"
 * or choose the split yourself:
 * <SectionHeading lead="Where Creativity" accent="Meets Experience" />
 * <SectionHeading lead="Frequently Asked" accent="Questions" align="center" inline />
 *
 * `size="md"` is the smaller scale for headings inside a page's body.
 */
export function splitHeading(text) {
  const words = text.trim().split(/\s+/);
  if (words.length < 2) return { lead: "", accent: text };
  const cut = Math.floor(words.length / 2);
  return { lead: words.slice(0, cut).join(" "), accent: words.slice(cut).join(" ") };
}

const SIZES = {
  lg: "text-2xl leading-none sm:text-4xl lg:text-5xl",
  md: "text-2xl leading-tight sm:text-3xl lg:text-4xl",
};

export default function SectionHeading({
  text,
  lead,
  accent,
  align = "left",
  inline = false,
  size = "lg",
  as: Tag = "h2",
  className = "",
  accentClassName = "from-violet-500 via-indigo-400 to-sky-400",
}) {
  const alignment = align === "center" ? "text-center" : "text-left";
  const parts = text ? splitHeading(text) : { lead, accent };

  return (
    <Tag className={`font-normal tracking-wide text-white ${SIZES[size] ?? SIZES.lg} ${alignment} ${className}`}>
      {parts.lead && (
        <>
          {parts.lead}
          {/* The space keeps the words apart in the page text (search engines,
              screen readers): a bare <br /> reads as "CreativeSolutions". */}
          {" "}
          {!inline && <br />}
        </>
      )}
      <span className={`bg-linear-to-r ${accentClassName} bg-clip-text text-transparent`}>{parts.accent}</span>
    </Tag>
  );
}
