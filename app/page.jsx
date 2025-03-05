import Banniere from "@/components/Banniere";
import Affichage from "@/components/Affichage";

/**
     * @type {import("next").Metadata}
     * 
     */

export const metadata = {
    title: "Acceuil | Even Room",
    description: "Presentation de la page d'acceuil d'Even Room",
};

export default function Home() {
    return (
        <>
            <Banniere />
            <Affichage />
        </>
    );
}
