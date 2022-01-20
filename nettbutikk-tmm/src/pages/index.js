import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    {console.log("IndexPage.render data", data)}
    </Layout>  
)

export default IndexPage

export const pageQuery = graphql`
 allStrapiProdukt {
    nodes {
      data {
        attributes {
          createdAt
          Beskrivelse
          Navn
          Gruppe
          Pris
          thumbnail {
            fixed(wide: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
}
`
