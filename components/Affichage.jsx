import Image from 'next/image';
import Card from './Card';
import logo1 from '@/public/imageAffichage/concert.jpg'
import logo2 from '@/public/imageAffichage/acousti.jpg'
import logo3 from '@/public/imageAffichage/image2.jpg'
import logo4 from '@/public/imageAffichage/photo.jpg'
import logo5 from '@/public/imageAffichage/salle.jpg'
import logo6 from '@/public/imageAffichage/spectacle.jpg'

import styles from './affichage.module.css';


export default function Affichage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.titre}>Venez profiter de nos evenements avec des Spectacles Direct dans nos Salles!</h1>
            <p className={styles.description}>
                Avec Spectacle Direct, vous avez accès à une sélection des meilleures prestations de spectacles, allant des bals de danse aux projections cinématographiques en passant par les concerts acoustiques, les DJ en extérieur et les scènes théâtrales.
                Il vous est désormais très facile de découvrir et de choisir des spectacles variés, adaptés à vos attentes et besoins. Que vous recherchiez une ambiance festive, un moment de détente musicale, ou encore une performance théâtrale, nous avons tout ce qu’il vous faut.
                Vous pouvez organiser directement la prestation avec l'artiste ou demander l'aide de notre agence artistique. Nous vous accompagnerons avec plaisir dans l'organisation de votre événement pour en faire une expérience inoubliable.
            </p>
            <h2 className={styles.subtitle}>Découvrez des spectacles inoubliables avec Spectacle Direct !</h2>

            <div className={styles.cards}>
                <Card titre='Balle de danse'
                    categorie='Ambiance festif'
                    sous_categorie='Musical'
                    description='Soiree dansante (Parade, défilé)'>
                    <Image src={logo1} alt="" className={styles.image} />
                </Card>
                
                <Card titre='Concert acousti'
                    categorie='Opera'
                    sous_categorie='Silence Musical'
                    description='Soiree dansante (Parade, défilé)'>
                    <Image src={logo2} alt="" className={styles.image} />
                </Card>

                <Card titre='Concert DJ exterieur'
                    categorie='Spectacle de rue'
                    sous_categorie='Mix et Remix, Platine'
                    description='Soiree dansante (Parade, défilé)'>
                    <Image src={logo3} alt="" className={styles.image} />
                </Card>

                <Card titre='Scene Theatrales'
                    categorie='Spectacle de rue'
                    sous_categorie='Spectacle de rue'
                    description='Histoires (Drame, comedie)'>
                    <Image src={logo4} alt="" className={styles.image} />
                </Card> 

                <Card titre='Projection Cinematographique'
                    categorie='Meilleurs films'
                    sous_categorie='Livre et conte en pojection'
                    description='Films humour (clown, standUp)'>
                    <Image src={logo5} alt="" className={styles.image} />
                </Card> 

                <Card titre='Graines de Lumières'
                    categorie='Meilleurs films'
                    sous_categorie='Acapellat'
                    description='Concert Caritatif (cagnotte)'>
                    <Image src={logo6} alt="" className={styles.image} />
                </Card> 
                   
            </div>
        </div>
    );
}