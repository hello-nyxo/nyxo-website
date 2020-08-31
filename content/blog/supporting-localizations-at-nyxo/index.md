---
slug: "supporting-localizations-at-nyxo"
date: "2020-08-13"
title: Nyxo.app Now Available in Both Finnish and English
authorSlug: "perttu-lahteenlahti"
author: Perttu Lähteenlahti
tags: ["Company", "Open Source", "JAM Stack"]
thumbnailBlog: "./cover.jpeg"
---

Starting today, all of the materials we've produced about sleep, such as the lesson and exercises, are available in Finnish and English. We've supported both of the two aforementioned languages in the Nyxo mobile app since the beginning. Still, our website has mostly been in English. However, starting from today, you can easily change the language in the top navigation. In addition to this, we are now capable of supporting additional languages as well, and you can contribute to the translation in our repository.

There are a few things we hope to accomplish with this:

1. Better support for our Finnish customers. Our biggest market is still Finland; for a reason, we see that it is crucial to provide support and coaching materials in that language.
2. Better SEO performance. We hope that finally, supporting two languages throughout the site will boost our search engine position.
3. Open the way for more translations. Now that our source is open, everyone is welcome to provide additional languages, and we can also commission new languages if a certain market it requires. One example of this is supporting Swedish, the second official language here in Finland.

Before going into details on how the additional languages where implemented, I want to thank Pietari Nurmi and Kayla Gordon for translating and fixing the existing translations.

## Technical Aspects When Converting to a Multi-language Page

The nyxo.app site has been built using [GatsbyJS](http://gatsbyjs.org/), a static site generator. We've written previously about using Gatsby in our blog, and overall find it a very exciting piece of technology to work with. However, localization with Gatsby is not the easiest thing to achieve, and we have tried to do it previously, but the amount of work has just been too much for the benefit.

This time we decided to try it again after coming across [gatsby-plugin-react-i18next](https://github.com/microapps/gatsby-plugin-react-i18next). Using it made the whole localization project almost painless (we did have some problems with getting it to play nicely with the pages created using our content management service). What makes this plugin different from other Gatsby plugins is that it uses react-i18next, which is most likely one of the best options for handling localization.

Our site uses this plugin, with JSON translation files to translate all the UI texts, such as the ones appearing inside buttons, and on most pages which are coaching lessons or exercises. Our sleep coaching materials are fetched from Contentful, and then using the custom page creation function, we create individual pages for all languages. Currently, this means that Gatsby generates close to 500 pages, 250 in each of the currently supported languages. Adding for example, two more languages will massively increase the amount of generates pages. However, as long as the amount of generated pages stays under 10k, all should be good. Over that, we will most likely need to start considering an alternative solution.

We will most likely write a more detailed guide on how you can do this yourself, but in the meantime, you can peek at the code in our repository.

### Still to come

There are still some things missing as well. For example, blog posts are currently only available in one language and don't even support multiple versions of the content. There might also be some missing translation around the site, due to the number of unique pages we have. If you notice something, you can open a ticket in our repository.
