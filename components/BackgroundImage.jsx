import Image from 'next/image';
import styles from "@/components/BackgroundImage.module.css"

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
