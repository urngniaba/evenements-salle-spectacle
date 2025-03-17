import styles from "@/components/Prestataire.module.css";
import Link from "next/link";
import PrestionVente from "@/components/PrestationVente";
import Prestation from "@/components/prestation";
import img1 from "@/public/images/prestation/p1.jpg"
import img2 from "@/public/images/prestation/p2.jpg"
import img3 from "@/public/images/prestation/p3.jpg"
import img4 from "@/public/images/prestation/p4.jpg"
import img5 from "@/public/images/prestation/p5.jpg"

// Page du menu Prestataire
export default function Prestataire() {
    const prestations = [
        {
            icon: img1,
            content: "Inscription ouverte aux compagnies, collectifs, agences et autres prestataires de spectacle",
        },
        {
            icon: img2,
            content: "Rendez-vous visible de milliers de programmateurs privés et publics partout au Canada et au USA",
        },
        {
            icon: img3,
            content: "Publiez tous vos spectacles gratuitement depuis votre espace dédié",
        },
        {
            icon: img4,
            content: "Répondez à des dizaines de consultations publiés chaque mois",
        },
        {
            icon: img5,
            content: "Artistes freelance: trouvez de nouveaux contrats intermittents ou un contrat à durée indéterminé dans votre secteur",
        },
    ]

    const prestationsVentes = [
        {
            numero: 1,
            content: "Inscrivez vous sur Spectacle Direct et accédez à votre espace dédié",
        },
        {
            numero: 2,
            content: "Publiez autant de spectacles que vous le souhaitez pour apparaitre dans notre moteur de recherche",
        },
        {
            numero: 3,
            content: "Un commanditaire de spectacle vous contacte et vous négociez directement avec lui",
        },
    ]

    return <div className={styles.prestataire_body}>
        <div className={styles.banniere_prestataire}>
            <h1>Publier vos spectacles et répondez à des appels d'offre en seulement quelques clics</h1>
            <h2>Avec spectacle en direct, vous boostez votre carrière et celle des autres</h2>
            <Link href="#"><button>Je m'abonne</button></Link>
        </div>
        <div>
            <h1> Entrez dans la communauté Spectacle direct</h1>
        </div>
        <div className={styles.prestataire}>
            {prestations.map(prestation => (
                <Prestation key={prestation.content} icon={prestation.icon}>
                    {prestation.content}
                </Prestation>
            ))}
        </div>
        <div>
            <h1>Comment vendre sans intermédiaires vos prestations sur Spectacle Direct ?</h1>
        </div>
        <div className={styles.prestation_vente}>
            {prestationsVentes.map(prestationsVente => (
                <PrestionVente key={prestationsVente.numero} numero={prestationsVente.numero}>
                    {prestationsVente.content}
                </PrestionVente>
            ))}
        </div>
        <div className={styles.consultation}>
            <h1>Répondez aux consultations déposées par des professionnels ou des particuliers</h1>
            <h2>Sur Spectacle Direct vous pouvez répondre aux appels d'offre personnalisés des professionnels ou des particuliers qui recherchent un spectacle, une animation ou un artiste.</h2>
            <Link href="#"><button>Je m'inscris</button></Link>
        </div>
    </div>
}
