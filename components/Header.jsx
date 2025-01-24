import styles from "@/components/Header.module.css"
import Image from "next/image"
import logo from "@/public/logo.png"
import Link from "next/link"

export default function Header() {
    return (
        <header className={styles.header}>
            <ul>
                <li><Image src={logo} alt="Logo" className={styles.logo} /></li>
                <li><Link href="/">Accueil</Link></li>
                <li><Link href="#">Programmes</Link></li>
                <li><Link href="#">Demander un spectacle</Link></li>
                <li>
                    <Link href="/apropos">&Agrave;  propos de nous</Link>
                    <button type="button">Connexion</button>    
                </li>
            </ul>
        </header>
    )
}