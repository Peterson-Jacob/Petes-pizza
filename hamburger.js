


function toggle(nav) {
    const hamburgerWidth = document.getElementById("hamburger-nav");
    nav.classList.toggle('show');
    hamburgerWidth.style.width = "100%";

    if(nav.classList == 'hamburger show'){
        hamburgerWidth.style.width = "100%";
    }else{
        hamburgerWidth.style.width = "auto";
    }
    
}