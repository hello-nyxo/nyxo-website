import React from "react"
import { Helmet } from "gatsby-plugin-react-i18next"

interface HelmetProps {
  children?: React.ReactChildren
  title?: string | null
  description?: string
  pathName: string
  image?: string
  url?: string
  canonical?: string | null
  contentType?: string
  published?: string
  updated?: string
  category?: string
  tags?: string
  author?: string | null
  twitter?: string
  readingTime?: string
  staticImage?: boolean
}

const seoURL = (path?: string) => `https://www.nyxo.app${path}`

// Twitter requires https to prepend any paths.
const addHttps = (path: string | undefined) => {
  if (path?.substring(0, 5) === "https") return path
  return `https:${path}`
}

const seoDescription = `Nyxo is the best aid for improving your sleep quality. We combine leading sleep research techniques with your sleep tracker’s data to provide you with personalized and actionable coaching, to improve your sleep.`

const SEO = ({
  children,
  title = "Nyxo Sleep Coaching",
  description = seoDescription,
  pathName,
  canonical,
  image,
  contentType,
  published = new Date().toISOString(),
  updated = new Date().toISOString(),
  category,
  tags,
  twitter,
  readingTime,
  author = "Nyxo",
  staticImage,
}: HelmetProps) => {
  const canonicalUrl = canonical
    ? canonical
    : `https://www.nyxo.app/${pathName.replace(/^\/+/g, "")}`

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} – Nyxo`}>
      {children}
      <link rel="canonical" href={canonicalUrl} />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="msvalidate.01" content="E7E7B3852DA058B99618D34CD13518A2" />
      <meta name="description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="Nyxo" />
      <meta name="twitter:title" content={`${title} – Nyxo`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content={twitter || "Nyxo"} />
      <meta
        name="twitter:image"
        content={staticImage ? seoURL(image) : addHttps(image)}
      />
      {readingTime && (
        <>
          <meta name="twitter:label1" content="Reading time" />
          <meta name="twitter:data1" content={readingTime} />
        </>
      )}

      {published && <meta name="article:published_time" content={published} />}
      {updated && <meta name="article:modified_time" content={updated} />}
      {category && <meta name="article:section" content={category} />}
      {tags && <meta name="article:tag" content={tags} />}
      <meta property="og:title" content={`${title} – Nyxo`} />
      <meta
        property="og:type"
        content={contentType ? contentType : "website"}
      />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:author" content={author} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Nyxo" />

      <meta itemProp="name" content={`${title} – Nyxo`} />
      <meta itemProp="description" content={description} />
      <meta
        itemProp="image"
        content={staticImage ? seoURL(image) : addHttps(image)}
      />

      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${seoURL(pathName)}"
        },
          "headline": "${title}",
          "image": "${addHttps(image)}",
          "datePublished": "${published}",
          "dateModified": "${updated}",
          "author": {
            "@type": "Organization",
            "name": "${author ? author : "Nyxo Editors"}"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Nyxo",
            "logo": {
              "@type": "ImageObject",
              "url": "${seoURL("/logo.png")}"
            }
          }, 
          "description": "${description
            .replace(/"/g, '\\"')
            .replace(/(\r\n|\n|\r)/gm, "")}"
        }
        `}
      </script>
    </Helmet>
  )
}

export default SEO

{
  /* <link
          rel="amphtml"
          href={`https://nyxo.app/amp/${pathName.replace(/^\/+/g, "")}`}
        /> */
}
