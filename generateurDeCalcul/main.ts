//Variables nécéssaires pour le calcul ---------------------------------------------
//2 Variables qui donne un nombre aléatoire compris entre 0 et 100
let nombre1 = Math.floor(Math.random()*100) + 1;
let nombre2 = Math.floor(Math.random()*100) + 1;
// Tableau qui stock les 4 signes opératoires.
const TABLEAUS = ['+', '-', '*', '/'];
// Récupérer aléatoirement un seul symbole du tableau
let symbole = TABLEAUS[Math.floor(Math.random() * TABLEAUS.length)];
//console.log(nombre1 + " " + symbole + " " + nombre2 + " =")

//Récupérer des éléments du DOM
let formule:any = document.getElementById('formule');
//Afficher sur la page le calcul
formule.innerHTML = nombre1 + " " + symbole + " " + nombre2 + " =";

//Faire le calcul et stocker le résultat dans une var
let resultat:number = 0 ;
if(symbole === '+'){
    resultat = nombre1 + nombre2;
}else if(symbole === '-'){
    resultat = nombre1 - nombre2;
}else if(symbole === '/'){
    resultat = nombre1 / nombre2;
}else{
    resultat = nombre1 * nombre2;
}

//console.log(resultat.toFixed(1));

// Les fonctions -----------------------------------------------------------------

function recommencer(): void{
    location.reload(); // Recharge la page donc rejoue le script
}

function tentative(): void{
    //Récupérer la saisie de l'utilisateur (necessite un caste fait avec les opérateurs diamants<>)
    let reponseUtilisateur = (<HTMLInputElement>document.getElementById('reponseUtilisateur')).value;
    //console.log(reponseUtilisateur);
    //Comparer la saisie utilisateur avec le résultat attendu 
    let texteIndication = "";
    if(resultat.toFixed(1) == reponseUtilisateur){
        texteIndication = "Bonne réponse !!!";
        window.setTimeout("recommencer()", 3000);
    }else if (resultat.toFixed(1) < reponseUtilisateur){
        texteIndication = "Résultat attendu plus petit que la saisie";
    }else if(resultat.toFixed(1) > reponseUtilisateur){
        texteIndication = "Résultat attendu plus grand que la saisie";
    }else{
        texteIndication = "Mauvaise saisie";
    }
    //Afficher le texte indicatif dans la page 
    let indication:any = document.getElementById('indication');
    indication.innerHTML = texteIndication;
}


