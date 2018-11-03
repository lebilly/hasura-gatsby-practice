import React from 'react'
import { Link } from 'gatsby'
import Clarifai from 'clarifai'

import Layout from '../components/layout'
import Image from '../components/image'

const appClarifai = new Clarifai.App({
  apiKey: process.env.CLARIFAI_KEY,
})

appClarifai.models
  .predict(
    Clarifai.GENERAL_MODEL,
    'https://samples.clarifai.com/metro-north.jpg'
  )
  .then(
    function(response) {
      console.log(response)
    },
    function(err) {
      console.error(err)
    }
  )

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
      <div>
        <h1>My Authors </h1>
        {data.hasura.author.map(author => (
          <p key={author.id}>{author.name}</p>
        ))}
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export const query = graphql`
  query AuthorQuery {
    hasura {
      author {
        id
        name
      }
    }
  }
`

export default IndexPage
