// faire lire le mot dans un sens et ensuite passer chaque lettre de la dernière à la première //

/* function Palindrome(entree)
{
    var entree = prompt("Veillez saisir votre mot").toLowerCase();
        entree_1 = [...entree].reverse().join('');
}
Palindrome();

var entree = prompt("Veillez saisir votre mot").toLowerCase();
entree_1 = [...entree].reverse().join('');

if (entree === "") {
    console.log('Veuillez saisir un mot d\'abord');
}

else if (entree === entree_1) {
    console.log(entree + ' est un palindrome');
}

else {
    console.log(entree + ' n\'est pas un palindrome');
} */


/* function pal(mot){
    let len= mot.length-1;
    for(let i =0; i<len/2; i++){
    console.log(i, mot.charAt(i), mot.charAt(len-i))
    if(mot.charAt(i) !==mot.charAt(len-i)){
    return false;
    }
    }
    return true;
    } */


    function fibonacci(nbr) {
        let n1 = 0;
        let n2 = 1;
        let somme = 0;
      
        for(let i = 2; i <= nbr; i++){
           //somme des deux derniers nombres
           somme = n1 + n2; 
           //assigner la dernière valeur à la première
           n1 = n2; 
           //attribuer la somme au dernier
           n2 = somme; console.log(somme)
    
        }
     }
 