import styles from "@/app/prestataire/prestataire.module.css";
import Link from "next/link";

// composants
import PrestionVente from "@/components/PrestationVente";
import Prestation from "@/components/prestation";

// images
import img1 from "@/public/images/prestation/p1.jpg"
import img2 from "@/public/images/prestation/p2.jpg"
import img3 from "@/public/images/prestation/p3.jpg"
import img4 from "@/public/images/prestation/p4.jpg"
import img5 from "@/public/images/prestation/p5.jpg"

export default function Prestataire() {
    return (
        <div className={styles.prestataire_body}>
            <div className={styles.banniere_prestataire}>
                <h1>Publier vos spectacles et répondez à des appels d'offre en seulement quelques clics</h1>
                <h3>Avec spectacle en direct, vous boostez votre carrière et celle de vos artistes</h3>
                <Link href="#"><button>Je m'abonne</button></Link>
            </div>
            <div>
                <h1> Entrez dans la communauté Spectacle direct</h1>
            </div>
            <div className={styles.prestataire}>
                <Prestation icon={img1}>
                    Inscription ouverte aux compagnies, collectifs, agences et autres prestataires de spectacle
                </Prestation>
                <Prestation icon={img2}>
                    Rendez-vous visible de milliers de programmateurs privés et publics partout au Canada et au USA
                </Prestation>
                <Prestation icon={img3}>
                    Publiez tous vos spectacles gratuitement depuis votre espace dédié
                </Prestation>
                <Prestation icon={img4}>
                    Répondez à des dizaines de consultations publiés chaque mois
                </Prestation>
                <Prestation icon={img5}>
                    Artistes freelance: trouvez de nouveaux contrats intermittents ou un contrat à durée indéterminé dans votre secteur
                </Prestation>
            </div>
            <div>
                <h1>
                    Comment vendre sans intermédiaires vos prestations sur Spectacle Direct ?
                </h1>
            </div>
            <div className={styles.prestation_vente}>
                <PrestionVente numero="1">
                    Inscrivez vous sur Spectacle Direct et accédez à votre espace dédié
                </PrestionVente>
                <PrestionVente numero="2">
                    Publiez autant de spectacles que vous le souhaitez pour apparaitre dans notre moteur de recherche
                </PrestionVente>
                <PrestionVente numero="3">
                    Un commanditaire de spectacle vous contacte et vous négociez directement avec lui
                </PrestionVente>
            </div>
            <div className={styles.consultation}>
                <h1>Répondez aux consultations déposées par des professionnels ou des particuliers</h1>
                <h3>Sur Spectacle Direct vous pouvez répondre aux appels d'offre personnalisés des professionnels ou des particuliers qui recherchent un spectacle, une animation ou un artiste.</h3>
                <Link href="#"><button>Je m'inscris</button></Link>
            </div>
        </div>
    )
}