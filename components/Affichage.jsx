import Image from 'next/image';

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
                <div className={styles.card}>
                    <Image src={logo1} alt="" className={styles.image} />
                    <h3>Balle de danse</h3>
                    <div className={styles.tags}>
                        <span>Ambiance festif</span>
                        <span>Musical</span>
                        <span>Soiree dansante (Parade, défilé)</span>
                        <button className={styles.button}>Détail spectacle</button>
                    </div>
                </div>

                <div className={styles.card}>
                    <Image src={logo2} alt="" className={styles.image} />
                    <h3>Concert acousti</h3>
                    <div className={styles.tags}>
                        <span>Opera</span>
                        <span>Silence Musical</span>
                        <span>Soiree dansante (Parade, défilé)</span>
                        <button className={styles.button}>Détail spectacle</button>
                    </div>
                </div>

                <div className={styles.card}>
                    <Image src={logo3} alt="" className={styles.image} />
                    <h3>Concert DJ exterieur</h3>
                    <div className={styles.tags}>
                        <span>Spectacle de rue</span>
                        <span>Mix et Remix, Platine</span>
                        <span>Soiree dansante (Parade, défilé)</span>
                        <button className={styles.button}>Détail spectacle</button>
                    </div>
                </div>

                <div className={styles.card}>
                    <Image src={logo4} alt="" className={styles.image} />
                    <h3>Scene Theatrales</h3>
                    <div className={styles.tags}>
                        <span>Spectacle de rue</span>
                        <span>Spectacle de rue divers</span>
                        <span>Histoires (Drame, comedie)</span>
                        <button className={styles.button}>Détail spectacle</button>
                    </div>
                </div>

                <div className={styles.card}>
                    <Image src={logo5} alt="" className={styles.image} />
                    <h3>Projection Cinematographique</h3>
                    <div className={styles.tags}>
                        <span>Meilleure films</span>
                        <span>Livre et conte en pojection</span>
                        <span>Films humour (clown, standUp)</span>
                        <button className={styles.button}>Détail spectacle</button>
                    </div>
                </div>

                <div className={styles.card}>
                    <Image src={logo6} alt="" className={styles.image} />
                    <h3>Graines de Lumières</h3>
                    <div className={styles.tags}>
                        <span>Spectacle de rue</span>
                        <span>Spectacle de rue divers</span>
                        <span>Concert Caritatif (cagnotte)</span>
                        <button className={styles.button}>Détail spectacle</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}