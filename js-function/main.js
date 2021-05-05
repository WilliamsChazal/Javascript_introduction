//let str ="Bonjour je m'appelle Williams Chazal et je suis fier de m'appeler Williams Chazal.";
// let res = str.replace(/e/g,"A"); //le /g permet de faire une recerche globale//
// res = res.replace(/Williams Chazal/g,"Thomas Aretin");

// document.getElementById("str").innerHTML = str;
// document.getElementById("res").innerHTML = res;

//console.log(str);
//console.log(res); 

/* let calcul = function(nombre){
    return nombre*nombre; 
} */

function calcul(nombre){
    return nombre*nombre;
}
let x = calcul(5);
document.getElementById("str").innerHTML = x;