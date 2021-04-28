// EXO1
// Créer une function [reverseNumber] qui retourne une série de nombre à l'envers (exemple si j'entre 851 elle me retourne 158)
let reverseNumber = (obj) => {
    typeof obj === "string" ? obj = +obj.split("").reverse().join("") : obj = +obj.toString().split("").reverse().join("");
    return obj
}
// EXO2
// Créer une function [divPar2] contenant un switch qui vérifie si un nombre est divisible par 2
// Qui répond "Le num x est divisible par 2 x:2 = z"
// Dans le cas ou ce n'est pas divisible il répond : "Ce nombre n'est pas divisible par 2"
let divPar2 = (number) => {
    switch (number % 2) {
        case 0:
            return console.log(`Le nombre ${number} est divisible par 2 ${number}:2 = ${number / 2}`);
        case 1:
            return console.log("Ce nombre n'est pas divisible par 2");
        default:
            return console.log("Tu n'as pas edcrit de nombre");
    }
}
// EXO3
// Créer une fonction [logIn] qui va demander à l'utilisateur un mot de passe et vérifier s'il a bien entré "mdp" si oui, faites une alert "Vous êtes connecté", si non, redemander le mot de passe jusqu'à ce que l'utilisateur rentre "mdp"
let logIn = (password) => {
    while (password != "mdp") {
        password = prompt("Veuillez entrez un mot de passe");
    }
    return alert("Vous êtes connecté");
}
