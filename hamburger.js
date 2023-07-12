


function toggle(nav) {
    const hamburgerWidth = document.getElementById("hamburger-nav");
    nav.classList.toggle('show');


    if(nav.classList == 'hamburger show'){
        
        gsap.to(".show",{width: "100%", duration: 1});
    }else{
       hamburgerWidth.style.width = "auto";
       
    }
    
}