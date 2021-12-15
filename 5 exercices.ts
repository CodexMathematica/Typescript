//!Diseur de bonne aventure ---------------------------------------------------
//!Stocker dans des variables : nombre d'enfant, nom de partenaire, location et boulot.
//!Afficher dans la console : Vous serez "boulot" à "location", et vous serez mariés
//!à "nom de partenaire" avec qui vous aurez "nombre d'enfant" enfant(s).
//!Afficher 2 bonnes aventures différentes

let numKids:number = 2;
let partner:string = "azerty";
let geoLocation:string = "France";
let jobTitle: string = "Web Dev";
let aventure:string = `Vous serez ${jobTitle} en ${geoLocation}, et vous serez mariés à ${partner} avec qui vous aurez ${numKids} enfant(s).`;
console.log(aventure);

let numKids2:number = 5;
let partner2:string = "qsdfg";
let geoLocation2:string = "England";
let jobTitle2: string = "Web mobile";
let aventure2:string = `Vous serez ${jobTitle2} en ${geoLocation2}, et vous serez mariés à ${partner2} avec qui vous aurez ${numKids2} enfant(s).`;
console.log(aventure2);

//* Ecrire une fonction bonneFortune qui prend 4 arguments :
//* nombre d'enfant, nom de partenaire, location et boulot
//* Quand la fonction est appelée :
//*afficher dans la console : Vous serez "boulot" à "location", et vous serez mariés
//*à "nom de partenaire" avec qui vous aurez "nombre d'enfant" enfant(s).
function bonneFortune(numKid:number, partner:string, geoLocation:string, jobTitle:string): void{
    let aventure:string = `Vous serez ${jobTitle} en ${geoLocation}, et vous serez mariés à ${partner} avec qui vous aurez ${numKid} enfant(s).`;
    console.log(aventure);
}
//*Appeler 3 fonctions différentes
bonneFortune(3, 'wxcv', 'Spain', 'SysAdmin');
bonneFortune(4, 'yuiop', 'Italy', 'LeadDev');
bonneFortune(8, 'Harry', 'Poudlard', 'Sorcier');


//? Calculateur d'age------------------------------------------------------------
//? Stocker votre année de naissance dans une variable
//? Stocker une année dans une variable nommée futureYear
//? Calculer et afficher les 2 ages possibles en "futureYear" en faisant le calcul adequat.

let birthYear = 1918;
let futureYear = 2020;
let lifeTime = futureYear - birthYear;
console.log( 'En ' + futureYear + ' vous aurez : ' + lifeTime + ' ans ou vous aurez ' + (lifeTime-1));

function ageCalculator(birth: number, year: number) : void{
    console.log( 'En ' + year + ' vous aurez : ' + (year - birth) + ' ans ou vous aurez ' + ((year - birth)-1));
}
ageCalculator(1980, 2020);

/** 
*!Convertiseurs de température------------------------------------------------------------------------
*! Créer une fonction appelée : celsiusToFahrenheit qui prend une température en argument.
*! La fonction effectue la conversion en fahrenheit et affiche dans la console : XX°C vaut XX°F
*! Faire la fonction inverse nommée fahrenheitToCelsius
*/
function celsiusToFahrenheit(celsius: number): void{
    //calcul
    let celsiusConvertedToFharenheit = (celsius * 1.8) + 32;
    //affichage dans la console
    console.log('Pour une température en celsius de ' + celsius + ' on obtient ' + celsiusConvertedToFharenheit + ' °F.');
}

celsiusToFahrenheit(9.9);

function fahrenheitToCelsius(f: number){
    let fharenheitConvertedToCelsius = (f - 32) / 1.8;
    console.log('Pour une température en fharenheit de ' + f + ' on obtient ' + fharenheitConvertedToCelsius + ' °C.');
}
fahrenheitToCelsius(50);


