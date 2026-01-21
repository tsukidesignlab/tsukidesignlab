import React from 'react';

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-14 sm:py-16">
      <div className="container-pad">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-sm font-semibold tracking-wide text-sky-700">{eyebrow}</p>
          ) : null}
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">{title}</h2>
          {subtitle ? (
            <p className="mt-3 text-base leading-relaxed text-slate-600">{subtitle}</p>
          ) : null}
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
