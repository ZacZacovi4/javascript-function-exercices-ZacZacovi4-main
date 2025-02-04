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

/**
 * 
 * @param {string} potion_id 
 * @param {Array} inventaire 
 * @param {number} [qnt_demande = 1 par default]
 * @returns {number} prix_tot
 */
function prix_potion(potion_id, inventaire, qnt_demande = 1){
  const a =inventaire.find(function(item){
      return item.id === potion_id;
  });
  return a ? a.prix * qnt_demande : 0;   //if else
}

console.log(prix_potion("potion_soin", inventaire, 3));

// exo 3 Fabrication de potion
/**
 * 
 * @param {string} id_p 
 * @param {number} prix_p 
 * @param {number} stock_p 
 */
function creation_potion(id_p, prix_p, stock_p){
  const potion = {
    id : id_p,
    prix : prix_p,
    stock : stock_p,  
  };
  console.log(`La nouvelle potion: ${potion.id} été crée`);
  return potion;
}

creation_potion("potion de force", 10, 5);

