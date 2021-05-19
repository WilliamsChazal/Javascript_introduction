document.getElementById("all").addEventListener("click", function() {
    /* document.querySelector('.allimg').classList.toggle('hide'); */
    /* let numberOfPictures = document.querySelectorAll(".allimg").length; */ // renvoie le nbr de pictures
    let listOfPictures = document.querySelectorAll(".allimg"); // renvoi liste des tag.class.class...
    for (let index = 0; index < listOfPictures.length; index++) {
          const element = listOfPictures[index];
                element.classList.remove('hide');
                element.classList.add('show');
    }
});
document.getElementById("summer").addEventListener("click", function() {
    hideFunction("summer");
});
document.getElementById("autumn").addEventListener("click", function() {
    hideFunction("autumn");
});
document.getElementById("winter").addEventListener("click", function() {
    hideFunction("winter");
});
document.getElementById("spring").addEventListener("click", function() {
    hideFunction("spring");
});

function hideFunction(id) {
    let listOfPictures = document.querySelectorAll(".allimg"); // renvoi liste des tag.class.class...
    let listOfButton = document.getElementsByTagName("button");
    for (let index = 0; index < listOfPictures.length; index++) {
          const element = listOfPictures[index];
          if(element.classList.contains(id)){
                element.classList.remove('hide');
                element.classList.add('show');
          }else{
                element.classList.add('hide');
                element.classList.remove('show');
          }
    }
}