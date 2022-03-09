window.onload = function(){
    const img = document.getElementById("topImg");
    const one = document.getElementById("hOne");

    
    setInterval(imgChange, 3000);
    let i = 1;
    function imgChange(){
        const images = ["pizza1.jpg", "pizza2.jpg", "pizza4.jpg", "pizza6.jpg"];
        if(i < 4){
            img.src = "images/" + images[i];
            i++;
        }else{
           i = 1;
           img.src = "images/" + images[0];
        };
    };
    
    setInterval(fadeIn, 30);
    let x = 0;
    
    function fadeIn(){

        if( x < 1){
            x += 0.02;
            one.style.opacity = x;
        };
    };
    
}