/**
 * Shown on an unpublished page while it's previewed under `npm run dev`
 * (constants/drafts.ts). Production builds never render drafts at all.
 */
export default function DraftNotice({ children = "Draft: approved but not published. Only visible in development." }) {
  return (
    <p
      role="note"
      className="fixed bottom-4 left-1/2 z-60 -translate-x-1/2 rounded-full border border-amber-300/40 bg-amber-400/15 px-5 py-2 text-xs font-medium text-amber-100 backdrop-blur-md"
    >
      {children}
    </p>
  );
}
