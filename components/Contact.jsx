"use client"

import styles from "@/components/Contact.module.css";
import EntetePage from "@/components/EntetePage";
import { contactValidation } from "@/validations/contactValidation";
import { useActionState, useState } from "react";
import { contactServeur } from "@/actions/contactServeur";

export default function Contact() {
    const [success, setSuccess] = useState("Message de succes")
    const [isVisible, setIsVisible] = useState(false)

    /**
     * 
     * @param {FormData} formData 
     */
    const handleSubmit = async (previousState, formData) => {

        let [erreur, newState] = contactValidation(formData)

        if (!erreur) {
            [erreur, newState] = await contactServeur(formData)
        }

        if (erreur) {
            // On garde les anciennes valeurs des champs en cas d'erreur
            newState.email.valeur = formData.get("email")
            newState.telephone.valeur = formData.get("telephone")
            newState.objet.valeur = formData.get("objet")
            newState.message.valeur = formData.get("message")
        }
        else {
            setSuccess("Merci de nous avoir contacté !")
            setIsVisible(true)

            setTimeout(() => {
                setIsVisible(false)
            }, 3000)

            // Affichage dans la console
            console.log("Message envoyé avec succès")
            console.log("Corriel de l'expéditeur : ", formData.get("email"))
            console.log("Téléphone de l'expéditeur : ", formData.get("telephone"))
            console.log("Objet du message : ", formData.get("objet"))
            console.log("Contenu du message : ", formData.get("message"))
        }

        return newState
    }

    const [formState, formAction] = useActionState(handleSubmit, {
        email: { valeur: "", erreur: null },
        telephone: { valeur: "", erreur: null },
        objet: { valeur: "", erreur: null },
        message: { valeur: "", erreur: null },
    })

    return <>
        <EntetePage
            titre1="NOUS CONTACTER"
            titre2="Nous répondons dans un délai maximal de 24 heures "
        />
        <div className={styles.contact}>
            <p>
                Email : <span>binifo@spectacledirect.ca</span>
            </p>
            <p>
                Téléphone : <span>+1 (436) 245 - 2548</span>
            </p>
            <p>
                Localisation : <span>458 Bank street, Ottawa, ON J4L 9E3</span>
            </p>
            <form action={formAction} noValidate>
                <div className={styles.row}>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            d="email"
                            placeholder="Votre email"
                            defaultValue={formState.email.valeur}
                        />
                        <span className={styles.error}>{formState.email.erreur}</span>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="telephone">Téléphone</label>
                        <input
                            type="tel"
                            name="telephone"
                            id="telephone"
                            placeholder="Votre numéro de téléphone"
                            defaultValue={formState.telephone.valeur}
                        />
                        <span className={styles.error}>{formState.telephone.erreur}</span>
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="objet">Objet</label>
                    <input
                        type="text"
                        name="objet"
                        id="objet"
                        placeholder="Objet de votre message"
                        defaultValue={formState.objet.valeur}
                    />
                    <span className={styles.error}>{formState.objet.erreur}</span>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        rows="8"
                        placeholder="Votre message"
                        defaultValue={formState.message.valeur}
                    ></textarea>
                    <span className={styles.error}>{formState.message.erreur}</span>
                </div>
                <button type="submit">Envoyer</button>
                {isVisible && <div className={styles.toast}>{success}</div>}
            </form>
        </div>
    </>
}
