import BackgroundImage from "@/components/BackgroundImage";
import styles from "@/components/BackgroundImageWithText.module.css";

export default function BackgroundImageWithText({ src, alt, title, subtitle }) {
    return <div className={styles.divBackground}>
        <BackgroundImage src={src} alt={alt} />
        <div>
            <h1> {title} </h1>
            <p> {subtitle} </p>
        </div>
    </div>
}
