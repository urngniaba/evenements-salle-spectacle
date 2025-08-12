import Image from 'next/image';
import styles from "@/components/BackgroundImage.module.css"

// Image de background pour ne pas utiliser le background-image en css
// Cela permet d'exploiter les avantages de next/image pour l'optimisation des images
export default function BackgroundImage({ src, alt = 'Background image' }) {
    return <Image
        alt={alt}
        src={src}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
       className={styles.background} 
       priority
    />
}
