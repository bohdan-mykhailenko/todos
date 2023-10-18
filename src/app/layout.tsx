import type { Metadata } from 'next';
import { ThemeRegistry } from '@/theme/themeRegistry';
import './globals.css';

export const metadata: Metadata = {
  title: 'Todos',
  description: 'Welcome to Todos app!',
  keywords: ['Todo', 'Next', 'React'],
};

const bodyStyles = {
  // color: 'rgb(var(--foreground-rgb))',
  // background: '--var(background-end-rgb)',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body suppressHydrationWarning={true}>
        <ThemeRegistry options={{ key: 'mui' }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
