//Créer une variable nommée carName et lui assigner la valeur Toyota
let carName: string = 'Toyota';

// Créer une variable nommée x et lui assigner la valeur 5
let x: number = 5;

// Afficher la somme de 5 + 10 en utilisant 2 variables
let y: number = 10;
console.log(x + y);

// multiplier 10 par 5 et afficher le resultat
console.log(y * x);

// Afficher le reste de la divion de 15 divisé par 9
console.log(15 % 9);

let a = 4;
let b = 6;
//Utiliser le bon opérateur pour que a prenne la valeur a + b
a = a + b;
a += b;
console.log(a);

// Utiliser le bon opérateur pour que b prenne la valeur a * b
b *= a;

//Déclarer une variable txt qui contient le texte : Hello World!
let txt = 'Hello World! c\'est nous !!!';
//En utilisant la propriété length donner la taille du texte 
console.log(txt.length);

// Concatener les 2 variables suivantes 
let h = 'Hello';
let w = 'World';
console.log(h + ' ' + w +'!');

//Convertir la variable w en majuscule
console.log(w.toUpperCase());

//Utiliser la méthode slice pour afficher le mot poney
let text1 = "Mon petit poney";
let slice = text1.slice(10, 15) ;
console.log(slice);

//Utiliser la bonne méthode pour remplacer poney par chien à partir de la variable text1
text1 = text1.replace('poney', 'chien');
console.log(text1);

//Créer un tableau contenant 3 éléments
let fruits: string[] = ['Banana', 'Apple', 'Strawberry'];
//Stocker le premier element dans un variable firstElts
let firstElts = fruits[0] ;
// Changer le 2eme element du tableau en papaya
fruits[1] = 'Papaya';
// Ajouter un élément à la fin du tableau
fruits.push('Mango');
console.log(fruits);
//Ajouter un élément au début du tableau
fruits.unshift('Kiwi');
// Afficher la taille du tableau
console.log(fruits.length);
// Supprimer le dernier élément du tableau
fruits.pop();
//Réorganiser les fruits par odre alphabétique
fruits.sort();

//Supprimer le deuxieme élément du tableau
fruits.splice(1, 1);
console.log(fruits);

//Utiliser une methode pour créer un nombre aléatoire
let rand: number;
rand = Math.random();

//Arrondir à l'entier le plus proche
let round: number = Math.round(5.2);

//Arrondir à l'entier inférieur
let floor: number = Math.floor(5.2);

//Arrondir à l'entier supérieur
let ceil: number = Math.ceil(5.2);

// Que renvoie la ligne suivante
console.log(floor < ceil);
