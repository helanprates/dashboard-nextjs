import '@/app/ui/global.css'
import {inter, lusitana} from '@/app/ui/fonts'
import '@/app/ui/home.modules.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
