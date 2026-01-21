
export const metadata = {
  title: "茲奇製研所 Tsuki Design & Innovation Lab",
  description: "持續創造的設計研究所｜StellarVision 兒童視覺訓練教具"
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body style={{ margin: 0, fontFamily: "Inter, system-ui" }}>
        {children}
      </body>
    </html>
  );
}
