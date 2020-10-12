import Link from 'next/link'
import Head from 'next/head'

export function MainLayout({ children, title }) {
  return (
    <>
      <Head>
        <title> {title} | GG </title>
        <meta name="keywords" content="next,javascript,nextjs,react" />
        <meta name="description" content="this is youtube tutorial for next" />
        <meta name="viewport" content=" initial-scale=1.0"/>
        <meta charSet="utf-8" />
      </Head>
      <main>
        {children}
      </main>
    </>
  )
}