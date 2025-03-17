import Prestataire from "@/components/Prestataire"

/**
 * @type {import("next").Metadata}
 * 
 */
export const metadata = {
    title: "Prestation | Event Room",
    description: "Nos prestation d'Evenement de spectacles precisant Comment vendre sans intermédiaires vos prestations sur Spectacle Direct d'Event Room",
};

// page des Prestataires
export default function PagePrestataire() {
    return <Prestataire />
}
