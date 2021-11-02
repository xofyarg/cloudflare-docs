module.exports = {
  product: "Email Routing",
  pathPrefix: "/email-routing",
  productLogoPathD: require('./src/content/icons/email').pathD,
  contentRepo: "cloudflare/cloudflare-docs",
  contentRepoFolder: "products/email-routing",
  externalLinks: [
    {
      title: "Cloudflare homepage",
      url: "https://cloudflare.com"
    }
  ],
  search: {
    indexName: "developers-cloudflare",
    apiKey: "b23088ab4d346409f9d3ece6606344c3",
    algoliaOptions: { 'facetFilters': '["project:firewall"]'}
  },
  siteMetadata: {
    title: "Cloudflare Email Routing docs",
    description: "Simplify the way you create and manage email addresses. With Email Routing, you can create any number of custom email addresses that you can use in situations where you do not want to share your real email address.",
    author: "@cloudflare",
    url: "https://developers.cloudflare.com/email.routing",
    image: "data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABmJLR0T///////8JWPfcAAAACXBIWXMAAABIAAAASABGyWs+AAAAF0lEQVRIx2NgGAWjYBSMglEwCkbBSAcACBAAAeaR9cIAAAAASUVORK5CYII="
  }
}