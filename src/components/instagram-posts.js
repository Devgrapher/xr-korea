import React from "react"

import styled from "styled-components"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const PostContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  max-width: 60rem;
`

const Wrapper = styled.a`
  position: relative;
  overflow: hidden;
  width: 100vw;
  max-width: 14rem;
  padding: 0.2rem 0.2rem;
`

const Node = ({ node }) => (
  <Wrapper plain href={`https://www.instagram.com/p/${node.id}/`}>
    <Img fluid={node.localFile.childImageSharp.fluid} />
  </Wrapper>
)

const InstagramPosts = () => {
  return <StaticQuery
    query={graphql`
      query {
        allInstaNode(sort: {fields: id, order: DESC}, limit: 12) {
          edges {
            node {
              id
              localFile {
                childImageSharp {
                  fluid(quality: 70, maxWidth: 600, maxHeight: 600) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <PostContainer>
        {data.allInstaNode.edges.map(instagram => (
          <Node key={instagram.node.id} node={instagram.node} />
        ))
        }
      </PostContainer>
    )}
  >

  </StaticQuery>
}

export default InstagramPosts;
