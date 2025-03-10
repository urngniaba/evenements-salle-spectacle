import styles from "@/components/Spectacle.module.css"
import Card from "@/components/Card";
import EntetePage from "@/components/EntetePage";
import logo2 from '@/public/imageAffichage/acousti-reset.webp'
import DescriptionSpectacle from "@/components/DescriptionSpectacle";

// Spectacle 02 : Concert acousti
export default function Spectacle02() {
    return <>
        <EntetePage
            titre1="CONCERT ACOUSTI"
            titre2="Vivez une soirée authentique avec notre concert acoustique"
        />
        <div className={styles.spectacles}>
            <Card titre='Concert acousti'
                categorie='Lieu : 125 Rue des banques, K6P 4C3'
                sous_categorie='Prix: 200 $ CAD'
                description='Date : 26 Mars 2025'
                bouton='Faire une reservation'
                route='#'
                imageSrc={logo2}>
            </Card>
            <DescriptionSpectacle
                titre="Vibrations authentiques"
                sous_titre="Une soirée acoustique inoubliable !"
            >
                <p>
                    Plongez dans une ambiance chaleureuse et intimiste lors de notre concert acoustique exceptionnel ! Laissez-vous porter par les sons doux et authentiques des guitares, pianos et percussions légères, sublimés par des voix captivantes qui vous toucheront en plein cœur. Ce spectacle est une véritable invitation à vivre la musique dans sa forme la plus pure, sans artifices, où chaque note résonne avec émotion.
                </p>
                <p>
                    Les artistes présents vous offriront une sélection variée de morceaux envoûtants, allant des classiques revisités aux compositions originales empreintes de sincérité. Chaque chanson racontera une histoire et vous plongera dans un univers musical unique. Que vous soyez mélomane passionné ou simple amateur à la recherche d'une expérience musicale authentique, cette soirée promet de vous enchanter.
                </p>
            </DescriptionSpectacle>
        </div>
    </>
}