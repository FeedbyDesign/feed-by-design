---
title: example
image: 'fox-illu-left_562.png'
---

![Gatsbygram](fox-illu-left_562.png)

[Simple link](https://gatsbygram.gatsbyjs.org) is a clone...

EMBEDED VIDEO

<div>
<video controls="controls" autoplay="true" loop="true">
  <source type="video/mp4" src="/gatsbygram.mp4"></source>
  <p>Your browser does not support the video element.</p>
</video>
</div>

TITLE
### Gatsby is fast

[internal link](/docs/prpl-pattern/).

IMAGES
![gatsbygram vs. instagram filmstrip](gatsbygram-instagram.png)*Filmstrip of Gatsbygram (top)
and Instagram (bottom) loading on webpagetest.org*

![gatsbygram vs. instagram filmstrip repeat
load](gatsbygram-instagram-repeat-load.png)*Filmstrip of a repeat view
of Gatsbygram (top) and Instagram (bottom) loading on webpagetest.org*


BULETPOINTS
* [Gatsbygram's webpagetest
results](http://www.webpagetest.org/result/170310_XP_11AS/)
* [Instagram's webpagetest
results](http://www.webpagetest.org/result/170310_PC_11AZ/)

ITALIC
great browser, but *without* a reliable internet connection.

EXTERNAL LINK
[PRPL](https://developers.google.com/web/fundamentals/performance/prpl-pattern/))


CODE
```
my-site/
  index.md
  blogs/
    blog1.md
```

...would be transformed to:

```
my-site/
  index.html
  blogs/
    blog1.html
```


BACKTICKS FOR INLINE CODE AND LINK TO FILE
[`gatsby-node.js`
file](https://github.com/gatsbyjs/gatsby/blob/1.0/examples/gatsbygram/gatsby-node.js):

CODE WITH DEFINED LANGUAGE FOR LINTING (possible values: javascript, jsx, bash)
```javascript
const _ = require("lodash")
const Promise = require("bluebird")
const path = require("path")
const slug = require("slug")
const slash = require("slash")

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programatically
// create pages.
exports.createPages = ({ graphql, actionCreators }) => {
  const { upsertPage } = actionCreators

  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against this Gatsbygram's graphql schema. Think of
    // it like Gatsbygram has a built-in database constructed
    // from static data that you can run queries against.
    //
    // Post is a data node type derived from data/posts.json
    // which is created when scrapping Instagram. “allPosts”
    // is a "connection" (a GraphQL convention for accessing
    // a list of nodes) gives us an easy way to query all
    // Post nodes.
    graphql(
      `
      {
        allPosts(limit: 1000) {
          edges {
            node {
              id
            }
          }
        }
      }
    `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }

      // Create image post pages.
      const postTemplate = path.resolve(`templates/post-page.js`)
      // We want to create a detailed page for each
      // Instagram post. Since the scrapped Instagram data
      // already includes an ID field, we just use that for
      // each page's path.
      _.each(result.data.allPosts.edges, edge => {
        // Gatsby uses Redux to manage its internal state.
        // Plugins and sites can use functions like "upsertPage"
        // to interact with Gatsby.
        upsertPage({
          // Each page is required to have a `path` as well
          // as a template component. The `context` is
          // optional but is often necessary so the template
          // can query data specific to each page.
          path: slug(edge.node.id),
          component: slash(postTemplate),
          context: {
            id: edge.node.id,
          },
        })
      })
      resolve()
    })
  })
}
```
