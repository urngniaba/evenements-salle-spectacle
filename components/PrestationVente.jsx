import styles from "@/components/PrestationVente.module.css"

// Composant representant une etape (cadre en bleue avec les numero dans un cercle) des vente des prestations
export default function PrestionVente({ children, numero }) {
    return <div className={styles.prestation_vente_etape}>
        <div className={styles.numero}>
            <span>{numero}</span>
        </div>
        <p> {children} </p>
    </div>
}
