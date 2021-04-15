const myBtn = document.getElementById("myBtn");
const result = document.getElementById("result");

myBtn.addEventListener('click', headsOrtails);

  function headsOrtails(){
       /*  let random = Math.random(); */
   let random = Math.random();
   console.log(random);
   /*  if (random<0.3){
        result.innerHTML = 'Pile';
        console.log('Coucou');
    }else if(random<0.7) {
        result.innerHTML = 'Face';
    }else {result.innerHTML = 'coucou';

    } */
    random<0.3?(result.innerHTML = 'Pile',console.log('Coucou')):random<0.7?result.innerHTML = 'Face':result.innerHTML = 'Coucou';
};
  