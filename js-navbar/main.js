/* let prevScrollpos = window.pageYOffset;

window.onscroll = slideDown;
function slideDown() {
 // Votre code ici
    let currentScrollPos = window.pageYOffset;
    if(prevScrollpos > currentScrollPos){
        document.getElementById('navbar').style.top ='-56px';
    } else{
        document.getElementById('navbar').style.top ='0';
    }
    prevScrollpos < currentScrollPos;
} */
/* window.onscroll = () => { */
/* window.onscroll=slideDown; 
function slideDown() {
    if(window.scrollY > 0)document.getElementById('navbar').style.top = "0";
    else document.getElementById('navbar').style.top ="-56px";
} */

window.onscroll = function (){
    if(window.scrollY > 0) {
        document.getElementById('navbar').style.top = "0";     
    } else {
        document.getElementById('navbar').style.top ="-56px";
    }
};