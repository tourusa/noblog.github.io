const fs = require('fs');

const path = require('path')

const buildId = fs.readFileSync(path.resolve(__dirname, '.next/BUILD_ID'), { encoding: 'utf-8' })
const siteMap = require(path.resolve(__dirname, 'out/_next/data', buildId, 'sitemap.json'))

console.log('siteMap:', siteMap);

const createSitemap = (siteMap) => {
    const host = `https://${siteMap.site.domain}`;

    return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${host}</loc>
    </url>

    <url>
      <loc>${host}/</loc>
    </url>

    ${Object.keys(siteMap.canonicalPageMap)
            .map((canonicalPagePath) =>
                `
          <url>
            <loc>${host}/${canonicalPagePath}</loc>
          </url>
        `.trim()
            )
            .join('')}
  </urlset>
`
}

const xmlStr = createSitemap(siteMap.pageProps.siteMap)

console.log(xmlStr);

fs.writeFileSync(path.resolve(__dirname, 'out/sitemap.xml'),xmlStr, console.log)