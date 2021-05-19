/* window.onscroll = function() { scrollIndicator() } ;
function scrollIndicator() {

}
 */
window.addEventListener('scroll', function(){
    let  a = document.documentElement.scrollTop; // Permet de voir le nombre de pixels qui ont défilé // 
    console.log("a="+ a); // combien on descend //
    let b = document.documentElement.scrollHeight;
    console.log("b="+ b); // la hauteur total qui nous reste à scroller //
    let c = document.documentElement.clientHeight;
    console.log("c="+c);
    let d = (b-c); // 
    console.log("d="+d);
    let e =(a/d)*100;
    console.log(e)

    document.getElementById("bar").style.width=e+"%";
});