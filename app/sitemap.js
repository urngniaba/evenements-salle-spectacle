/**
 * La fonction sitemap vous permet de définir le fichier sitemap.xml pour votre site web.
 * Ce fichier aide les moteurs de recherche à explorer et indexer efficacement 
 * les pages de votre site en fournissant une liste structurée des URL disponibles.
 * 
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
