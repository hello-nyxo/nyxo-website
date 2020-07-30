---
slug: "gatsby-netlify-amplify-part-3"
date: "2020-07-02"
title: "Part 3: Using Contentful with Gatsby"
authorSlug: "kayla-gordon"
author: Kayla Gordon
tags: ["Contentful", "Gatsby"]
thumbnailBlog: "./Contentful-Gatsby.jpg"
---

## What is Contentful?

Contentful is a content management tool. Contentful describes itself as a platform where you can update the content of your website, a mobile app, or any other platform that displays content. They save you the time and hassle to create your own backend to manage the content, and provide many tools which make it easier to actually generate a website or app.

Still want to learn more about Contentful? Check out their [website](https://www.contentful.com/faq/about-contentful/).

## How Nyxo uses Contentful

At Nyxo, we find Contentful to be a very powerful tool. One example of the Contentful content we use on our website is our [Sleep Coaching](https://nyxo.app/coaching) content. Through Contentful, we draft our Weekly lessons and Habits.

## Assumptions

This guide assumes that you already have:

1. an existing Contentful account. If you don’t, please get one and then continue with this guide and
2. an existing Gatsby project.

## Packages Needed

You'll need the Contentful plugin from Gatsby:

`npm install --save gatsby-source-contentful`

## How to Use

To use the plugin, you’ll need your Contentful API keys. Here is how you get them.

1. Log into your Contentful account and click Settings.
2. From there, choose API Keys.
3. Select the project you want the API keys for.

You’ll be on the page containing your Access tokens. On this page you will find the necessary API keys.

In your `gatsby-config.js` file, we need to set up the `gatsby-source-contentful` plugin. So add this code to your file.

```javascript
// gatsby-config.js
plugins: [
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `your_space_id`,
      accessToken: `your_content_delivery_api_key`,
    },
  },
]
```

Now you are all set up. Let’s run the development server to see if everything still runs.

`gatsby develop`

**It works!** 🎉

To see your Contentful content, go to `http://localhost:8000/__graphql` in your browser. Your Contentful data should be there.

Now you are all set up to play with your Contentful queries!

For more information about the gatsby-source-contentful plugin, please look [here](https://www.gatsbyjs.org/packages/gatsby-source-contentful/).

## Creating Pages that Use the Contentful Data

If you want to create pages that involve your Contentful data, make sure to add any GraphQL queries to your `gatsby-node.js` file. From there you can use the query data in your `createPage` function.

## Summary

In this tutorial, you learned about the Contentful and what it is. You also learned about the Gatsby plugin for Contentful, how to access your Contentful API data, configure the Gatsby plugin, and see your Contentful data amongst the list of GraphQL queries.

Contentful is a powerful tool. Now you can use it in Gatsby!
