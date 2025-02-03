import Image from "next/image";
import ContainerIcon from "./ContainerIcon";
import EntetePage from "@/components/EntetePage";

import styles from '@/app/apropos/page.module.css'

import image1 from '@/public/ImageApropos/image1.jpg'
import image2 from '@/public/ImageApropos/image2.jpg'

import message1 from '@/public/ImageApropos/message1.png'
import message2 from '@/public/ImageApropos/message2.png'
import message3 from '@/public/ImageApropos/message3.png'
import message4 from '@/public/ImageApropos/message4.png'
import message5 from '@/public/ImageApropos/message5.png'
import message6 from '@/public/ImageApropos/message6.png'

export default function Apropos() {
  return <>
    <EntetePage 
    titre1="SPECTACLE DIRECT" 
      titre2="LE DIGITAL AU SERVICE DU SPECTACLE VIVANT"/>
    <div className={styles.container}>

      <div className={styles.paragraghe}>
        <Image src={image2} alt="" className={styles.photo1} />
        <p>
          <br></br>"Fort d'une expérience d'artiste et après plus de 20 ans dans l'organisation de spectacles à la tête
          d'une agence artistique, j'ai décidé de créer le site dont j'ai toujours rêvé. Pour survivre, le secteur de
          la création artistique doit se transformer et adopter les nouvelles technologies. À la fois pour aider les
          artistes à rendre plus visible leur talent et à mieux vivre de leur art et pour faciliter les démarches des
          organisateurs afin que les prestations de spectacle vivant se multiplient. Je suis convaincu que c'est
          en rapprochant au maximum ces deux mondes et en éliminant les barrières qui les séparent que nous
          parviendrons à faire mieux vivre l'ensemble des acteurs du secteur."
          <br></br>
          <br></br>
          <br></br>

          <span className={styles.citation}>
            - Jean-Michel Raynal, Fondateur de Spectacle Direct
          </span>
        </p>
      </div>

      <div className={styles.artistesContainer}>
        <p className={styles.artistesText}>Grace au digital et a la nouvelle plateforme Spectacle Direct, il sera desormais tres facile pour les collectivites
          territoriales, les comités d'entreprise, les producteurs de spectacle ou même les particuliers de :</p>
      </div>

      <div className={styles.featuresContainer}>

        {/* <ContainerIcon slogant="les details compte" >
        <Image src={message2} alt="" className={styles.featureImage}/>
        <ContainerIcon /> */}

        <div className={styles.feature}>
          <Image src={message1} alt="" className={styles.featureImage} />
          <p className={styles.featureText}>
            Découvrir et choisir les spectacles qui correspondent à leurs attentes et besoins
          </p>
        </div>
        <div className={styles.feature}>
          <Image src={message2} alt="" className={styles.featureImage} />
          <p className={styles.featureText}>Contacter les artistes</p>
        </div>

        <div className={styles.feature}>
          <Image src={message3} alt="" className={styles.featureImage} />
          <p className={styles.featureText}>
            Organiser la prestation en direct avec l'artiste ou avec l'aide de notre agence artistique
          </p>
        </div>
      </div>

      {/* je dois faire les props pour cette div */}
      <div className={styles.artistesContainer}>
        <p className={styles.artistesText}>Et pour les artistes de:</p>
      </div>

      <div className={styles.featuresContainer}>
        <div className={styles.feature}>
          <Image src={message4} alt="" className={styles.featureImage} />
          <p className={styles.featureText}>
            Faire connaître leurs spectacles au plus grand nombre
          </p>
        </div>
        <div className={styles.feature}>
          <Image src={message5} alt="" className={styles.featureImage} />
          <p className={styles.featureText}>
            Multiplier les prestations et optimiser les dates de tournée
          </p>
        </div>

        <div className={styles.feature}>
          <Image src={message6} alt="" className={styles.featureImage} />
          <p className={styles.featureText}>
            Trouver de nouveaux artistes pour compléter leur équipe
          </p>
        </div>
      </div>
    </div>
  </>
}