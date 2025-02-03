const nom_sorcier = "Archibald 🧙‍♂️";
const manuel_de_fabrication = {
  potion_soin: {
    ingredients: ["eau_de_source", "ecaille_de_dragon", "poudre_de_diamant"],
    temps_de_fabrication: 3, // exprimé en secondes
  },
};
const inventaire = [
  {
    id: "potion_soin", // identifiant unique de la potion
    prix: 10,
    stock: 0,
  },
];

// exo 1 Salutation Aventurier

function salutations(nom_sorcier_new){
    return (`Salutations Aventurier ! Je me nomme ${nom_sorcier_new} pour vous servir.`);
};

console.log(salutations(nom_sorcier));

// exo 2 Quel est le tarif d'une potion ?

function info_potion(potion_id, qnt_demande){
       prix_tot = potion_id * qnt_demande;
       return prix_tot;
}

console.log(info_potion(10, 3));

//