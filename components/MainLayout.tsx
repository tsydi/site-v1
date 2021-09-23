import Head from 'next/head'

interface ILayout {
  children: React.ReactNode;
  description: string;
  keywords: string;
  title: string;
}

export const MainLayout = ({ children, description, keywords, title } : ILayout) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="robots" content="index,follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <title>{title}</title>
      </Head>
      {children}
    </>
  )
}