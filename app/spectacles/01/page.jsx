import styles from "@/app/spectacles/spectacles.module.css";
import Card from "@/components/Card";
import Image from "next/image";
import logo1 from '@/public/imageAffichage/concert.jpg';

export default function Spectacle01() {
    return <>
        <Card titre='Balle de danse'
            categorie='Ambiance festif'
            sous_categorie='Musical'
            description='Soiree dansante (Parade, défilé)'
            bouton='Faire une reservation' 
            route='#'
            imageSrc={logo1}>
        </Card>

    </>
}