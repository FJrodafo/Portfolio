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
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>FJrodafo</title>
        <meta name='description' content='Full-Stack web application developer, musician, trumpeter and pianist from the Canary Islands.' />
        <meta name='author' content='Francisco José Rodríguez Afonso' />
        <meta name='keywords' content='fjrodafo, website, portfolio, developer, vercel, next, nextjs, javascript' />
        <meta name='robots' content='index, follow' />
        <meta name='googlebot' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
        <meta property='og:title' content='Francisco José Rodríguez Afonso | FJrodafo' />
        <meta property='og:description' content='Full-Stack web application developer, musician, trumpeter and pianist from the Canary Islands.' />
        <meta property='og:url' content='https://fjrodafo-portfolio.vercel.app/' />
        <meta property='og:site_name' content="FJrodafo's Portfolio" />
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='https://avatars.githubusercontent.com/u/126250262?v=4' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='1200' />
        <meta property='og:image:alt' content="FJrodafo's Avatar" />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content='Francisco José Rodríguez Afonso | FJrodafo' />
        <meta name='twitter:description' content='Full-Stack web application developer, musician, trumpeter and pianist from the Canary Islands.' />
        <meta name='twitter:creator' content='@fjrodafo' />
        <meta name='twitter:image' content='https://avatars.githubusercontent.com/u/126250262?v=4' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='stylesheet' href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' />
        <link rel='stylesheet' href='https://unicons.iconscout.com/release/v4.0.0/css/line.css' />
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id='root'>{children}</div>
      </body>
    </html>
  );
};
