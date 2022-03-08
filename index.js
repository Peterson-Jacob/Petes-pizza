window.onload = function(){
    const img = document.getElementById("topImg");

    setInterval(imgChange, 5000);
    let i = 0;
    function imgChange(){
        
        const images = ["pizza1.jpg", "pizza2.jpg", "pizza4.jpg", "pizza6.jpg"];
        if(i < 4){
            img.src = "images/" + images[i];
            i++;
        }else{
           i = 1;
           img.src = "images/" + images[0];
        };
        
    
    }
    
    
    
}