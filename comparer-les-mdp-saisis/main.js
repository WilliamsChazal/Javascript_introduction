const password = document.getElementById("password") ;
const checkPassword = document.getElementById("check-password") ;
const alert = document.getElementById("alert") ;
const alertN = document.getElementById("alertN") ;
const alertNbr = document.getElementById("alertNbr") ;


checkPassword.addEventListener('keyup', function() {
     // Votre code ici
   
     if (password.value != checkPassword.value){
         alert.style.color='red';
         alert.innerHTML = 'Le Mot de passe ne correspond pas';
     }  else if (password.value == checkPassword.value){
         alert.style.color='green';
         alert.innerHTML = 'All good boi =)';
     }
    
});

password.addEventListener('keyup',function(){
    console.log(password.value)
;    
    if (password.value.length<6){
        alertN.style.color='red';
        alertN.innerHTML ='Mot de passe faible'
    } else if (password.value.length >6) {
        alertN.style.color='blue';
        alertN.innerHTML ='Mot de passe fort comme un long fleuve';
    }
});

password.addEventListener('keyup',function(){
  
    
    console.log(password.value)
;    
    if (password.value.match(/[0-9]/&&/[^a-zA-Z\d]/)) /* /[0-9]/ permet de faire une recherche entre les chiffres 1 à 9 en rajounant .match, /[^a-zA-Z\d]/ permet de faire une recherche pour trouver les caractères spéciaux ainsi que Maj et minuscules */ 
    {
        alertNbr.style.color='green';
        alertNbr.innerHTML ='Mot de passe fort';
    } else {
        alertNbr.style.color='yellow'
        alertNbr.innerHTML ='Mot de passe faible';
    }
});