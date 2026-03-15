export const metadata = {
  metadataBase: new URL('https://fjrodafo-portfolio.vercel.app/'),
  title: {
    default: 'Francisco José Rodríguez Afonso',
    template: '%s | FJrodafo',
  },
  applicationName: "FJrodafo's Portfolio",
  authors: [
    {
      name: 'Francisco José Rodríguez Afonso',
      url: 'https://fjrodafo-portfolio.vercel.app/',
    },
  ],
  creator: 'Francisco José Rodríguez Afonso',
  publisher: 'Francisco José Rodríguez Afonso',
  description: 'Full-Stack web application developer, musician, trumpeter and pianist from the Canary Islands.',
  keywords: [
    'fjrodafo',
    'website',
    'portfolio',
    'developer',
    'vercel',
    'next',
    'nextjs',
    'javascript',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Francisco José Rodríguez Afonso | FJrodafo',
    description: 'Full-Stack web application developer, musician, trumpeter and pianist from the Canary Islands.',
    url: 'https://fjrodafo-portfolio.vercel.app/',
    siteName: "FJrodafo's Portfolio",
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://avatars.githubusercontent.com/u/126250262?v=4',
        width: 1200,
        height: 1200,
        alt: "FJrodafo's Avatar",
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Francisco José Rodríguez Afonso | FJrodafo',
    description: 'Full-Stack web application developer, musician, trumpeter and pianist from the Canary Islands.',
    creator: '@fjrodafo',
    images: ['https://avatars.githubusercontent.com/u/126250262?v=4'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div id='root'>{children}</div>
      </body>
    </html>
  );
};
