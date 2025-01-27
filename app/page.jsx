import Image from "next/image";
import styles from "./page.module.css";

import Banniere from "@/components/Banniere";
import Affichage from "@/components/Affichage";

export default function Home() {
    return (
        <>
            <Banniere/>
            <Affichage />
        </>
    );
}
