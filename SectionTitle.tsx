export function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {subtitle ? (
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-700/80 sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
