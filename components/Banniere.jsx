import styles from "@/components/Banniere.module.css"
import styles2 from "@/components/BackgroundImageWithText.module.css";
import BackgroundImage from "./BackgroundImage";
import image from "@/public/small-banniere.webp";
import BackgroundImageWithText from "./BackgroundWithText";


// La partie contenant la grande image juste en dessous de la barre de mennu sur la page d'accueil
export default function Banniere() {
    return <div className={`${styles.banniere}`}>
        <BackgroundImage src={image} alt="Spectacle"/>
        <div>
            <h1>Vivez l’instant suspendu, le spectacle libre et vivant</h1>
        </div>
        <form action="" noValidate>
            <input type="text" placeholder="Que recherchez-vous ?" id="key-word" />
            <input type="text" placeholder="Où ?" id="place" />
            <input type="date" id="event-date" placeholder="mm/dd/yyyy" />
            <button type="button">Rechercher</button>
        </form>
    </div>
}
