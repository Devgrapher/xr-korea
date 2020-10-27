import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Title from "../components/title";
import Content from "../components/content";

const SEO_KEWORDS = ["멸종저항", "extinction rebellion", "기후변화", "기후위기", "비폭력시민불복종운동", "사회운동", "기후위기비상행동"];

const IndexPage = () => (
  <Layout>
    <SEO keywords={SEO_KEWORDS}/>
    <Title />
    <Content />
  </Layout>
);

export default IndexPage;
