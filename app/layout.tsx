import "./scss/style.scss";
import localFont from 'next/font/local'
import Header from "./ui/header";
import Cart from "./ui/cart";

const GTEestiProText = localFont(
  {
    src: [
      {
        path: './fonts/EestiRegular.otf',
        weight: '500',
        style: 'normal',
      },
      {
        path: './fonts/EestiBold.otf',
        weight: '700',
        style: 'normal',
      }
    ]
  }
)

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous">
        </link>

        <title>O-ZONE GLO ACADEMY</title>
      </head>

      <body className={GTEestiProText.className}>

        <Header />

        <main>
          {children}
        </main>

        <Cart />
      </body>
    </html>
  );
}
