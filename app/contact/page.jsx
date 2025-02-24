"use client"

import styles from "@/app/contact/contact.module.css";
import EntetePage from "@/components/EntetePage";
import { useActionState, useState } from "react";

export default function Contact() {

    const [success, setSuccess] = useState("Message de succes")
    const [isVisible, setIsVisible] = useState(false)

    /**
     * 
     * @param {FormData} formData 
     */
    const handleSubmit = (previousState, formData) => {
        let email = formData.get("email")
        let telephone = formData.get("telephone")
        let objet = formData.get("objet")
        let message = formData.get("message")

        let newState = {
            email: { valeur: "", erreur: null },
            telephone: { valeur: "", erreur: null },
            objet: { valeur: "", erreur: null },
            message: { valeur: "", erreur: null },
        }

        let erreur = false
        //    l'email est requis
        if (!email) {
            erreur = true
            newState.email.erreur = "L'email est requis"
        } 
        // L'email doit respecter le bon format
        else if (!email.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)) {
            erreur = true
            newState.email.erreur = "L'email saisi n'est pas valide"
        }

        //    le telephone est requis
        if (!telephone) {
            erreur = true
            newState.telephone.erreur = "Le numéro téléphone est requis"
        }

        // Le telephone doit respecteer le format canadien
        else if (!telephone.match(/^(?:\+1\s?)?(?:\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/)){
            erreur = true
            newState.telephone.erreur = "Le numéro de téléphone est incorrect"
        }

        //    l'objet du message est requis
        if (!objet) {
            erreur = true
            newState.objet.erreur = "L'objet du message est requis"
        }

        //    le message est requis
        if (!message) {
            erreur = true
            newState.message.erreur = "Le message est requis"
        }

        if(erreur){
            newState.email.valeur = email
            newState.telephone.valeur = telephone
            newState.objet.valeur = objet
            newState.message.valeur = message

        }else{
            setSuccess("Merci de nous avoir contacté !")
            setIsVisible(true)

            setTimeout(() => {
                setIsVisible(false)
            }, 3000)
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
            <form action={formAction}>
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
