/**
 * A JSON-LD <script> (structured data from lib/schema.ts). `<` is escaped so
 * text inside the data can never close the script tag early.
 *
 * <JsonLd data={siteGraph()} />
 */
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
