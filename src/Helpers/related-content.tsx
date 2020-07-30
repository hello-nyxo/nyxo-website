import { includes, orderBy } from "lodash"
import { BlogPostNode } from "../typings/blog-types"

// Based on code by https://khalilstemmler.com/articles/gatsby-related-posts-component/

export class RelatedContentFactory {
  articles: BlogPostNode[]
  currentArticleSlug: string
  maxArticles: number
  category: null | string
  tags?: string[] | null[]
  constructor(articles: BlogPostNode[], currentArticleSlug: string) {
    // (2.) Don't include the current article in articles list
    this.articles = articles.filter(
      (aArticle) => aArticle.frontmatter.slug !== currentArticleSlug
    )

    this.currentArticleSlug = currentArticleSlug
    this.maxArticles = 3
    this.category = null
    this.tags = []
  }

  setMaxArticles(maxArticles: number) {
    this.maxArticles = maxArticles
    return this
  }

  setCategory(category: string) {
    this.category = category
    return this
  }

  setTags(tagsArray?: string[] | null[]) {
    this.tags = tagsArray
    return this
  }

  getArticles() {
    const { category, tags, articles, maxArticles } = this
    // (5.) We use an Identity Map to keep track of score
    interface Identity {
      [index: string]: {
        article: BlogPostNode
        points: number
      }
    }
    const identityMap: Identity = {}

    if (!!tags && tags.length === 0) {
      console.error("SimilarArticlesFactory: Tags not provided, use setTags().")
      return []
    }

    // if (!!category === false) {
    //   console.error(
    //     "SimilarArticlesFactory: Category not provided, use setCategory()."
    //   )
    //   return []
    // }

    function getSlug(article: BlogPostNode) {
      return article.frontmatter.slug as string
    }

    function addToMap(article: BlogPostNode) {
      const slug = getSlug(article)
      const exists = Object.prototype.hasOwnProperty.call(identityMap, slug)
      if (!exists) {
        identityMap[slug] = {
          article: article,
          points: 0,
        }
      }
    }

    // (7.) For category matches, we add 2 points
    function addCategoryPoints(article: BlogPostNode, category: string) {
      // const categoryPoints = 2
      // const slug = getSlug(article)
      // if (article.category === category) {
      //   identityMap[slug].points += categoryPoints
      // }
    }

    // (8.) For tags matches, we add 1 point
    function addTagsPoints(article: BlogPostNode, tags?: string[] | null[]) {
      const tagPoint = 1
      const slug = getSlug(article)

      article?.frontmatter?.tags?.forEach((aTag) => {
        if (includes(tags, aTag)) {
          identityMap[slug].points += tagPoint
        }
      })
    }

    function getIdentityMapAsArray() {
      return Object.keys(identityMap).map((slug) => identityMap[slug])
    }

    // (6.) Map over all articles, add to map and add points
    articles.forEach((article) => {
      addToMap(article)
      // addCategoryPoints(article, category) // We don't (yet) have categories
      addTagsPoints(article, tags)
    })

    // (9.) Convert the identity map to an array
    const arrayIdentityMap = getIdentityMapAsArray()

    // (10.) Use a lodash utility function to sort them
    // by points, from greatest to least
    const similarArticles = orderBy(arrayIdentityMap, ["points"], ["desc"])

    // (11. Take the max number articles requested)
    return similarArticles.splice(0, maxArticles)
  }
}
