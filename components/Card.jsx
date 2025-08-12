import styles from '@/components/Card.module.css';
import Link from 'next/link';
import Image from 'next/image';

// Le composant representant un card
export default function Card({ titre, categorie, sous_categorie, description, bouton, route, imageSrc }) {
    return <div className={styles.card}>
        <Image src={imageSrc} alt="card"/>
        <h3>{titre}</h3>
        <div>
            <span>{categorie}</span>
            <span>{sous_categorie}</span>
            <span>{description}</span>
            <Link href={route}><button>{bouton}</button></Link>
        </div>
    </div>
}
