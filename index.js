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
        const sandwich = $("#sandwich");
        const pasta = $("#pasta");
        const pizza = $("#pizza");
        const topping = $("#toppings");
        const hours = $("#hours");
        one.fadeIn(2000);
        two.fadeIn(3000);
      

                $(document).scroll(function(){
                    
                
                    if(document.documentElement.scrollTop > 25){
                        $("#aboutHeader").fadeIn(3000); 
                    };

                    if(document.documentElement.scrollTop > 1400){
        
                        $("#menuHeader").fadeIn(3000);
                       
                    };

                    if(document.documentElement.scrollTop > 1600){
                        
                        side.animate({
                            left: '0%'
                        });

                       
                    }

                    if(document.documentElement.scrollTop > 2000){
                     
                        sandwich.animate({
                            left: '0%'
                        });    
                    }

                    if(document.documentElement.scrollTop > 2400){
                     
                        pasta.animate({
                            left: '0%'
                        });    
                    }

                    if(document.documentElement.scrollTop > 2700){
                     
                        pizza.animate({
                            left: '0%'
                        });    
                    }

                    if(document.documentElement.scrollTop > 3000){
                     
                        topping.animate({
                            left: '0%'
                        });    
                    }

                    if(document.documentElement.scrollTop > 3400){
                     
                        hours.animate({
                            left: '0%'
                        });    
                    }

                    if(document.documentElement.scrollTop > 3400){
                        $("#storeHours").fadeIn(4000); 
                    };

                 
 

                
                    
                    
                    
                });

                


   

    });
    
}