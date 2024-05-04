import Head from "next/head"



const Layout = ({title, keywords, description, children}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description}/> 
        <meta name='keywords' content={keywords}/> 
      </Head>   

      {children}
    </div>
  )
}

Layout.defaultProps = {
  title: 'DJ Events',
  description: 'Find the latest musical events',
  keywords: 'music, dj, edm, events'
}

export default Layout