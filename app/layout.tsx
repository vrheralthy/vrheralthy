import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VREasyHealthy | เริ่มดูแลสุขภาพให้ถูกจุด',
  description: 'แบบประเมินสุขภาพเบื้องต้น 2 นาที เพื่อค้นหาจุดเริ่มต้นที่เหมาะกับคุณ',
  openGraph: { title: 'VREasyHealthy | เริ่มดูแลสุขภาพให้ถูกจุด', description: 'แบบประเมินสั้น ๆ เพื่อค้นหาจุดเริ่มต้นที่ทำได้จริง', type: 'website' },
};

export default function RootLayout({children}:{children:React.ReactNode}){ return <html lang="th"><body>{children}</body></html> }
