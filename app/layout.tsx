// app/layout.tsx
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Navbar from './components/Navbar';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Farmly - Support',
  description:
    'Farmly: Réservez localement et découvrez nos options de support.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar /> {/* Ajouter la navbar ici */}
          <main className="flex-grow container mx-auto p-4">{children}</main>
          <footer className="bg-gray-100 dark:bg-gray-800 text-center py-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; 2024 Farmly. Tous droits réservés.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
