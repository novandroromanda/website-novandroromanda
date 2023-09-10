// Toggle class active
const navbarnav = document.querySelector
('.navbar-nav');

// ketika menu di klik
document.querySelector('#menu-logo').onclick = ( ) => {
    navbarnav.classList.toggle('active')
};

// hilangkan nav
const menulogo = document.querySelector
('#menu-logo');

document.addEventListener('click', function(e){
    if(!menulogo.contains(e.target) && !navbarnav.contains(e.target)) {
        navbarnav.classList.remove('active');
    }
});