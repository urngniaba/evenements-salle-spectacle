import styles from "@/app/contact/contact.module.css";
import EntetePage from "@/components/EntetePage";

export default function Contact() {
    return <>
        <EntetePage
            titre1="NOUS CONTACTER"
            titre2="Nous répondons dans un délai maximal de 24 heures " />
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
            <form action="/">
                <fieldset>
                    <legend>Nous envoyer un mail</legend>
                    <br />
                    <label htmlFor="objet">Objet</label>
                    <input type="text" id="objet" /><br /><br />
                    <label htmlFor="message">Mesaage</label><br />
                    <textarea name="message" id="message" rows="8" cols="100"></textarea><br />
                <button type="submit">Envoyer</button>
                </fieldset><br />
            </form>
        </div>
    </>

}