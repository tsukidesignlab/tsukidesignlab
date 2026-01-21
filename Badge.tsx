export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-cream-100 px-3 py-1 text-xs font-medium text-ink-700 ring-1 ring-black/5">
      {children}
    </span>
  );
}
