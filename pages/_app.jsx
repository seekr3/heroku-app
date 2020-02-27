import 'styled-jsx/style'
import Layout from '../layout/layout'

export default ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
