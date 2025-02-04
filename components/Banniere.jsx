import styles from "@/components/Banniere.module.css"

export default function Banniere() {
    // La partie contenant la grande image juste en dessous de la barre de mennu sur la page d'accueil
    return <div className={styles.banniere}>
        <h1>SPECTACLE EN DIRECT, LE SPECTACLE EN TOUTE LIBERTE</h1>
        <div className={styles.cadre_jaune}>
            L'annuaire des spectacles pour les collectivités
        </div>
        <form action="" className={styles.zone_recherche}>
            <input type="text" placeholder="Que recherchez-vous ?" />
            <input type="text" placeholder="Où ?" />
            <input type="date" />
            <button type="button">Rechercher</button>
        </form>
        <p>
            Passez en direct ou faites vous accompagner ! <br />
            C'est vous qui décidez !
        </p>
    </div>
}
