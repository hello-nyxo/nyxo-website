---
slug: "gatsby-netlify-amplify-part-1"
date: "2020-03-30"
title: "Gatsby, Netlify and Amplify Part 1: The Basics"
authorSlug: "kayla-gordon"
author: Kayla Gordon
tags: ["Engineering"]
thumbnailBlog: "./Gatsby.png"
---

## Intro

“Angry, and half in love with her, and tremendously sorry, I turned away.” Oops, wrong Gatsby. If you’re like me, when I first heard of Gatsby, my first thought was _The Great Gatsby_ by F. Scott Fitzgerald. However the two are very different. In this post, you’ll learn about what Gatsby JS is, the querying language it uses (GraphQL), and a nice way to host your website for free with Netlify. So let’s dive in and learn about Gatsby JS.

This is the first part in a three part blog series on building products with Gatsby, Netlify and AWS Amplify. The future blog posts will cover topics such authentication and dynamic data fetching and handling.

## What is Gatsby JS?

Simply put, Gatsby is a static site generator. “What's that?”, you ask? The static site part of this means that Gatsby will produce static HTML files that will be loaded onto a server. This works differently than how a lot of websites work, where you visit a website and it has to query a database or do some programming on the server itself in order to serve your web pages. Gatsby breaks that convention and has all of the stuff pre-configured ahead of time, and just serves that up. It's important to point out that static sites do not mean they aren’t interactive or dynamic. We can load JavaScript into the HTML files that Gatsby serves, as well as, make API calls and build incredibly rich and immersive sites, as we’ve done with the Nyxo.app. While the Nyxo.app has been built on top of Gatsby, it still has things like authentication and fetching data from different data sources.

Let’s talk about some of the benefits of a static site. Speed, SEO, and security are some of the perks of using Gatsby. Not only are Gatsby sites made to be blazing fast, but they are very secure since there is no database or server. In addition, static sites improve your SEO since crawlers can find the content much easier. Speed is very important for a website. It’s so important that Google has made it an actual ranking factor. How about that?

Want to get started with Gatsby? We found a nice [tutorial](https://www.gatsbyjs.org/tutorial/) to get your Gatsby ball rolling.

## GraphQL

One of the great things about Gatsby is that it uses the GraphQL querying language to fetch data. GraphQL, if you're not familiar with it, is an evolution of how to make API calls simpler and more efficient, by allowing you to query only the things you need, as well filter and sort the results in the query itself. It's a really great tool that you're probably going to enjoy getting into, if you don't already know it. However, the more exciting part of this is that with GraphQL we can easily get our data into the Gatsby site from a multitude of different sources. We could use markdown files, access databases, we could even link to common CMSs, like WordPress and other headless CMS, or even a CSV file. Another data source GraphQL can use is the Contentful API, which powers the [Nyxo coaching material](https://nyxo.app/coaching).

Because we have Node running in our development environment, and we have GraphQL, we have a huge range of abilities of what we could do to pull data into Gatsby, as long we’re ok with only updating the data when the application builds. It is important to remember that Gatsby is not going to handle our data for us. Rather it will get that data pulled into Gatsby and generate the site from that data based on the generators we write for it.

Want to know more about GraphQL? We thought you might. Click [here](https://graphql.org/).

## Netlify

Netlify works great with Gatsby. Netlify CMS is an open-source content management system for your Git workflow. You can use it with Gatsby to create faster, more flexible web projects. Your project is stored in your Git repository for easier versioning, multi-channel publishing, and the option to handle content updates directly in Git.

Every time you push your code to Git, it builds in the Git repository and builds a preview branch, where you can share your latest work, live, with others. So when you have worked hard on that project and need to show your manager the latest changes, take that Netlify link and send it to them. They’ll see everything you just pushed to your Git repository.

Not to forget, with Netlify you can host your Gatsby website for free. Yep, for free. I won’t go into full details about Netlify. That could be a blog post on its own, but [here](https://www.gatsbyjs.org/docs/deploying-to-netlify/) is the documentation on getting started with Netlify and hosting your website. You’re welcome.

Want to read more about Netlify? Click [here](https://www.netlify.com/).

## Conclusion

This post introduced you to Gatsby JS, static websites and how beneficial they are, the GraphQL querying language, and Netlify’s many uses. The goal of this post is to introduce developers, of all levels, to the wonderful world of Gatsby JS and the services that complement it, like mashed potatoes and gravy, mac and cheese… you get the idea. For more information about the tech in this post, check out the links at the bottom of each section.

In the next post, I’ll discuss in more detail about Gatsby and how to add authentication into it with Amplify from Amazon Web Services (AWS).
