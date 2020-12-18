module.exports = {
  siteMetadata: {
    title: `멸종반란한국`,
    description: `Extinction Rebellion Korea`,
    author: `@fourpm`,
    siteUrl: `https://extinctionrebellion.kr`,
    menuLinks: [
      {
        name: '소식',
        link: '/post'
      },
      {
        name: '언론보도',
        link: 'https://www.notion.so/bf0a84fb63014eef9feb9bc0771c87a8?v=bc7a835e5baf49a3896d037a3d77e4ca',
        external: true,
      },
      {
        name: '활동',
        link: '/#instagram',
      },
      {
        name: '참여하기',
        link: '/#join-us',
      }
    ]
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
