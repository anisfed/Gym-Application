const regexPhoneNumber = /^((\+)33|0)[1-9](\d{2}){4}$/;
const regexTvaNumber = "(FR)?[0-9A-Z]{2}[0-9]{9}";
const regexEmail = /.+@.+\..+/;
const siretEmail = /^[0-9]{14}$/;

export default {
  requiredRules: (v) => !!v || "Ce champ est obligatoire ",
  emailRules: (v) => {
    if (v) {
      if (regexEmail.test(v)) {
        return true;
      } else {
        return "L'adresse mail n'est pas valide!";
      }
    }
    return true;
  },

  phoneNumberRule: (v) => {
    if (v) {
      if (v.replace(/\s/g, "").match(regexPhoneNumber)) {
        return true;
      } else {
        return "Ce numéro de téléphone n'est pas valide!";
      }
    }
    return true;
  },
  siretNumberRule: (v) => {
    if (siretEmail.test(v)) {
      return true;
    } else {
      return "Ce numéro de siret n'est pas valide";
    }
  },
  tvaNumberRule: (v) => {
    if (v.match(regexTvaNumber)) {
      return true;
    } else {
      return "Ce numéro de tva n'est pas valide!";
    }
  },
  nbr_workersRules: (v) =>
    (v && v > 0) || "Le nombre de travailleurs doit être > 0 ",
  positiveNumberOnly: (v) => (v && v > 0) || "La valeur doit être > 0 ",
  postalCodeRule: (v) => {
    if (v) {
      if (v.length === 5) {
        return true;
      } else {
        return "Ce code postale n'est pas valide!";
      }
    }
    return true;
  },
  personHeight: (v) => {
    if (v) {
      if (v > 50 && v < 250) {
        return true;
      } else {
        return "La taille doit être comprise entre 50 et 250 cm";
      }
    }
    return true;
  }
};
