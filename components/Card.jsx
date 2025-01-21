import styles from '@/components/Card.module.css';

export default function Card({ children, titre, categorie, sous_categorie, description }) {
    return (
        <div className={styles.card}>
            {children}
            <h3>{titre}</h3>
            <div className={styles.tags}>
                <span>{categorie}</span>
                <span>{sous_categorie}</span>
                <span>{description}</span>
                <button className={styles.button}>Détail spectacle</button>
            </div>
        </div>
    )
}

