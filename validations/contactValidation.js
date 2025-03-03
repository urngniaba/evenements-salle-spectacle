export function contactValidation(formData) {
  let email = formData.get("email");
  let telephone = formData.get("telephone");
  let objet = formData.get("objet");
  let message = formData.get("message");

  let newState = {
    email: { valeur: "", erreur: null },
    telephone: { valeur: "", erreur: null },
    objet: { valeur: "", erreur: null },
    message: { valeur: "", erreur: null },
  };

  let erreur = false;
  //    l'email est requis
  if (!email) {
    erreur = true;
    newState.email.erreur = "L'email est requis";
  }
  // L'email doit respecter le bon format
  else if (
    !email.match(
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    )
  ) {
    erreur = true;
    newState.email.erreur = "L'email saisi n'est pas valide";
  }

  //    le telephone est requis
  if (!telephone) {
    erreur = true;
    newState.telephone.erreur = "Le numéro téléphone est requis";
  }

  // Le telephone doit respecteer le format canadien
  else if (
    !telephone.match(/^(?:\+1\s?)?(?:\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/)
  ) {
    erreur = true;
    newState.telephone.erreur = "Le numéro de téléphone est incorrect";
  }

  //    l'objet du message est requis
  if (!objet) {
    erreur = true;
    newState.objet.erreur = "L'objet du message est requis";
  }

  //    le message est requis
  if (!message) {
    erreur = true;
    newState.message.erreur = "Le message est requis";
  }

  return [erreur, newState];
}
