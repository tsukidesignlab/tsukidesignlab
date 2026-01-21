import React from 'react';

export function Footer({
  brand,
  email,
  instagram
}: {
  brand: string;
  email: string;
  instagram: string;
}) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-black/5 py-10">
      <div className="container-pad flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-slate-600">
          © {year} {brand}. All rights reserved.
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <a className="text-slate-700 hover:text-slate-900" href={`mailto:${email}`}>
            {email}
          </a>
          <span className="text-slate-300">•</span>
          <a
            className="text-slate-700 hover:text-slate-900"
            href={`https://www.instagram.com/${instagram.replace('@', '')}`}
            target="_blank"
            rel="noreferrer"
          >
            {instagram}
          </a>
        </div>
      </div>
    </footer>
  );
}
