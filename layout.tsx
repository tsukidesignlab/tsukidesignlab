import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'StellarVision | 茲奇製研所',
  description: '以遊戲化教具，讓孩子在日常中訓練視覺專注、空間概念與手眼協調，遠離壞視力與過早 3C 依賴。'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body>
        {children}
      </body>
    </html>
  );
}
