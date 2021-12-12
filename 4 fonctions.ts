//Fonctions-------------------------------------------------------------------
//Déclaration
function direBonjour(): void{
    console.log("Bonjour");
}

function donneUnNombre(): number{
    return 5;
}

function addition(input1:number, input2: number): number{
    return input1 + input2;
}

//Appel 
direBonjour();
console.log(donneUnNombre());

let temp = donneUnNombre();
console.log(temp);

console.log(addition(14, 56));
console.log(addition(78, 22));
console.log(addition('78', 22));

//Exercices-------------------------------------------------------

//Ecrire une fonction qui prend en paramétre un string.
function unTexte(message: string): string{
    return message;
}
// Afficher le message en appelant la fonction.
console.log(unTexte("Hello"));
// Afficher le message en majuscule.
let msg = unTexte("Test");
console.log(msg.toUpperCase());

//Créer une fonction nommée isANum qui retourne le nombre 42
function isANum(): number{
    return 42;
}
// myFct est une fonction qui prend deux arguments et qui les soustraits.
//La fonction affiche le résultat de la soustraction.
function myFct(a: number = 10, b?:number): void{ // a à une valeur par défaut, b est optionnelle
    
    if( b !== undefined){
        let c = a-b;
        console.log(c);
    }else{
        console.log(a);
    }

}
myFct(4,3);

//Ecrire une fonction isLong qui prend un string comme argument
// et qui renvoie 'vraie' su la longueur de la chaine est supérieur à 10 caractères.
// (dans l'autre cas la fonction renvoie 'faux')
function isLong(msg: string): boolean{

    if(msg.length > 10 ){
        return true;
    }

    return false;
}

console.log(isLong("moins")); // Affiche false
console.log(isLong("BienPlusDeDixCaractereAfficheTrue")); // affiche true

// Créer une fonction qui renvoie -1 si l'un de ses trois arguments n'est pas un nombre.
function isNumber(arg1: any, arg2: any, arg3: any): number{

    if(typeof arg1 == "number" && typeof arg2 == "number" && typeof arg3 == "number"){
        return 1;
    }
   
    return -1;   
}

console.log(isNumber(1, 2, 3)); // return 1
console.log(isNumber('1', 2, 3)); // return -1

// Ecrire une fonction qui prend 2 arguments et qui éléve le premier argument à la
//puissance du deuxiéme. Sans utiliser les fonctions mathématiques de JavaScript
function puissance(base: number, exp: number): number{

    let total = 1;

    for (let i = 1; i <= exp; i++){
        total *= base;
    }

    return total;
}

console.log(puissance(2, 3));


// Créez une fonction nommée apreciation qui :
// prend une note sur 20 en argument
// renvoie RETRY si la note est entre 0 et 7 exclus
// renvoie You CAN DO IT si la note entre 7 et 10 exclus
// renvoie DID IT si la note entre 10 et 15 exclus
// renvoie NICE si la note entre 15 et 20 inclus
// renvoie BUG si la note n'est pas correcte
function appreciation(note: number): string{

    let appr = "";

    if(note < 0 || note > 20){
        appr = "BUG"
    }else if(note >=0 && note < 7){
        appr = "RETRY"
    }else if(note >= 7 && note <10){
        appr = "YOU CAN DO IT"
    }else if(note >= 10 && note <15){
        appr= "DID IT"
    }else{ 
        appr = "NICE";
    }

    return appr;
}
console.log(appreciation(19));



