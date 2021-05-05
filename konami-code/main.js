{/* <script>
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
if ( window.addEventListener ) {
var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
window.addEventListener("keydown", function(e){
kkeys.push( e.keyCode );
if ( kkeys.toString().indexOf( konami ) >= 0 ) {
alert('Rick Astley mode activate');
window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}
}, true);
}
</script> */}


if ( window.addEventListener ) {
    var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
    window.addEventListener("keydown", function(e){
    kkeys.push( e.keyCode );
    if ( kkeys.toString().indexOf( konami ) >= 0 ) {
    alert('mode activate');
    document.getElementById('body').style.fontFamily = 'Comic Sans MS';
    }
    }, true);
    }