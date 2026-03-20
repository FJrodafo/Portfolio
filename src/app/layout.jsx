export const metadata = {
  metadataBase: new URL('https://fjrodafo-portfolio.vercel.app/'),
  applicationName: "FJrodafo's Portfolio",
  title: {
    default: 'FJrodafo (Francisco José Rodríguez Afonso)',
    template: '%s | Portfolio',
  },
  description: 'Full-Stack web application developer, musician, trumpeter and pianist from the Canary Islands.',
  creator: 'Francisco José Rodríguez Afonso',
  publisher: 'Francisco José Rodríguez Afonso',
  authors: [
    {
      name: 'Francisco José Rodríguez Afonso',
      url: 'https://fjrodafo-portfolio.vercel.app/',
    },
  ],
  keywords: [
    'fjrodafo',
    'website',
    'portfolio',
    'developer',
    'musician',
    'trumpeter',
    'pianist',
    'canary',
    'islands',
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
    locale: 'en_US',
    type: 'website',
    siteName: "FJrodafo's Portfolio",
    url: 'https://fjrodafo-portfolio.vercel.app/',
    title: {
      default: 'FJrodafo (Francisco José Rodríguez Afonso)',
      template: '%s | Portfolio',
    },
    description: 'Full-Stack web application developer, musician, trumpeter and pianist from the Canary Islands.',
    images: [
      {
        url: 'https://avatars.githubusercontent.com/u/126250262',
        width: 460,
        height: 460,
        alt: "FJrodafo's Avatar",
      },
    ],
  },
  twitter: {
    card: 'summary',
    creator: '@fjrodafo',
    title: {
      default: 'FJrodafo (Francisco José Rodríguez Afonso)',
      template: '%s | Portfolio',
    },
    description: 'Full-Stack web application developer, musician, trumpeter and pianist from the Canary Islands.',
    images: ['https://avatars.githubusercontent.com/u/126250262'],
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
      <body id='root'>{children}</body>
    </html>
  );
};
