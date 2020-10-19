import React from "react"

import styled from "styled-components"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const PostContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  }
  gap: 0.5rem;
  width: 100%;
  align-content: center
  justify-content: center;
  max-width: 60rem;
`

const Wrapper = styled.a`
  position: relative;
  overflow: hidden;
  width: 100%;
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
