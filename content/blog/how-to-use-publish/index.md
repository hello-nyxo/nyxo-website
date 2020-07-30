---
slug: "how-to-use-publish"
date: "2020-05-23"
title: "Static Sites in Swift: Getting Started With Publish"
authorSlug: "perttu-lahteenlahti"
author: Perttu Lähteenlahti
tags: ["Engineering", "Swift"]
canonical: "https://www.lahteenlahti.com/how-to-use-publish/"
thumbnailBlog: "./dev-cover.png"
---

A few days ago, I accidentally stumbled upon [Publish](https://github.com/JohnSundell/Publish), a static site generator that uses Swift as the language for building websites. Despite not being a Swift developer, I thought this sounded quite awesome. So I decided to try if the time I've spent playing around with SwiftUI could be enough to get up and running with a static site built with Swift.

### Why Use Swift and Publish?

Just because something is cool, does mean it's worth doing, and the same applies to building static websites with random languages. Now Swift is hardly a random language. Most people might know it as the "Apple's programming language", and building iOS and macOS apps is what it's mostly used for. However, a lot more has been accomplished with Swift in recent years, after Apple open sourced the language. One of these areas where there's quite a lot of Swift usage is server-side, and a lot of cool [server-side projects have already been built with Swift](https://github.com/Awesome-Server-Side-Swift/TheList).

Being a mostly React and React Native engineer, I'm not the best person to talk about why use Swift to build stuff, having used it so little myself and not knowing all the pros and cons of the language. But let's just say that even from an outsider's perspective, Swift is a pretty good programming language. It has the usual perks of being a modern language, meaning that it borrows a lot of concepts from existing languages which makes it easier to pick up. On top of that, it also seems to be quite a performant language ([based on this slightly old, slightly arbitrary benchmark](http://www.marcinkliks.pl/2015/02/22/swift-vs-others/))

What about Publish then? What makes it good? Looking at the repo and some of the examples sites built with it, it seems that Publish really excels in being quick to get started with, but still allowing you to tweak many things. The basic Publish setup for example comes with RSS, Markdown support, and sitemap, which the most important parts for building a static site. It also supports themes, which you write in Swift using something called [Plot](https://github.com/johnsundell/plot), an HTML theming engine from the same author as Publish.

## Installing the command line tools

Let's start by installing the command line tools by cloning the Publish repository and then running `make`:

```bash
$ git clone https://github.com/JohnSundell/Publish.git
$ cd Publish
$ make
```

If you're not that familiar with the `make` command, it's a part of Make build automation tool that automatically builds programs and libraries from the source code. In order to use make command you need to have Apple developer tools installed. You can install them by running :

```bash
$ xcode-select --install
```

You should now have the Publish command line tools installed.

## Creating a New Project With Publish

Let's continue out by making a new directory for our project, navigating to it, and then running publish new

```bash
$ mkdir swift.lahteenlahti.com
$ cd swift.lahteenlahti.com
$ publish new
```

After this a new Publish project will be initialized for you. You can open the Package.swift file in Xcode if you want to use that for development, or you can use something VS code. Let's look at what makes up our new static website:

```
|-- swift.lahteenlahti.com
|   |-- Content
|			|–– posts
|			|–– index.md
|   |-- Resources
|   |-- Sources
```

**Sources**  
In this folder you can find your project's main.swift file, which defines some of the basic properties of your website, such as name, language, URL and description. We are going to look at customizing your Publish site in a separate post, so let's leave this file untouched for now.

**Content**  
In the content folder you can find your content in markdown format.

**Resources**  
This folder is empty for now but is later used for theming the project. In the Publish repository you can see that it contains the default FoundationTheme's styles.css file.

## Building the Site

To turn all these files into a static website you need to build the project, which you can do by running the following command:

```bash
$ publish run
```

After this you see the Output folder being generated and Publish init a Simple PHP server to serve your site to localhost:8000. If you go that address, you should now see your site. Cool!

## Publishing to Netlify

One of the coolest things with static websites nowadays is how easy it is to publish them. Just put your code in Github or Gitlab repository, give Vercel or Netlify access to the repository, and done. I've been using both Netlify and Vercel (haven't yet had a chance to try Gatsby Cloud) to publish my sites, most of which have been built with Gatsby, and they support a variety of different static site generators. But how about something built with Swift?

You could always run the build command on your own computer, and make Netlify serve the already static stuff, but this would kind of defeat the purpose of using a deployment service such as Netlify. However, it turns out that [Netlify has support for Swift](https://github.com/netlify/build-image/pull/364). Let's make our static blog see the outside world by publishing it with Netlify.

First, signup for a Netlify account if you don't already have one, and next make a new Github or Gitlab repository and allow Netlify to use that. I would also add the Output folder to gitignore. After this you only have to configure the build settings:

- `Publish Directory` should be `Output`
- `Build Command` should be `swift run`

That's literally it! if you now go the URL provided by Netlify, you should soon see your blog post there.

## What's Next?

I'm personally trying to move towards more native development, so playing around Swift in a context that I'm more familiar with (web) is one way to build on top of existing knowledge. The Publish project we made in this quick tutorial is something I'm going to use to keep track of my upcoming 100daysofSwiftUI journey. In future articles, I'm going to look at how style your Publish blog, and how to add stuff like code snippets.

## Links

- [Publish](https://github.com/JohnSundell/Publish)
- [Netlify](https://netlify.com)
- [Swift](https://developer.apple.com/swift/)
- [My example repo](https://github.com/plahteenlahti/swifting)
