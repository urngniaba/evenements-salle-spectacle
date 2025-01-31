"use client";

import Link from "next/link";

import styles from '@/components/Connexion.module.css'

export default function Connexion({ isOpen, onClose }) {
    if (!isOpen)
        return null; // Cache le modal s'il est fermé

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.closebtn} onClick={onClose}>✖</button>
                <h1>Créez votre compte</h1>

                <form>
                    <input type="text" placeholder="Nom" required />
                    <input type="text" placeholder="Prénom" required />
                    <input type="email" placeholder="Email" required />
                    <div className="password-container">
                        <input type="password" placeholder="Mot de passe" required />
                    </div>

                    <button type="submit" className={styles.submitbtn}>Créer un compte</button>
                </form>

                <p className={styles.loginlink}>
                    Vous avez déjà un compte ?
                    <Link href="/connexion">Connectez-vous</Link>
                </p>
            </div>
        </div>
    );
}
