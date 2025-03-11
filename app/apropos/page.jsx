import Apropos from "@/components/APropos";

/**
 * @type {import("next").Metadata}
 * 
 */
export const metadata = {
  title: "A propos | Event Room",
  description: "Presentation de la page à propos presentant le digital au service du spectacles vivant de notre projet d'Event Room ",
};

// Page du menu a propos de nous
export default function AproposPage() {
  return <Apropos />
}
