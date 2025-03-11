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

export default function Home() {
    return (
        <>
            <Banniere />
            <Affichage />
        </>
    );
}
