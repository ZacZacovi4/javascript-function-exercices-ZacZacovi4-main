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
  {
    id: "potion_vigueur",
    prix: 25,
    stock: 14,
  },
  {
    id: "potion_force",
    prix: 15,
    stock: 7,
  },
];

// exo 1 Salutation Aventurier

function salutations(nom_sorcier_new){
    return (`Salutations Aventurier ! Je me nomme ${nom_sorcier_new} pour vous servir.`);
}

// console.log(salutations(nom_sorcier));

// exo 2 Quel est le tarif d'une potion ?

/**
 * 
 * @param {string} potion_id 
 * @param {Array} inventaire 
 * @param {number} [qnt_demande = 1 par default]
 * @returns {number} prix_tot
 */
function prix_potion(potion_id, inventaire, qnt_demande = 1){
  const prix_totale =inventaire.find(function(item){
      return item.id === potion_id;
  });
  return prix_totale ? prix_totale.prix * qnt_demande : 0;   //if else
}

// console.log(prix_potion("potion_soin", inventaire, 3));

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

// creation_potion("potion de force", 10, 5);

// exo 4 Ajout de nouvelles potions dans l'inventaire
/**
 * 
 * @param {Array} inventaire 
 * @param {object} potion 
 */
function ajout_potion(inventaire, potion){
  // Recherche si la potion existe déjà dans l'inventaire (correspondance va donner sois l'index de l'object avec lequel ça match, sois -1 si n'a pas de match)
    const correspondance = inventaire.findIndex(object => object.id === potion.id);

    if (correspondance !== -1){
      // La potion existe déjà, on met à jour le prix et on ajoute le stock
      inventaire[correspondance].prix = potion.prix; // Met à jour le prix de la potion
      inventaire[correspondance].stock = potion.stock; // Met à jour le stock de la potion
    }else{
      // La potion n'existe pas, on l'ajoute à l'inventaire
      inventaire.push(potion);
    }
    // Tri de l'inventaire du plus cher au moins cher
    inventaire.sort((a,b) => b.prix - a.prix);
}

potions_1 = {
  id: "potion_vigueur",
  prix: 15,
  stock: 5,
},
potions_2 = {
  id: "potion_soin",
  prix: 25,
  stock: 2,
}

// ajout_potion(inventaire, potions_1);
// console.log (inventaire);
// ajout_potion(inventaire, potions_2);
// console.log (inventaire);

//exo 5 Cherche moi les potions qui...

function show_inventory(inventaire){
  console.log(inventaire.filter(stock => stock.stock > 0));
}
show_inventory(inventaire);
function show_abscent(inventaire){
  console.log(inventaire.filter(stock => stock.stock === 0));
}
show_abscent(inventaire);