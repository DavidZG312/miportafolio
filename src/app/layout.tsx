import '../styles/globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/hooks/useTheme'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'David Zabala Granados',
  description: 'Portafolio de David Zabala Granados, desarrollador Front-end especializado en React y Next.js.',
  applicationName: 'Mi Portafolio',
  metadataBase: new URL('https://example.com'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'David Zabala Granados',
    description: 'Portafolio de proyectos y habilidades en desarrollo Front-end.',
    url: 'https://example.com/',
    siteName: 'Mi Portafolio',
    images: [{ url: '/img/FOTO CARA.jpg', width: 1200, height: 630, alt: 'Perfil de David Zabala Granados' }],
    locale: 'es_ES',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'David Zabala Granados',
    description: 'Portafolio de proyectos y habilidades en desarrollo Front-end.',
    images: ['/img/FOTO CARA.jpg']
  },
  icons: {
    icon: '/img/FOTO CARA.jpg',
    shortcut: '/img/FOTO CARA.jpg',
    apple: '/img/FOTO CARA.jpg'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <ThemeProvider>
        <body className={inter.className}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: 'David Zabala Granados',
                url: 'https://example.com/',
                jobTitle: 'Desarrollador Front-end',
                sameAs: [
                  'https://www.linkedin.com',
                  'https://github.com'
                ]
              })
            }}
          />
          {children}
        </body>
      </ThemeProvider>
    </html>
  )
}
