/**
 * La fonction robots vous permet de définir le fichier robots.txt pour votre site web
 * Ce fichier est utilisé pour indiquer aux moteurs de recherche quelles parties de votre 
 * site peuvent ou ne peuvent pas être explorées par leurs robots d'indexation
 * 
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
