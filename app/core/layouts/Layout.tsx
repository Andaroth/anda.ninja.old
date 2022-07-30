import { Head, BlitzLayout } from "blitz"

const Layout: BlitzLayout<{ title?: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => {
  const description = "Creator of incredible interfaces to make the web a wonderful world."
  return (
    <>
      <Head>
        <title>{title || "Andaroth"}</title>
        <link rel="icon" href="./img/fav.gif" />
        <meta property="og:image" content="./img/fav.gif" />
        <meta property="og:title" content={title || "Andaroth"} />
        <meta property="og:description" content={description} />
        <meta name="description" content={description} />

        <meta
          name="keywords"
          content="axel,fiolle,andaroth,developper,coder,blockchain,ethereum,crypto,btc,eth,web,designer,user,experience,interface,ui,ux,uxui,responsive,js,javascript,css,html,php,mysql,postgres,sql,node,nodejs,solidity"
        />

        <meta name="author" content="Axel Fiolle" />

        <meta name="msapplication-tooltip" content={description} />
        <meta name="msapplication-starturl" content="https://anda.ninja/" />

        <meta name="wot-verification" content="b6e6901e016c39508cad" />
      </Head>

      {children}
    </>
  )
}

export default Layout
