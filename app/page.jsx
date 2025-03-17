import Banniere from "@/components/Banniere";
import Affichage from "@/components/Affichage";

/**
 * @type {import("next").Metadata}
 * 
 */
export const metadata = {
    title: "Acceuil | Event Room",
    description: "Presentation de la page d'acceuil, des differents spectacles inoubliables d'Event Room",
};

// Page d'acceuil
export default function Home() {
    return <>
        <Banniere />
        <Affichage />
    </>
}
