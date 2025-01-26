import Image from "next/image";

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
  return (
    <div className={styles.container}>
      <Image src={image1} alt="" className={styles.photo} />

      <div className={styles.textSuperpose}>
        <h1>SPECTACLE DIRECT</h1>
        <h2>LE DIGITAL AU SERVICE DU SPECTACLE VIVANT</h2>
      </div>
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
        <p className={styles.artistesText}>Et pour les artistes de:</p>
      </div>

      <div className={styles.featuresContainer}>
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

      <div className={styles.artistesContainer}>
        <p className={styles.artistesText}>Et pour les artistes de:</p>
      </div>

      <div className={styles.featuresContainer}>
        <div className={styles.feature}>
          <Image src={message4} alt="" className={styles.featureImage} />
          <p className={styles.featureText}>
            Découvrir et choisir les spectacles qui correspondent à leurs attentes et besoins
          </p>
        </div>
        <div className={styles.feature}>
          <Image src={message5} alt="" className={styles.featureImage} />
          <p className={styles.featureText}>Contacter les artistes</p>
        </div>

        <div className={styles.feature}>
          <Image src={message6} alt="" className={styles.featureImage} />
          <p className={styles.featureText}>
            Organiser la prestation en direct avec l'artiste ou avec l'aide de notre agence artistique
          </p>
        </div>
      </div>

    </div>
  );
}