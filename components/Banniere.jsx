import styles from "@/components/Banniere.module.css"

// La partie contenant la grande image juste en dessous de la barre de mennu sur la page d'accueil
export default function Banniere() {
    return <div className={styles.banniere}>
        <h1>Vivez l’instant suspendu, le spectacle libre et vivant</h1>
        <div>
            Le calendrier des arts vivants pour les sociétés
        </div>
        <form action="" noValidate>
            <input type="text" placeholder="Que recherchez-vous ?" id="key-word" />
            <input type="text" placeholder="Où ?" id="place" />
            <input type="date" id="event-date" placeholder="mm/dd/yyyy" />
            <button type="button">Rechercher</button>
        </form>
        <p>
            Lancez-vous en live ou faites-vous épauler !
        </p>
        <p>
            C’est à vous de choisir !
        </p>
    </div>
}
