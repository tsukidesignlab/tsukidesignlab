import { Container } from './Container';

export function Nav({ brand }: { brand: { nameZh: string; nameEn: string } }) {
  return (
    <header className="sticky top-0 z-30 border-b border-black/5 bg-cream-50/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-semibold">{brand.nameZh}</span>
            <span className="hidden text-xs text-ink-700/70 sm:inline">{brand.nameEn}</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-ink-700/80 sm:flex">
            <a className="hover:text-ink-800" href="#product">產品</a>
            <a className="hover:text-ink-800" href="#why">理念</a>
            <a className="hover:text-ink-800" href="#for">適合誰</a>
            <a className="hover:text-ink-800" href="#contact">聯絡</a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
