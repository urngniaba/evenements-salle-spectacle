import Contact from "@/components/Contact"

/**
     * @type {import("next").Metadata}
     * 
     */

export const metadata = {
  title: "Contact | Event Room",
  description: "Contactez nous pour vos Evenement",
};

export default function PageContact() {
  return <>
    <Contact />
  </>
}
