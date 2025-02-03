import styles from "@/app/spectacles/spectacles.module.css";
import Card from "@/components/Card";
import Image from "next/image";
import logo2 from '@/public/imageAffichage/acousti.jpg'

export default function Spectacle02() {
    return <>
        <Card titre='Concert acousti'
            categorie='Opera'
            sous_categorie='Silence Musical'
            description='Soiree dansante (Parade, défilé)'
            bouton='Faire une reservation' 
            route='#' 
            imageSrc={logo2}>
        </Card>

    </>
}