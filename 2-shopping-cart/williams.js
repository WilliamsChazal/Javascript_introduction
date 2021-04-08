const counterApple=document.getElementById('counterApple');
const buttonApplePlus=document.getElementById('applePlus');
const buttonAppleMinus=document.getElementById('appleMinus');

const counterCherry=document.getElementById('counterCherry');
const buttonCherryPlus=document.getElementById('cherryPlus');
const buttonCherryMinus=document.getElementById('cherryMinus');

const counterBanana=document.getElementById('counterBanana');
const buttonBananaPlus=document.getElementById('bananaPlus');
const buttonBananaMinus=document.getElementById('bananaMinus');


let counterValueApple=0;
const applePrice=0.97;
let counterValueCherry=0;
const cherryPrice=7.98;
let counterValueBanana=0;
const bananaPrice=1.03;

const total=document.getElementById('total');
//var addition=counterValue*applePrice;


buttonApplePlus.addEventListener('click',moreApple);
buttonAppleMinus.addEventListener('click',lessApple);

buttonCherryPlus.addEventListener('click',moreCherry);
buttonCherryMinus.addEventListener('click',lessCherry);

buttonBananaPlus.addEventListener('click',moreBanana);
buttonBananaMinus.addEventListener('click',lessBanana);

function moreApple(){
    counterValueApple++; 

    counterApple.innerHTML=counterValueApple+' articles';
    if(counterValueApple== 1){
        counterApple.innerHTML=counterValueApple+' article';
    }
    else{
        counterApple.innerHTML=counterValueApple+' articles';  
    }
    document.getElementById("total").innerHTML = counterValueApple*applePrice+cherryPrice*counterValueCherry+counterValueBanana*bananaPrice;
}


function lessApple(){
    counterValueApple--;
    if(counterValueApple<=0){
        counterValueApple=0 ;
        counterApple.innerHTML=counterValueApple+' article';
    }
    else if(counterValueApple== 1){
        counterApple.innerHTML=counterValueApple+' article';
    }
    else{
        counterApple.innerHTML=counterValueApple+' articles';
    }
    document.getElementById("total").innerHTML = (counterValueApple*applePrice)+(cherryPrice*counterValueCherry)+(counterValueBanana*bananaPrice);
}




function moreCherry(){
    counterValueCherry++; 

    counterCherry.innerHTML=counterValueCherry+' articles';
    if(counterValueCherry== 1){
        counterCherry.innerHTML=counterValueCherry+' article';
    }
    else{
        counterCherry.innerHTML=counterValueCherry+' articles';  
    }
    document.getElementById("total").innerHTML = counterValueApple*applePrice+cherryPrice*counterValueCherry+counterValueBanana*bananaPrice;
}


function lessCherry(){
    counterValueCherry--;

    if(counterValueCherry<=0){
        counterValueCherry=0 ;
        counterCherry.innerHTML=counterValueCherry+' article';
    }
    else if(counterValueCherry== 1){
        counterCherry.innerHTML=counterValueCherry+' article';
    }
    else{
        counterCherry.innerHTML=counterValueCherry+' articles';
    }
    document.getElementById("total").innerHTML = counterValueApple*applePrice+cherryPrice*counterValueCherry+counterValueBanana*bananaPrice;
}


function moreBanana(){
    counterValueBanana++; 

    counterBanana.innerHTML=counterValueBanana+' articles';
    if(counterValueBanana== 1){
        counterBanana.innerHTML=counterValueBanana+' article';
    }
    else{
        counterBanana.innerHTML=counterValueBanana+' articles';  
    }
    document.getElementById("total").innerHTML = (counterValueApple*applePrice)+(cherryPrice*counterValueCherry)+(counterValueBanana*bananaPrice);
}

more
function lessBanana(){
    counterValueBanana--;
    if(counterValueBanana<=0){
        counterValueBanana=0 ;
        counterBanana.innerHTML=counterValueBanana+' article';
    }
    else if(counterValueBanana== 1){
        counterBanana.innerHTML=counterValueBanana+' article';
    }
    else{
        counterBanana.innerHTML=counterValueBanana+' articles';
    }
    document.getElementById("total").innerHTML = (counterValueApple*applePrice)+(cherryPrice*counterValueCherry)+(counterValueBanana*bananaPrice);
}