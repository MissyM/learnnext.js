import Layout from '../comps/Layout.js'

export default (props) => (
  <Layout> 
    <h1>{props.url.query.title}</h1>
    <p>Este es el contenido del blog post.</p>
  </Layout> 
)
