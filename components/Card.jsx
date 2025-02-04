import styles from '@/components/Card.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Card({titre, categorie, sous_categorie, description, bouton, route, imageSrc }) {
    return (
        <div className={styles.card}>
            <Image src={imageSrc} alt="card" className={styles.card_image} />
            <h3>{titre}</h3>
            <div>
                <span>{categorie}</span>
                <span>{sous_categorie}</span>
                <span>{description}</span>
                <Link href={route} className={styles.link}><button>{bouton}</button></Link> 
            </div>
        </div>
    )
}

