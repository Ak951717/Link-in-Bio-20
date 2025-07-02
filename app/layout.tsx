import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Alex Morgan - Content Creator',
  description: 'Follow my journey as a content creator, lifestyle blogger, and digital entrepreneur. Find all my links and latest content here.',
  keywords: ['content creator', 'influencer', 'lifestyle', 'social media', 'instagram'],
  authors: [{ name: 'Alex Morgan' }],
  openGraph: {
    title: 'Alex Morgan - Content Creator',
    description: 'Follow my journey as a content creator, lifestyle blogger, and digital entrepreneur.',
    type: 'website',
    url: 'https://your-domain.com',
    images: [
      {
        url: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=800',
        width: 800,
        height: 600,
        alt: 'Alex Morgan - Content Creator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Morgan - Content Creator',
    description: 'Follow my journey as a content creator, lifestyle blogger, and digital entrepreneur.',
    images: ['https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=800'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}