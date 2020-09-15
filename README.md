

<p align="center">
   <h1 align=center>Nyxo Website – Better Sleep 💤💤💤</h1>
</p>

<p align="center">
  <a href="https://apps.apple.com/us/app/nyxo-sleep-coaching/id1440417031">Download iOS</a> • <a href="https://play.google.com/store/apps/details?id=fi.nyxo.app">Download Android</a> • <a href="mailto:hello+github@nyxo.fi">Contact</a> • <a href="http://eepurl.com/g-0zKD">Nyxo Newsletter</a>
</p>

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

![Build, test, and release](https://github.com/hello-nyxo/nyxo-website/workflows/Build,%20test,%20and%20release/badge.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![commit activity](https://img.shields.io/github/commit-activity/w/hello-nyxo/nyxo-website)
![release](https://img.shields.io/github/v/release/hello-nyxo/nyxo-website)
![license](https://img.shields.io/github/license/hello-nyxo/nyxo-website)

This is the website that powers [nyxo.app](https://nyxo.app). It's built with the following tools:

- Gatsby
- React
- styled-components
- aws-amplify
- Netlify

## 🚀 Quick start

### 1. **Install the Gatsby CLI.**

   ```shell
   npm install -g gatsby-cli
   ```

### 2. **Setup AWS Amplify + environment variables**

In order to develop the site, you need to create file called `.env.development` in the root of the project. The contents of the file should we following:
```
INSTAGRAM_API_TOKEN=YOUR_KEY
INSTAGRAM_BUSINES_ID=YOUR_KEY
GTAG_ID=YOUR_KEY
GOOGLE_ANALYTICS=YOUR_KEY
CONTENTFUL_SPACE_ID=YOUR_KEY
CONTENTFUL_ACCESS_TOKEN=YOUR_KEY
CONTENTFUL_ENVIRONMENT=YOUR_ENVIRONMENT
MAILCHIMP_ENDPOINT=YOUR_KEY
````
We use Contentful so serve our coaching data. When development you can use our public testing environment by placing the following values in it:

```
CONTENTFUL_SPACE_ID=2bj8pq0ood89
CONTENTFUL_ACCESS_TOKEN=7yCg2oVBg-kQAhPrNTI0935HDiUJ7FYlUyIwM3Tspgg
CONTENTFUL_ENVIRONMENT=public
```

Our Instagram component will most likely complain that it can fetch data, because you're missing the required tokens. We are working on how to disable this. For now you should be able to skip it.

__AWS Amplify__
In order to run the site, you also need to setup aws-amplify. We have written pretty [good instructions about this on our site.](https://nyxo.app/gatsby-netlify-amplify-part-2)




### 3) **Start the site in `develop` mode.**

Next, move into your new site’s directory and start it up:

```sh
cd nyxo-website/
gatsby develop
```

4. **Open the source code and start editing!**

Your site is now running at `http://localhost:8000`. Open the `Nyxo` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes, and the browser will update in real time!

At this point, you’ve got a fully functional Gatsby website. For additional information on how you can customize your Gatsby site, see our [plugins](https://gatsbyjs.org/plugins/) and [the official tutorial](https://gatsbyjs.org/tutorial/).

## 🤝 Contributing

This project welcomes all contributions. This includes but is not limited to:

- Blog posts (you're always welcome to contribute to our blog, topics where interested in: sleep and technology)
- Localization of the site (currently we support finnish and english)
- Visualizing data (if you want to build a new chart to display your own data in the details page for example)
- New features (this means everything that makes Nyxo Sleep Coaching / Sleep Data easier to understand / use)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.kayla-gordon.com/"><img src="https://avatars3.githubusercontent.com/u/13418428?v=4" width="100px;" alt=""/><br /><sub><b>Kayla Gordon</b></sub></a><br /><a href="https://github.com/hello-nyxo/nyxo-website/commits?author=turq84" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/plahteenlahti"><img src="https://avatars0.githubusercontent.com/u/7436554?v=4" width="100px;" alt=""/><br /><sub><b>Perttu</b></sub></a><br /><a href="https://github.com/hello-nyxo/nyxo-website/commits?author=plahteenlahti" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/pietnurm"><img src="https://avatars0.githubusercontent.com/u/24267472?v=4" width="100px;" alt=""/><br /><sub><b>pietnurm</b></sub></a><br /><a href="#blog-pietnurm" title="Blogposts">📝</a></td>
    <td align="center"><a href="http://eeva.lol"><img src="https://avatars3.githubusercontent.com/u/37406275?v=4" width="100px;" alt=""/><br /><sub><b>eevasii</b></sub></a><br /><a href="#blog-eevasii" title="Blogposts">📝</a> <a href="#business-eevasii" title="Business development">💼</a> <a href="https://github.com/hello-nyxo/nyxo-website/issues?q=author%3Aeevasii" title="Bug reports">🐛</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
