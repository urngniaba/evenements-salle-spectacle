"use client"

import connexionstyle from '@/components/Connexion.module.css'

import { useState } from "react";
import Inscription from "@/components/Connexion";

import Banniere from "@/components/Banniere";
import Affichage from "@/components/Affichage";

export default function Home() {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <div>
                <button className={connexionstyle.openmodalbtn} onClick={() => setModalOpen(true)}>
                    S'inscrire
                </button>

                <Inscription isOpen={modalOpen} onClose={() => setModalOpen(false)} />
            </div>
            <Banniere />
            <Affichage />
        </>
    );
}
