'use client';

import React from 'react';

const links = [
  { href: '#home', label: '首頁' },
  { href: '#product', label: '產品介紹' },
  { href: '#who', label: '適合誰' },
  { href: '#social', label: '社群' },
  { href: '#contact', label: '聯絡我們' }
];

export function Navbar({
  brand,
  ctaLabel
}: {
  brand: string;
  ctaLabel: string;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[var(--bg)]/85 backdrop-blur">
      <div className="container-pad flex items-center justify-between py-3">
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
            <span className="text-lg">🌙</span>
          </span>
          <div className="leading-tight">
            <div className="text-sm font-bold tracking-tight">{brand}</div>
            <div className="text-xs text-slate-500">Design · Experiment · Education</div>
          </div>
        </a>

        <nav className="hidden items-center gap-5 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
        >
          {ctaLabel}
        </a>
      </div>
    </header>
  );
}
