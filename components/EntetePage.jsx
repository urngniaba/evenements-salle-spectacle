import styles from "@/components/EntetePage.module.css";


export default function EntetePage({titre1, titre2}) {
    return <div className={styles.entetePage}>
        <h1>{titre1}</h1>
        <h2>{titre2}</h2>
    </div>
}