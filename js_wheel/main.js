const loading = document.getElementById("loadingAnimation") ;
const content = document.getElementById("displayContent") ;

window.onload = showContent;

function showContent() {
    setTimeout (()=>{
        loading.style.display="none"
        content.style.display="block"
    },3000)
}
