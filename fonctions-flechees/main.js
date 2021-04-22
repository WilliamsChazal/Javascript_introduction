/* function coucou (){
    console.log("coucou");
} */


/* let coucou =() => "coucou"; 
console.log(coucou()); */


/* function calcul(x,y){
    return x*y;
}
console.log(calcul(5,8)); */
//calcul(5,8); // permet de faire connaitre à la fonction les paramètres de x et y 

/* let calcul = (x,y,z) =>{
    let i = x*y;
    return i-z;
}
console.log(calcul(5,8,2)); */

/* let calcul = (x,y) => x*y;
console.log(calcul(3,5)); */

let pileOuFace = () => {
    let random = Math.random();
    if(random<0.5){
        return 'Face';
    }else{
        return 'Pile';
    }
}
console.log(pileOuFace());