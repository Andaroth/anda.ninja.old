import { Head, BlitzLayout } from "blitz"

const Layout: BlitzLayout<{ title?: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title || "axel"}</title>
        <link rel="icon" href="./img/fav.gif" />
      </Head>

      {children}
    </>
  )
}

export default Layout
