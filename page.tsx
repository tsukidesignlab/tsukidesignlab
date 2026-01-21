import Image from 'next/image';
import site from '../content/site.json';
import { Navbar } from '../components/Navbar';
import { Section } from '../components/Section';
import { Footer } from '../components/Footer';

function Badge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-black/10">
      {text}
    </span>
  );
}

function Card({
  title,
  body
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl bg-white/75 p-6 ring-1 ring-black/10 shadow-sm">
      <h3 className="text-base font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{body}</p>
    </div>
  );
}

export default function Page() {
  const { brand, product, social, contact } = site as any;

  return (
    <main className="min-h-screen">
      <Navbar brand={brand.name_zh} ctaLabel="填問卷" />

      {/* Hero */}
      <section id="home" className="pt-10 sm:pt-14">
        <div className="container-pad">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge text={brand.tagline} />
                <Badge text={`適用年齡 ${product.age}`} />
                <Badge text={product.stage} />
              </div>

              <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
                {product.name}
                <span className="text-slate-700">{product.hero_subtitle}</span>
              </h1>
              <p className="mt-4 text-base text-slate-700 leading-relaxed max-w-xl">
                {product.hero_description}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={product.survey_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90"
                >
                  先填 2–3 分鐘問卷
                </a>
                <a
                  href={product.instagram_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-white/70 px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-black/10 hover:bg-white"
                >
                  追蹤 IG 看進度
                </a>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {product.selling_points.map((sp: string) => (
                  <div
                    key={sp}
                    className="rounded-2xl bg-white/65 p-4 ring-1 ring-black/10"
                  >
                    <p className="text-sm font-semibold leading-relaxed">{sp}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-xs text-slate-500 leading-relaxed">
                * 我們是教具/玩具導向的健康教育設計，非醫療診斷或治療。
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.25rem] bg-gradient-to-br from-orange-100 via-white to-sky-100 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] bg-white/70 ring-1 ring-black/10 shadow-lg">
                <Image
                  src="/images/hero.jpg"
                  alt="StellarVision product"
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product */}
      <Section id="product" eyebrow="產品介紹" title={product.name_full} subtitle={product.one_liner}>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <Card title="家長最痛" body={product.pain_points.join('、')} />
          <Card title="我們怎麼解" body={product.differences.join('、')} />
          <Card title="你會得到" body={product.outcomes.join('、')} />
        </div>
      </Section>

      {/* Who */}
      <Section id="who" eyebrow="適合誰" title="誰會用到 StellarVision？" subtitle="我們把『玩』變成一種更好的日常練習。">
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {product.audiences.map((a: any) => (
            <div key={a.title} className="rounded-2xl bg-white/75 p-6 ring-1 ring-black/10">
              <h3 className="text-base font-semibold">{a.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Social */}
      <Section id="social" eyebrow="社群" title="想看我們的日常進度？" subtitle="IG 會更新：測試片段、活動消息、以及設計迭代。">
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={social.instagram_url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-white/70 px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-black/10 hover:bg-white"
          >
            @{social.instagram_handle}
          </a>
          <span className="text-sm text-slate-600">
            也歡迎把問卷轉分享給幼兒園 / 國小老師或家長群組 🙏
          </span>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" eyebrow="聯絡我們" title="想合作或想更了解？" subtitle="我們回覆速度很快（通常 1–2 天內）。">
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-white/75 p-6 ring-1 ring-black/10">
            <h3 className="text-base font-semibold">Email</h3>
            <p className="mt-2 text-sm text-slate-600">{contact.email}</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${contact.email}?subject=${encodeURIComponent('StellarVision 合作 / 詢問')}`}
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90"
              >
                直接寄信
              </a>
              <a
                href={product.survey_url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-white/70 px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-black/10 hover:bg-white"
              >
                先填問卷
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-white/75 p-6 ring-1 ring-black/10">
            <h3 className="text-base font-semibold">合作方向</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 leading-relaxed">
              {contact.collab_topics.map((t: string) => (
                <li key={t} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900/70" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-slate-500 leading-relaxed">
              {contact.disclaimer}
            </p>
          </div>
        </div>
      </Section>

      <Footer brand={brand.name_zh} email={contact.email} instagram={social.instagram_url} />
    </main>
  );
}
