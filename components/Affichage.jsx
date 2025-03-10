import Image from 'next/image';
import Card from './Card';
import logo1 from '@/public/imageAffichage/concert-reset.webp'
import logo2 from '@/public/imageAffichage/acousti-reset.webp'
import logo3 from '@/public/imageAffichage/image2-reset.webp'
import logo4 from '@/public/imageAffichage/photo-reset.webp'
import logo5 from '@/public/imageAffichage/salle-reset.webp'
import logo6 from '@/public/imageAffichage/spectacle-reset.webp'
import styles from './affichage.module.css';

export default function Affichage() {
    const cards = [
        {
            titre: 'Balle de danse',
            categorie: 'Ambiance festif',
            sous_categorie: 'Musical',
            description: 'Soiree dansante (Parade, défilé)',
            bouton: 'Détail spectacle',
            route: '/spectacles/01',
            imageSrc: logo1,
        },
        {
            titre: 'Concert acousti',
            categorie: 'Opera',
            sous_categorie: 'Silence Musical',
            description: 'Soiree dansante (Parade, défilé)',
            bouton: 'Détail spectacle',
            route: 'spectacles/02',
            imageSrc: logo2,
        },
        {
            titre: 'Concert DJ exterieur',
            categorie: 'Spectacle de rue',
            sous_categorie: 'Mix et Remix, Platine',
            description: 'Soiree dansante (Parade, défilé)',
            bouton: 'Détail spectacle',
            route: '#',
            imageSrc: logo3,
        },
        {
            titre: 'Scene Theatrales',
            categorie: 'Spectacle de rue',
            sous_categorie: 'Spectacle de rue',
            description: 'Histoires (Drame, comedie)',
            bouton: 'Détail spectacle',
            route: '#',
            imageSrc: logo4,
        },
        {
            titre: 'Projection Cinematographique',
            categorie: 'Meilleurs films',
            sous_categorie: 'Livre et conte en pojection',
            description: 'Films humour (clown, standUp)',
            bouton: 'Détail spectacle',
            route: '#',
            imageSrc: logo5,
        },
        {
            titre: 'Graines de Lumières',
            categorie: 'Meilleurs films',
            sous_categorie: 'Acapellat',
            description: 'Concert Caritatif (cagnotte)',
            bouton: 'Détail spectacle',
            route: '#',
            imageSrc: logo6,
        }
    ]

    // Partie de la page d'accueil contenant la liste des spectacle 
    return <div className={styles.container}>
        <h1>Venez profiter de nos evenements avec des Spectacles inoubliable dans nos Salles!</h1>
        <p>
            Avec Festi , vous avez accès à une sélection des meilleures prestations de spectacles, allant des bals de danse aux projections cinématographiques en passant par les concerts acoustiques, les DJ en extérieur et les scènes théâtrales.
            Il vous est désormais très facile de découvrir et de choisir des spectacles variés, adaptés à vos attentes et besoins. Que vous recherchiez une ambiance festive, un moment de détente musicale, ou encore une performance théâtrale, nous avons tout ce qu’il vous faut.
            Vous pouvez organiser directement la prestation avec l'artiste ou demander l'aide de notre agence artistique. Nous vous accompagnerons avec plaisir dans l'organisation de votre événement pour en faire une expérience inoubliable.
        </p>
        <h2>Découvrez des spectacles inoubliables chez nous chez vous !</h2>
        <div className={styles.cardsContainer}>
            {cards.map(card => (
                <Card titre={card.titre}
                    categorie={card.categorie}
                    sous_categorie={card.sous_categorie}
                    description={card.description}
                    bouton={card.bouton}
                    route={card.route}
                    imageSrc={card.imageSrc}
                />
            ))}
        </div>
    </div>
}
