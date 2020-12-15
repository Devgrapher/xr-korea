import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import PostPreview from '../components/post-preview';
import styled from 'styled-components';


const PostContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 9px;
  &:after {
    content: "";
    // flex: auto;
  }
`;

const PostItem = styled.div`
  flex-grow: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 4px;
  @media (min-width: 650px) {
    width: 50%;
  @media (min-width: 1200px) {
    width: 33.3%;
`;

class PostIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.allContentfulPost.edges');
    const bgColors = [
      ["#CEEBF8", "#75D0F1"],
      ["#FFC11F", "#D2970F"],
      ["#C2D081", "#97AB3F"],
      ["#DE7345", "#CD5825"],
      ["#748CBE", "#3860AA"],
      ["#FBB6CE", "#ED9BC4"],
      ["#A77FAD", "#906198"],
      ["#F4F07A", "#DED713"],
      ["#4EA648", "#438E3E"],
    ];

    return (
      <Layout>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <PostContainer>
            {posts.map(({ node}, i) => {
              const colorPair = bgColors[i % bgColors.length];
              return (
                <PostItem>
                  <PostPreview post={node} primaryColor={colorPair[0]} secondaryColor={colorPair[1]}  />
                </PostItem>
              );
            })}
          </PostContainer>
        </div>
      </Layout>
    );
  }
}

export default PostIndex;

export const pageQuery = graphql`
  query PostIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
