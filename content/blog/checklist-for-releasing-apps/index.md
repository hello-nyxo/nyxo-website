---
slug: "checklist-for-releasing-apps"
date: "2019-10-12"
title: Checklist for Releasing React Native apps
authorSlug: "perttu-lahteenlahti"
author: Perttu Lähteenlahti
tags: ["Engineering"]
canonical: "https://perttu.dev/posts/checklist-for-releasing-apps/"
thumbnailBlog: "./checklist.jpeg"
---

## Releasing to App store

Getting your mobile app published in the App Store is simple in theory but tedious in practice. During the past nine months, I've sent several versions of the Nyxo app to be reviewed by Apple. Almost every time Apple has rejected a new version of the app, it has been because of some minor thing. That is why I decided to write a checklist for releasing your app to the App Store. Many of the items on this checklist can be automated using, for example, Fastlane, something I will write a separate setup guide and checklist later.

## Before bundling the app

Increment the build number or number version
Because archiving the app takes some time, it's better to check this every time you start the archiving process.

- Check the app for crashes and bugs
  - Apple is, at times, very thorough in their app review. Check especially that your app works on iPad, even if you don't plan to support the device that is the device Apple uses for testing
- No broken links
  - If you're linking to content outside of your app, check that those links also work as Apple rarely checks them as well.
- Remove placeholder content
- Check that your app doesn't mention 'beta' or any other words that could signal that the app is incomplete
  - Apple is very strict about this. Remember to also check everything
- Check permissions
  - Check that your info.plist includes all the permissions your app requires.
- Check localizations and translations
  - Check that you're not missing any translation key/values. Apple only tests the English version

## Things to check in App Store Connect

- Check app name and localizations
  - Check this especially if you've recently changed the name of the app in App store in any way
- Check keywords and keyword localizations
  - It is good to update the keywords periodically, as it can potentially boost your App store search hits a lot.
- Check in-app purchase sections
  - Check the names and descriptions of your in-app purchases
  - If you're offering subscriptions, remember to check that your app description contains a mention of these and the prices; otherwise, Apple will reject your app
- Check that your screenshots are up to date
  - If you've updated the UI of your app, always update the App Store screenshots as well.
- Check you app description text
  - Pay attention to the "text above the fold." Because the user has to click to expand it to see the rest of it.
- Check that your update text is compelling
  - "What's new" is one of the first things users see when they open your app's product page, which is why it's essential to make it highlight all the new features you added in this release.

## After releasing the app

- Notify users that you've updated the app
  - I like to automate this part with IFTTT, which allows you to for example automatically tweet when the new version your app has been released
- Post to your channels and ask them to download/update to a new version of your app
  - Downloading the app can boost its position on Apple's chart, which is always good - Also don't be too shy to ask the people to know to rate your app, as it will improve its position in the Apple search
- Prepare for the next release
  - Ship early, ship often

These are the main things I check with every release. If you feel something should be included, leave a comment. You can also make you use of the checklist tool I've built for this, which allows you to actually check all the items on the list. You can find that [here](https://perttu.dev/checklist). I will write a similar checklist for the Google Play Store, as well. However, I will first need to get to know it better.

This post originally appeared on my dev blog [perttu.dev](https://perttu.dev)
