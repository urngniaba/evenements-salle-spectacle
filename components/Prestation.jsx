import styles from "@/components/Prestation.module.css"
import Image from "next/image"

// Composant representant une prestation sur la page prestataire
export default function Prestation({ children, icon }) {
    return <div className={styles.prestation}>
        <Image src={icon} alt="Icon" className={styles.image_prestation} />
        <p> {children} </p>
    </div>
}
