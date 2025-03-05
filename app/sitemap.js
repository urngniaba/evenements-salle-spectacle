/**
 * @returns {import("next").MetadataRoute.Sitemap}
 */
export default function sitemap() {
    return [
        {
            url: 'http://localhost:3000/',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: 'http://localhost:3000/apropos',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.3
        },
        {
            url: 'http://localhost:3000/contact',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: 'http://localhost:3000/prestataire',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: 'http://localhost:3000/spectacles/01',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: 'http://localhost:3000/spectacles/02',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
    ]
}