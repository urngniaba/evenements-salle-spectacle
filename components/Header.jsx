"use client"
import connexionstyle from '@/components/Connexion.module.css'


import styles from "@/components/Header.module.css"
import Image from "next/image"
import logo from "@/public/logo.png"
import Link from "next/link"

import { useState } from "react";
import Connexion from "@/components/Connexion";

// La barre de menu d'entete de la page
export default function Header() {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <header className={styles.header}>
            <ul>
                <li><Image src={logo} alt="Logo" className={styles.logo} /></li>
                <li><Link href="/">Accueil</Link></li>
                <li><Link href="/prestataire">Prestataire</Link></li>
                <li><Link href="/apropos">&Agrave; propos de nous</Link></li>
                <li><Link href="/contact">Nous constacter</Link></li>
                <li>
                    <div>
                        <button className={connexionstyle.openmodalbtn} onClick={() => setModalOpen(true)}>
                            Connexion
                        </button>
                        <Connexion isOpen={modalOpen} onClose={() => setModalOpen(false)} />
                    </div>
                </li>
            </ul>
        </header>
    )
}