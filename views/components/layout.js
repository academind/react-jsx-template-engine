import Header from './header.js';

export default function Layout({ children, title = 'React Template Engine' }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="stylesheet" href="/main.css" />
        <script src="/htmx.js" defer></script>
      </head>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
