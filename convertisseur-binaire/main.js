const convert = document.getElementById("convert");
convert.addEventListener("click", function (){
    let code = document.getElementById("msgToCode").value;
    let crypted = document.getElementById("crypted");
    crypted.innerHTML =" ";
    for (let i = 0; i< code.length; i++) {
        crypted.innerHTML += code [i].charCodeAt(0).toString(2) + " ";
    }

})

