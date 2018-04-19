import Layout from '../components/Layout.js'
import fetch from 'isomorphic-unfetch'


const Content = (props) => (
  <div>
    <h1>{props.url.query.title}</h1>
    <p>Este es el contenido del post.</p>
  </div>
)

export default (props) => (
  <Layout> 
    <Content url = {props.url}/>
  </Layout> 
)
