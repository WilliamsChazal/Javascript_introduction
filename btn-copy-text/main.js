const buttonCopy = document.getElementById("button-copy") ;
const buttonPaste = document.getElementById("button-paste") ;
const copyText = document.getElementById("copy-text") ;
const pasteText = document.getElementById("paste-text") ;


buttonCopy.addEventListener("click", function copy() {
     copyText.select();
     document.execCommand("copy");
});

buttonPaste.addEventListener("click", function past() {
     pasteText.select();
     document.execCommand("paste");
});

//Pour vérifier si le tete copié est bien le bon
pasteText.addEventListener ("keyup", function copyCheck(){
const check = document.getElementById("check");
if (copyText.value == pasteText.value){
    check.innerHTML = "Le texte copié est bon";
    check.style.color ="green";
}
else{
    check.innerHTML="Le texte copié ne correspond pas";
    check.style.color = "red"
}
});

//Pour que le Texte de vérification disparaisse quand on quitte le formulaire
pasteText.addEventListener("blur", function(e){
    if (check.innerHTML != null) {
        check.innerHTML ='';
        
    }
});
