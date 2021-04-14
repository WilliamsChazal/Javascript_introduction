const x = document.getElementById('warning');
const y = document.getElementById('warningLock');

document.getElementById("input").addEventListener("keyup", function(event){
    if (!event.getModifierState('CapsLock')){
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
});

document.getElementById("input").addEventListener("keyup", function(event){
    if (!event.getModifierState('NumLock')){
        y.style.display = 'block';
    } else {
        y.style.display = 'none';
    }
});





/* let input = document.getElementById('input');
let text = document.getElementById('warning');


document.getElementById("input").addEventListener("keyup", function(event) {
    console.log(event)
    //votre code ici
    if (event.getModifierState('CapsLock')){
        text.style.display ='block';
    } else {
        text.style.display = 'none'
    }
    
  }); */

  /* let input = document.getElementById('input');
  let text = document.getElementById('warningLock');

  
  
  document.getElementById("input").addEventListener("keyup", function(event) {
      console.log(event)
      //votre code ici
      if (event.getModifierState('NumLock')){
          text.style.display ='block';
      } else {
          text.style.display = 'none'
      }
      
    }); */
  
   
