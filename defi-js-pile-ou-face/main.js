const myBtn = document.getElementById("myBtn");
const result = document.getElementById("result");

myBtn.addEventListener('click', headsOrtails);

  function headsOrtails(){
       /*  let random = Math.random(); */
   let random = Math.floor( Math.random()*2);
   console.log(random);
    if (random==0){
        result.innerHTML = 'Pile';
    }else {
        result.innerHTML = 'Face';
    }
};
  