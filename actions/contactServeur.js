import { contactValidation } from "@/validations/contactValidation";

export async function contactServeur(formData) {

  let [erreur, newState] = contactValidation(formData);

  if (erreur) {
    return [erreur, newState];
  }

  //   Tout est correct
  return [erreur, newState];
}
