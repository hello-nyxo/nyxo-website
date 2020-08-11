require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Nyxo`,
    description: `Personalized sleep coaching that works`,
    author: `@helloNyxo`,
    siteUrl: `https://nyxo.app`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS,
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://nyxo.app`,
      },
    },
    "gatsby-plugin-slug",
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-preload-link-crossorigin",
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `hellonyxo`,
        access_token: process.env.INSTAGRAM_API_TOKEN,
        instagram_id: process.env.INSTAGRAM_BUSINES_ID,
      },
    },
    {
      resolve: "gatsby-plugin-no-sourcemaps",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/terms`,
        name: `terms`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/privacy`,
        name: `privacy`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            showLineNumbers: false,
            inlineCodeMarker: { typescript: "tsx" },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nyxo website`,
        short_name: `Nyxo`,
        start_url: `/`,
        background_color: `#F4F5F9`,
        theme_color: `#4a5aef`,
        display: `minimal-ui`,
        icon: `${__dirname}/static/images/icon.jpg`,
        cache_busting_mode: "none",
        prefer_related_applications: true,
        related_applications: [
          {
            platform: "play",
            id: "fi.nyxo.app",
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["300", "400", "500", "700"],
              fontDisplay: "swap",
            },
            {
              family: "Domine",
              variants: ["300", "400", "500"],
              fontDisplay: "swap",
            },
          ],
        },
        formats: ["woff2", "woff"],
        useMinify: true,
        usePreload: true,
        usePreconnect: false,
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        mergeSecurityHeaders: true,
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GTAG_ID,
        includeInDevelopment: true,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "en",
        useLangKeyLayout: false,
        prefixDefault: false,
      },
    },
    {
      resolve: `gatsby-remark-images-contentful`,
      options: {
        maxWidth: 600,
      },
    },
  ],
}
