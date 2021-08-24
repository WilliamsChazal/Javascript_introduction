const logo = document.getElementById("logo");
let value = 0;
function animLogo() {
  // Votre code ici
  if (value < 240) {
    value++;
    logo.style.width = value + "px";
    logo.style.height = value + "px";
    logo.style.fontSize = value + "%";
    console.log("if " + value);
  } else {
    for (let i = 0; i < 240; i++) {
      animBack();
    }
  }
}
function animBack() {
  if (value < 240) {
    value--;
    logo.style.width = value + "px";
    logo.style.height = value + "px";
    logo.style.fontSize = value + "%";
    setInterval(20);
    console.log("if " + value);
  }
}
setInterval(animLogo, 20);



/* const logo = document.getElementById('logo');
let value = 0 ;

window.onload = animLogo;

function animLogo(){
setInterval(() => {
    if (value = 0 ) {   
        logo.style.height.display ='none'
        logo.style.width.display ='none'
        logo.style.fontSize.display ='none'
      
        }else(value<=240) 
            logo.style.height =value +'px'
            logo.style.width =value +'px'
            logo.style.fontSize =value +'px'
        
}, 10);
}

setInterval(animLogo, 10); */
