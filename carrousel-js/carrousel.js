const carrousel =document.getElementById('carrousel');
const btnRight =document.getElementById('btn-right');
const btnLeft =document.getElementById('btn-left');
let counter = 0;
carrousel.innerHTML=counter='0';

btnRight.addEventListener('click', rightClick);
function rightClick() {
    console.log(counter);

   
    console.log(counter);
    if(counter==0){ 
        carrousel.innerHTML=counter='1';
        carrousel.style.backgroundImage = "url('images/2.jpg')"; counter=1;

}else if(counter==1){
    carrousel.innerHTML=counter='2';
    carrousel.style.backgroundImage = "url('images/3.jpg')";counter=2;
}
else if(counter==2){
    carrousel.innerHTML=counter='3';
    carrousel.style.backgroundImage = "url('images/4.jpg')";counter=3;
}

 else if(counter==3){
     carrousel.innerHTML=counter='4';
     carrousel.style.backgroundImage = "url('images/5.jpg')";counter=4;
}

else {
    carrousel.innerHTML=counter='0';
   carrousel.style.backgroundImage = "url('images/1.jpg')"; counter = 0
}
}

btnLeft.addEventListener('click', leftClick);
    function leftClick() {
        if(counter==0){ 
            carrousel.innerHTML=counter = '4';
            carrousel.style.backgroundImage = "url('images/5.jpg')"; counter=4;
    
    }else if(counter==4){carrousel
        carrousel.innerHTML=counter = '3';
        carrousel.style.backgroundImage = "url('images/4.jpg')";counter=3;
    }
    else if(counter==3){
        carrousel.innerHTML=counter = '2';
        carrousel.style.backgroundImage = "url('images/3.jpg')";counter=2;
    }
    
     else if(counter==2){
         carrousel.innerHTML=counter = '1';
         carrousel.style.backgroundImage = "url('images/2.jpg')";counter=1;
    }
    
    else {
        carrousel.innerHTML=counter='0';
      carrousel.style.backgroundImage = "url('images/1.jpg')"; counter = 0
    }
    }

    setInterval(rightClick,1000); //1000 vaut 1 secondes, il faut écrire le nom de la fonction suivis d'une "," et de la durée//

    