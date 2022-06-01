/Toggle Menu/ 
var navLinks= document.getElementById("navLinks");
function showMenu(){
   navLinks.style.right="0";
}
function hideMenu(){
   navLinks.style.right="-200px";
}
/Preloader/ 
var preloader = document.getElementById('preloader');

setTimeout(() => {
    preloader.classList.add('hide');
}, 4000);