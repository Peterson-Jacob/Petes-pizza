window.onload = function(){
    const img = document.getElementById("topImg");
    const bod = document.getElementById("mybody");

    
    setInterval(imgChange, 5000);
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
     
    $(document).ready(function(){
        const one = $("#hOne");
        const two = $("#hTwo");
        const side = $("#sides");
        one.fadeIn(3000);
        two.fadeIn(4000);
      

                $(document).scroll(function(){
                    
                
                    if(document.documentElement.scrollTop > 75){
                        $("#aboutHeader").fadeIn(3000); 
                    };

                    if(document.documentElement.scrollTop > 1800){
        
                        $("#menuHeader").fadeIn(3000);
                       
                    };

                    if(document.documentElement.scrollTop > 2200){
                     
                        side.animate({
                            left: '0%'
                        });

                        
                    }
                    
                    
                    
                });

                


   

    });
    
}