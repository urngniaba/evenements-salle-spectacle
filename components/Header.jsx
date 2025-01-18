import styles from "@/components/Header.module.css"
import Image from "next/image"
import logo from "@/public/logo.png"

export default function Header() {
    return (
        <header className={styles.header}>
            <ul>
                <li><Image src={logo} alt="Logo" className={styles.logo} /></li>
                <li><a href="#">Accueil</a></li>
                <li><a href="#">Programmes</a></li>
                <li><a href="#">Demander un spectacle</a></li>
                <li>
                    <a href="#">&Agrave; propos de nous</a>
                    <button type="button">Connexion</button>    
                </li>
            </ul>
        </header>
    )
}