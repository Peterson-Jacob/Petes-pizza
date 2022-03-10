window.onload = function(){
    const img = document.getElementById("topImg");
    const one = document.getElementById("hOne");
    const two = document.getElementById("hTwo");
    const bod = document.getElementById("mybody");

    
    setInterval(imgChange, 4000);
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
    
    setInterval(fadeIn, 100);
    let x = 0;
    let y = 0;
    let z = 0;
    function fadeIn(){

        if( x < 1 ){
            x += 0.15;
            bod.style.opacity = x;
            //two.style.opacity = y;
   
        };

        if( bod.style.opacity >= 1){
            
            y += 0.05;
            z += 0.04;
            one.style.opacity = y;
            two.style.opacity = z;
        }
    };

    
    
   
    
}