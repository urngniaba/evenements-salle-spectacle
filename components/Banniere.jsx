import styles from "@/components/Banniere.module.css"

export default function Banniere() {
    // La partie contenant la grande image juste en dessous de la barre de mennu sur la page d'accueil
    return <div className={styles.banniere}>
        <h1>Vivez l’instant suspendu, le spectacle libre et vivant</h1>
        <div>
            Le calendrier des arts vivants pour les sociétés
        </div>
        <form action="" noValidate>
            <input type="text" placeholder="Que recherchez-vous ?" />
            <input type="text" placeholder="Où ?" />
            <input type="date" />
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
