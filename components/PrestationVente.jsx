import styles from "@/components/PrestationVente.module.css"

export default function PrestionVente({children, numero}) {
    return (
        <div className={styles.prestation_vente_etape}>
            <div className={styles.numero}>
                <span>{numero}</span>
            </div>
            <p>
                {children}
            </p>
        </div>
    )
}