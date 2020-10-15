import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/title"
import Content from "../components/content"
import CallToAction from "../components/cta"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Title />
    <Content />
    <CallToAction />
  </Layout>
)

export default IndexPage
