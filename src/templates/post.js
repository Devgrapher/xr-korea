import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import get from 'lodash/get';
import Img from 'gatsby-image';
import moment from 'moment';
import Layout from '../components/layout';
import styled from 'styled-components';

const TitleDiv = styled.div`
  width: 100%;
  min-height: 4rem;
  margin-bottom: 9px;
  padding: 2rem;
  text-align: center;
  background-color: #ffc11e;
`;

const ContentDiv = styled.div`
  max-width: 672px;
  background: '#fff';
  margin: 0 auto;
  padding: 0.5rem;
  @media (min-width: 700px) {
    padding: 0;
  }
`;

const HeroDiv = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

const HeroImage = styled(Img)`
  /*
    Ensure golden ratio for the hero size while limiting it to some extend to
    the viewport width
  */
  height: 61.8vh;
  max-height: 400px;
`;

const Date = styled.div`
  font-weight: bold;
`;

const Remark = styled.div`
  text-align: justify;
  @media (min-width: 650px) {
    word-break: keep-all;
    text-align: justify;
  }
`;

const formatDT = (dt) => moment(dt).local().format(`YYYY년 MM월 DD일`);
class PostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulPost');
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');

    return (
      <Layout location={this.props.location}>
        <Helmet title={`${post.title} | ${siteTitle}`} />
        <TitleDiv>
          <h1>{post.title}</h1>
          <Date>{formatDT(post.publishDate)}</Date>
        </TitleDiv>
        <ContentDiv>
          <HeroDiv>
            <HeroImage
              alt={post.title}
              fluid={post.heroImage.fluid}
            />
          </HeroDiv>
          <Remark
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        </ContentDiv>
      </Layout>
    );
  }
}

export default PostTemplate;

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPost(slug: { eq: $slug }) {
      title
      publishDate
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
