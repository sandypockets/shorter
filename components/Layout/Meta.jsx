import Head from 'next/head'

// Favicon should be recreated at various sizes for each link below.
export default function Meta() {
  return (
    <Head>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet"
      />

      {/*<link*/}
      {/*  rel="apple-touch-icon"*/}
      {/*  sizes="180x180"*/}
      {/*  href="/favicon/favicon.ico"*/}
      {/*/>*/}
      {/*<link*/}
      {/*  rel="icon"*/}
      {/*  type="image/png"*/}
      {/*  sizes="32x32"*/}
      {/*  href="/favicon/favicon.ico"*/}
      {/*/>*/}
      {/*<link*/}
      {/*  rel="icon"*/}
      {/*  type="image/png"*/}
      {/*  sizes="16x16"*/}
      {/*  href="/favicon/favicon.ico"*/}
      {/*/>*/}
      {/*<link*/}
      {/*  rel="mask-icon"*/}
      {/*  href="/favicon/favicon.ico"*/}
      {/*  color="#000000"*/}
      {/*/>*/}
      {/*<link */}
      {/*  rel="shortcut icon"*/}
      {/*  href="/favicon/favicon.ico"*/}
      {/*/>*/}

      <meta
        name="theme-color"
        content="#000"
      />
      <title>Shorter | URL Shortener</title>
      <meta
        name="description"
        content={`URL Shortener. Forget long, ugly URLs. Share a shorter one instead.`}
      />

    </Head>
  )
}