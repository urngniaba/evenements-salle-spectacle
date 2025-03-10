"use client"

import styles from "@/components/Header.module.css"
import Image from "next/image"
import logo from "@/public/logo2.png"
import Link from "next/link"
import { useState } from "react";
import Connexion from "@/components/Connexion";

// La barre de menu d'entete de la page
export default function Header() {
    const menus = [
        { href: "/", text: "Accueil" },
        { href: "/prestataire", text: "Prestataire" },
        { href: "/apropos", text: "A propos de nous" },
        { href: "/contact", text: "Nous constacter" },
    ]

    const [modalOpen, setModalOpen] = useState(false);
    return <header className={styles.header}>
        <ul>
            <li><Image src={logo} alt="Logo" className={styles.logo} priority /></li>
            {menus.map(item => (
                <li><Link href={item.href}>{item.text}</Link></li>
            ))}
            <li>
                <div>
                    <button className={styles.openmodalbtn} onClick={() => setModalOpen(true)}>Connexion</button>
                    <Connexion isOpen={modalOpen} onClose={() => setModalOpen(false)} />
                </div>
            </li>
        </ul>
    </header>
}
