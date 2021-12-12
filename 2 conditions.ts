// Condition Si -------------------------------------------------------
 let rand1:number = Math.random();
 let rand2:number =Math.random();

 if (rand1 < rand2){
    console.log('rand1 plus petit');
} else if (rand1 > rand2) {
    console.log('rand1 plus grand');
} else{
   console.log('rand1 vaut rand2');
}
console.log('Après condition');

// Déclarer une variable de type nombre nommée discount
let discount: number;
// Déclarer une variable itemCount qui sera un nombre aléatoire
// Ce sera un nombre entier compris entre 0 et 15
let itemCount = Math.floor(Math.random()*16);

//Si on a strictement moins de 5 articles la remise est de 5%
//Si on a entre 5 et 10 articles inclus la remise sera de 10%
//Si on a strictement plus de 10 articles la remise sera de 2%
//Afficher la remise
if (itemCount < 5){
    discount = 5;
}else if (itemCount >=5 && itemCount <= 10){
    discount = 10;
} else{
    discount = 2;
}

console.log(`Votre remise est de ${discount}%`);

// Si la variable age est inférieur 18 afficher "Pas le droit de vote"
// Sinon afficher "Droit de vote"
let age = Math.floor(Math.random() * 41) + 10;
//Condition ternaire
let sentence = (age < 18) ? "Pas le droit de vote" : "Droit de vote";
console.log(sentence);

if(age < 18){
    sentence = "Pas le droit de vote";
}else{
    sentence = "Droit de vote";
}
console.log(sentence);

//les cas -----------------------------------------------------------

//Déclarer une variable num pouvant prendre la valeur 1 ou 2 ou 3 de façon aléatoire
let num = Math.floor(Math.random() * 2) + 1;

// Si num vaut 1 afficher "Num vaut 1"
// Si num vaut 2 afficher "Num vaut 2"
// Si num vaut 3 afficher "Num vaut 3"

switch (num) 
{
    case 1: 
        console.log('Num vaut 1'); 
        break;
    case 2: 
        console.log('Num vaut 2'); 
        break;
    case 3: 
        console.log('Num vaut 3'); 
        break;
    default: 
        console.log('Si aucun des cas précédents n\'est valable'); 
        break;
}

// Déclarer et initialiser une variable nommée target qui a pour valeur btn-del ou btn-update ou btn-new ou btn-save

//Afficher un message diférent selon la valeur de target en utilisant un "switch"

let target: string = 'btn-del';

switch(target){
    case 'btn-del': 
        console.log("Supprimer"); 
        break;
    case 'btn-new': 
        console.log("Ajouter"); 
        break;
    case 'btn-save': 
        console.log("Sauvegarder"); 
        break;
    case 'btn-update': 
        console.log("Editer"); 
        break;
    default:   
        console.log("Erreur"); 
        break;
}

//Créer une variable mois donnant un mois aléatoire
//Créer une variable année donnant une année aléatoire
//Indiquer le nombre de jours contenu dans le mois de cette année

let year = 2021;
let month = 2;

let day = 0;

switch(month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        day =31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        day = 30;
        break;
    case 2: //vaut 29 si year%4 == 0 et year % 100 != 0 ou year % 400 == 0
        if(
            year%4 === 0 && year % 100 !== 0 || year % 400 === 0
        ){
            day = 29;
        }else{
            day = 28;
        }
        break;
    default: 
        day = -1;
        break;
}

console.log(`Le ${month}/${year} contient ${day} jours`)

