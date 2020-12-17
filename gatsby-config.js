module.exports = {
  siteMetadata: {
    title: `멸종반란한국`,
    description: `Extinction Rebellion Korea`,
    author: `@fourpm`,
    siteUrl: `https://extinctionrebellion.kr`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-glamor`,
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `41373805581`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `xehp2mql95m5`,
        accessToken: `6hLpDrbovxzH7D9IcEwnzVNxo7C1dFg-jeBghFPTSSY`,
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `G-MC7WLW20WJ`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
  ],
};
