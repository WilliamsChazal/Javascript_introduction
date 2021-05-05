const chart = document.getElementById('chart');
let array = [];
for (let i = 0; i<100; i++){ /* on demarre l'instruction i à 0 et  i va boucler jusqu'a atteindre 100 (i++)*/
    let number =Math.floor( Math.random()*100); /* Permet d'afficher des chiffres entier de 0 à 100 */
    array.push(number); /* à chauqe tour de boucle remplis mon tableau ligne 3 avec des chiffres générés aléatoirement de 0 à 100 */
} 

function draw (){
    chart.innerHTML = '';
    array.forEach(function (x) {
        let div = document.createElement('div'); /* permet de créer un nombre de div dans le HTML suivant le nombre d'élemetn de notre tableau */
        div.style.height =x+'px'; /* change la taille de la div selon ce qu'elle comporte  */
        chart.appendChild(div);
    })
}
//draw();

async function bubbleSort() {
    for(let i =0; i<array.length; i++){
        for (let j =0; j <(array.length);j++){
            if(array[j] > array[j+1]){
                let temp = array[j];
                array [j] = array[j+1];
                array [j+1] = temp;
            }
            draw();
            await sleep(1);
     }
    }
    
    } 
     function sleep(ms){
        return new Promise(resolve => setTimeout(resolve,ms)); 
} 
bubbleSort();





/* function bubbleSort() {
    for (let i =0; i<array.lenght; i++){
        for (let j =0; j <array.lenght;j++){
            if(array[j]> array[j+1]){
                let temp = array[j];
                array [j] = array[j+1];
                array [j+1] = temp;
            }
            draw();
        }
    }   
}
bubbleSortt(); */