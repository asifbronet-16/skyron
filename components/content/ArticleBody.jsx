import Link from "next/link";
import RichText from "@/components/RichText";
import { ChevronRight } from "@/components/icons";

/**
 * Long-form text (an Insights post, a legal page) from a list of
 * ArticleNodes (constants/types.ts), in a single reading column.
 */
export default function ArticleBody({ nodes = [] }) {
  return (
    <div className="text-[15px] leading-relaxed text-white/70 sm:text-base">
      {nodes.map((node, i) => {
        if ("h2" in node) {
          return (
            <h2 key={i} className="mt-12 text-2xl font-normal leading-tight text-white sm:text-3xl">
              {node.h2}
            </h2>
          );
        }
        if ("h3" in node) {
          return (
            <h3 key={i} className="mt-8 text-lg font-semibold leading-snug text-white">
              {node.h3}
            </h3>
          );
        }
        if ("p" in node) {
          return (
            <p key={i} className="mt-4">
              <RichText text={node.p} />
            </p>
          );
        }
        if ("ul" in node || "ol" in node) {
          const ordered = "ol" in node;
          const List = ordered ? "ol" : "ul";
          return (
            <List key={i} className={`mt-4 space-y-2 pl-5 ${ordered ? "list-decimal" : "list-disc"} marker:text-violet-400`}>
              {(ordered ? node.ol : node.ul).map((item, n) => (
                <li key={n} className="pl-1">
                  <RichText text={item} />
                </li>
              ))}
            </List>
          );
        }
        if ("table" in node) {
          const { columns, rows, caption } = node.table;
          return (
            <figure key={i} className="mt-6">
              <div className="overflow-x-auto rounded-xl border border-white/10 bg-white/2">
                <table className="w-full min-w-140 text-left text-sm">
                  <thead className="bg-white/5">
                    <tr>
                      {columns.map((column, c) => (
                        <th key={c} scope="col" className="px-4 py-3 font-semibold text-white">
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map(([first, ...rest]) => (
                      <tr key={first} className="border-t border-white/8 align-top">
                        <th scope="row" className="px-4 py-3 font-medium text-white/90">
                          {first}
                        </th>
                        {rest.map((cell, c) => (
                          <td key={c} className="px-4 py-3 text-white/65">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {caption && <figcaption className="mt-3 text-sm italic text-white/45">{caption}</figcaption>}
            </figure>
          );
        }
        if ("note" in node) {
          return (
            <p key={i} className="mt-4 text-sm italic text-white/45">
              {node.note}
            </p>
          );
        }
        if ("button" in node) {
          return (
            <p key={i} className="mt-8">
              <Link
                href={node.button.href}
                className="inline-flex items-center gap-3 rounded-full bg-[linear-gradient(90deg,#9B1FA8_0%,#7B2C9E_35%,#2A7F92_100%)] py-2 pl-7 pr-2 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
              >
                {node.button.label}
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                  <ChevronRight className="h-4 w-4" strokeWidth={2.2} />
                </span>
              </Link>
            </p>
          );
        }
        return null;
      })}
    </div>
  );
}
