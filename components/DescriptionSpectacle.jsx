import styles from "@/components/DescriptionSpectacle.module.css";

// Partie a droite qui decrit le spectacle sur chaque page de spectacle
export default function DescriptionSpectacle({children, titre, sous_titre}) {
    return <div className={styles.descriptionSpectacle}>
        <h1> {titre}</h1>
        <h2>{sous_titre}</h2>
        <div>
            {children}
        </div>
    </div>
}
