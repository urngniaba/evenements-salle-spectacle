import styles from "@/components/DescriptionSpectacle.module.css";

export default function DescriptionSpectacle({children, titre, sous_titre}) {
    return <div className={styles.descriptionSpectacle}>
        <h1> {titre}</h1>
        <h2>{sous_titre}</h2>
        <p>
            {children}
        </p>
    </div>
}