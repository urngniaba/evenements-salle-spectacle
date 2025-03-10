import Image from "next/image";
import EntetePage from "@/components/EntetePage";
import styles from '@/components/APropos.module.css'
import image2 from '@/public/ImageApropos/image2-reset.webp'
import message1 from '@/public/ImageApropos/small-message1.webp'
import message2 from '@/public/ImageApropos/small-message2.webp'
import message3 from '@/public/ImageApropos/small-message3.webp'
import message4 from '@/public/ImageApropos/small-message4.webp'
import message5 from '@/public/ImageApropos/small-message5.webp'
import message6 from '@/public/ImageApropos/small-message6.webp'

// Page du menu a propos de nous
export default function Apropos() {
    const features = [
        {
            title: "Grace au digital et a la nouvelle plateforme Spectacle Direct, il sera desormais tres facile pour les collectivites territoriales, les comités d'entreprise, les producteurs de spectacle ou même les particuliers de :",
            items: [
                {
                    src: message1,
                    content: "Découvrir et choisir les spectacles qui correspondent à leurs attentes et besoins",
                },
                {
                    src: message2,
                    content: "Contacter les artistes",
                },
                {
                    src: message3,
                    content: "Organiser la prestation en direct avec l'artiste ou avec l'aide de notre agence artistique",
                },
            ]
        },
        {
            title: "Et pour les artistes de:",
            items: [
                {
                    src: message4,
                    content: "Faire connaître leurs spectacles au plus grand nombre",
                },
                {
                    src: message5,
                    content: "Multiplier les prestations et optimiser les dates de tournée",
                },
                {
                    src: message6,
                    content: "Trouver de nouveaux artistes pour compléter leur équipe",
                },
            ]
        },
    ]

    return <>
        <EntetePage
            titre1="SPECTACLE DIRECT"
            titre2="LE DIGITAL AU SERVICE DU SPECTACLE VIVANT"
        />
        <div className={styles.container}>
            <div className={styles.paragraghe}>
                <Image src={image2} alt="" className={styles.photo1} />
                <p>
                    "Fort d'une expérience d'artiste et après plus de 20 ans dans l'organisation de spectacles à la tête
                    d'une agence artistique, j'ai décidé de créer le site dont j'ai toujours rêvé. Pour survivre, le secteur de
                    la création artistique doit se transformer et adopter les nouvelles technologies. À la fois pour aider les
                    artistes à rendre plus visible leur talent et à mieux vivre de leur art et pour faciliter les démarches des
                    organisateurs afin que les prestations de spectacle vivant se multiplient. Je suis convaincu que c'est
                    en rapprochant au maximum ces deux mondes et en éliminant les barrières qui les séparent que nous
                    parviendrons à faire mieux vivre l'ensemble des acteurs du secteur."
                    <span className={styles.citation}>
                        - Jean Michel Kankan, Fondateur de Spectacle Direct
                    </span>
                </p>
            </div>
            {features.map(feature => (
                <div key={feature.title}>
                    <div className={styles.artistesContainer}>
                        <p className={styles.artistesText}>{feature.title}</p>
                    </div>
                    <div className={styles.featuresContainer}>
                        {feature.items.map(feature => (
                            <div key={feature.content} className={styles.feature}>
                                <Image src={feature.src} alt="" className={styles.featureImage} />
                                <p className={styles.featureText}>
                                    {feature.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </>
}
