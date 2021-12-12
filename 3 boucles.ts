// La boucle POUR-----------------------------------------------------

for(let i = 1 ; i <= 5 ; i++) {
    console.log(i);
    //i++ s'effectue ici
}

//Avec une boucle POUR afficher tous les nombres entiers allant de 174 à 205 inclus

for(let i = 174 ; i <= 205 ; i++) {
    console.log(i);
}

//Avec une boucle POUR afficher tous les nombres pairs allant de 174 à 204 inclus

for(let i = 174 ; i <= 204 ; i+=2) {
    console.log(i);
}

// i+=2  => i = i + 2   alors que i + 2 => i = i 


// Boucle tant que-------------------------------------------------------

while(condition){
    //Instructions;
    // TODO: Modifier la condition à chaque itération
}

//Déclarer une variable nommée counter de type number et de valeur 0
// Faire une boucle tant que qui affiche la valeur du compteur tant qu sa valeur est strictement inférieur à 5

let counter:number;
counter = 0;

while(counter < 5){
    console.log(counter);
    counter++;
}

//Faire tant que------------------------------------------------
do {
    console.log(counter);
    counter++;
}while(counter < 5); //Tester avec -1

// Ecrire une boucle allant de 0 à 15.
// A chaque tour de boucle si le nombre est pair afficher pair
//Si impair afficher impair.

for(let i = 0; i <= 15; i++){
    if(i % 2 == 0){
        console.log(i + ' - Pair');
    }else{
        console.log(i + ' - Impair')
    }
}

// Ecrire une boucle allant de 0 à 100.
// Pour les multiples de 3 afficher Fizz
// Pour les multiples de 5 afficher Buzz
//Pour les multiples de 3 et de 5 afficher FizzBuzz.

for(let i = 0; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log(i + ' - FizzBuzz');
    }else if (i % 3 == 0){
        console.log(i + ' - Fizz');
    }else if(i % 5 == 0){
        console.log(i + ' - Buzz');
    }
}

//Ecrire une boucle qui permet d'additionner tous les multiples de 3 et 5 (Les FizzBuzz) plus petit que 100. Seul le résultat sera affiché.
let tmp =0;
for(let i = 0; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        tmp += i;
    }
}
console.log(tmp);

// Exercices ------------------------------------------------------------

//Déclarer une variable de type nombre nommée nb
let nb: number;
// Lui affecter la valeur 255.
nb = 255;
//Déclarer une variable de type string nommée str
let str: string;
// Lui affecter la valeur 255.
str = '255';
// Déclarer un booléen
let bool: boolean;
// Déclarer une variable float qui contient la valeur 7,142128
let float = 7.142128;

//Appliquer au nombre nb l'opérateur d'incrémentation
nb++;
//Concaténer la chaine str avec le texte : " est un string"
console.log(str + "est un string");
str += ' est un string';
//Ajouter à la variable float le contenu de la varaible nb
float += nb;

// Créer une variable nume de type nombre et de valeur 7;
let nume = 7;
// Créer une variable txte de type string et de valeur 14;
let txte = "14";
// Afficher le résultat de num + txt
console.log(nume + txte);

// Additionner 7 et 14 sans modifier la variable txt 
let temporary = 0;
temporary = parseInt(txte);
console.log(nume + temporary);

// Créer un tableau qui se nomme tablos et qui contiendra des nombres.
let tablos: number[];
// Stocker dans le tableau les valeurs suivantes : 1, 2 et 3.
tablos = [1, 2, 3];
// Stocker dans la variable item le deuxiéme élément du tableau
let item = tablos[1];
// Remplacer le deuxiéme élément du tableau par la valeur 5
tablos[1] = 5;
// Ajouter la valeur 13 à la fin du tableau
tablos.push(13);
//Ajouter la valeur 14 au début du tableau
tablos.unshift(14);
//Afficher le tableau
console.log(tablos);

// Afficher les éléments du tableau en les séparant par un tiret.
// 14 - 1 - 5 - 3 - 13 - 
let phrase: string;
phrase = "";
for (let i = 0; i < tablos.length; i++){
phrase += tablos[i] + " - ";
}

console.log(phrase);

// Pour toutes les nombres entiers allant de 2 à 20
// Si la valeur est plus petite que 10 afficher "petit"
//Si la valeur est plus grande que 10 afficher "grand"
//Si la valeur est égale à 10 afficher "égalité"

for (let i = 2; i<=20; i++){

    if(i < 10){
        console.log( i + ' petit');
    }else if (i === 10){
        console.log( i + ' égalité');
    }else{
        console.log(i + ' grand');
    }

}



