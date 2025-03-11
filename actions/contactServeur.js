import { getAccounts } from "@/data/accounts";
import { contactValidation } from "@/validations/contactValidation";

export async function contactServeur(formData) {
    // Tableau qui simule une base de données
  const accounts = await getAccounts();

  let [erreur, newState] = contactValidation(formData);

  if (erreur) {
    return [erreur, newState];
  }

  //   On verifie s'il existe un compte avec ce courriel
  // const email = formData.get("email");
  // const emails = accounts.map((account) => account.email);
  // if (!emails.includes(email)) {
  //   erreur = true;
  //   newState.email.erreur = "Adresse courriel introuvable";
  //   return [erreur, newState];
  // }

  //   On verifie s'il y a un compte avec ce numéro
  // const telephone = formData.get("telephone");
  // const telephones = accounts.map((account) => account.telephone);
  // if (!telephones.includes(telephone)) {
  //   erreur = true;
  //   newState.telephone.erreur = "Numéro de téléphone introuvable";
  //   return [erreur, newState];
  // }

  //   On verifie si le courriel et le numéro sont pour le même compte
  // const isValidAccount = accounts.some(
  //   (account) => account.email === email && account.telephone === telephone
  // );
  // if (!isValidAccount) {
  //   erreur = true;
  //   newState.email.erreur = "Compte utilisateur invalide";
  //   return [erreur, newState];
  // }

  //   Tout est correct

  return [erreur, newState];
}
