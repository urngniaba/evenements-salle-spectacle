import styles from "@/components/Footer.module.css";

// Le pied de page
export default function Footer() {
    return <footer className={styles.footer}>
        &copy;2025 SPECTACLE DIRECT CGU
        <span> MENTION LEGALE</span>
        <span> CONTACT PRESSE</span>
        <span> CONTACT</span>
    </footer>
}