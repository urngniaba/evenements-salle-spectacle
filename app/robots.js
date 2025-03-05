/**
 * @returns {import("next").MetadataRoute.Robots}
 */
export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/'
            }
        ],
        sitemap: 'http://localhost:3000/sitemap.xml'
    }
}