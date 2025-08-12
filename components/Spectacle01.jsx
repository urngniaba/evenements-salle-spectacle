import styles from "@/components/Spectacle.module.css";
import Card from "@/components/Card";
import EntetePage from "@/components/EntetePage";
import logo1 from '@/public/ImageAffichage/concert-reset.webp';
import DescriptionSpectacle from "@/components/DescriptionSpectacle";

// Spectacle 01 : Balle de danse
export default function Spectacle01() {
    return <>
        <EntetePage
            titre1="BALLE DE DANSE"
            titre2="Merveilleux balle avec une ambiance festive"
        />
        <div className={styles.spectacles}>
            <Card titre='Balle de danse'
                categorie='Lieu : 54 Newport Street, K1P 4J3'
                sous_categorie='Prix: 125 $ CAD'
                description='Date : 25 Janvier 2025'
                bouton='Faire une reservation'
                route='#'
                imageSrc={logo1}
            />
            <DescriptionSpectacle
                titre="La nuit enchantée"
                sous_titre="Un bal de danse spectaculaire à ne pas manquer !"
            >
                <p>
                    Venez vivre une soirée magique lors de notre grand bal de danse ! Plongez dans une ambiance élégante et festive où la musique envoûtante et les performances captivantes se mêlent pour vous offrir une expérience inoubliable. Admirez les chorégraphies raffinées, laissez-vous emporter par le rythme et profitez d’un moment de convivialité avec des passionnés de danse. Que vous soyez spectateur ou danseur, ce bal promet de faire vibrer votre cœur.
                </p>
                <p>
                    Ce rendez-vous exceptionnel sera également l'occasion de découvrir des artistes talentueux qui illumineront la scène avec des prestations uniques et dynamiques. De somptueux décors, des jeux de lumière éclatants et une programmation variée vous transporteront dans un univers où la danse devient une véritable célébration. Partagez cette aventure festive avec vos proches et créez des souvenirs mémorables. Préparez-vous à être émerveillé par cette soirée enivrante qui marie passion, créativité et élégance. Réservez dès maintenant pour ne pas manquer cette occasion unique de vibrer au rythme d'une soirée spectaculaire et pleine d'émotions.
                </p>
            </DescriptionSpectacle>
        </div>
    </>
}
