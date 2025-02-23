export const metadata = {
  title: 'FJrodafo',
  author: 'Francisco José Rodríguez Afonso',
  description: 'Fullstack web application developer, musician, trumpeter and pianist from the Canary Islands.',
  keywords: 'fjrodafo, website, portfolio, cv, curriculum, vitae, linkedin, github, docker, dockerhub, node, nodejs, npm, npmjs, git, html, css, javascript, typescript, react, next, nextjs, vercel, about, contact, home, projects, qualification, services, skills, testimonials, translation, english, spanish, japanese, light, theme, dark, mode',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='author' content={metadata.author} />
        <meta name='description' content={metadata.description} />
        <meta name='keywords' content={metadata.keywords} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/126250262?v=4" />
        <meta property="og:url" content="https://fjrodafo.vercel.app/" />
        <title>{metadata.title}</title>
        <link rel='icon' href='/favicon.ico' />
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
