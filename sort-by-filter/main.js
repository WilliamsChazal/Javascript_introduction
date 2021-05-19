let all = document.getElementById('btn-all')
let summer = document.getElementById('btn-sum')
let autumn = document.getElementById('btn-aut')
let winter = document.getElementById('btn-win')
let spring = document.getElementById('btn-spr')



all.addEventListener('click',function () {
    console.log('bouton all OK');
})


summer.addEventListener('click',function () {
    console.log('bouton sum OK');
let summerClass = document.getElementsByClassName('summer');
let winterClass = document.getElementsByClassName('winter');
let springClass = document.getElementsByClassName('spring');
let autumnClass = document.getElementsByClassName('autumn');

for(let i = 0; 1< summerClass.length; i++){
    console.log(summerClass[i]);
    summerClass[i].classList.add('show');
    winterClass[i].classList.add('hide');
    springClass[i].classList.add('hide');
    autumnClass[i].classList.add('hide');
}


});

autumn.addEventListener('click',function () {
    console.log('bouton autumn OK');
})
winter.addEventListener('click',function () {
    console.log('bouton winter OK');
})
spring.addEventListener('click',function () {
    console.log('bouton spring OK');
})

