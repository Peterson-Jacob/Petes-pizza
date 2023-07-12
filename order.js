


  let amount = 0;

 
  function thankyou(){
    const error = document.getElementById("alert");
    if(amount === 0){
      error.textContent = "you must order something";
    }else{
      location.replace("thankyou.html");
    }
  }

  function addToCart(item, price) {
      const total = document.getElementById("total");
      const error = document.getElementById("alert");
      
        const value = item.value;

        if (value <= 0) { 
        
        } else {
          const cstotal = value * price;
          amount += Math.round(cstotal * 100) / 100;
          total.textContent = "Total: $ " + amount.toFixed(2);
      
          const orderedItem = document.getElementById("orderedItems");
          const itemDiv = document.createElement('div')
          const newItem = document.createElement('p');
          const remove = document.createElement('button');
          newItem.textContent = value + " " + item.name + " $" + cstotal.toFixed(2);
          itemDiv.appendChild(newItem);
          remove.textContent = "Remove";
          itemDiv.appendChild(remove);
          orderedItem.appendChild(itemDiv);
          item.value = "";
          error.textContent = "";
          
         
          remove.onclick = function(){
            itemDiv.remove();
            amount = amount - (value * price);
          
            if(amount <= 0){
              total.textContent = "The Cart is Empty";
            }else{
            total.textContent = "Total: $ " + Math.round(amount * 100) / 100;
            }
          }
        }
      }
  
    function cartFunction(x) {
      const chSticks = document.getElementById("cheeseSticks");
      const gKnots = document.getElementById("garlicKnots");
      const sRoll = document.getElementById("sausageRoll");
      const slice = document.getElementById("singleSlice");
      const drink = document.getElementById("sideDrink");
      const philly = document.getElementById("phillyCheese");
      const hCheese = document.getElementById("hamCheese");
      const tSwiss = document.getElementById("turkeySwiss");
      const mBalls = document.getElementById("meatballs");
      const itSub = document.getElementById("italianSub");
      const cAlfedo = document.getElementById("chickenAlfedo");
      const spMeat = document.getElementById("spagettiMeat");
      const five = document.getElementById("fiveCheese");
      
      switch(x){
        case chSticks:
          addToCart(chSticks, (5.99))
          break;
        case gKnots:
          addToCart(gKnots, 6.99)
          break;
        case sRoll:
          addToCart(sRoll, 8.49)
          break;
        case slice:
          addToCart(slice, 1.99)
          break;
        case drink:
          addToCart(drink, 2.29)
          break;
        case philly:
          addToCart(philly, 10.99)
          break;
        case hCheese:
          addToCart(hCheese, 9.99)
          break;
        case tSwiss:
          addToCart(tSwiss, 9.99)
          break;
        case mBalls:
          addToCart(mBalls, 10.99)
          break;
        case itSub:
          addToCart(itSub, 11.99)
          break;
        case cAlfedo:
          addToCart(cAlfedo, 12.99)
          break;
        case spMeat:
          addToCart(spMeat, 10.99)
          break;
        case five:
          addToCart(five, 9.99)
          break; 

      }

    }

    function pizza(){
      
      
      sizePrice = 0;
      toppingPrice = 0;



      const size = document.getElementById("pizzaSize");
      const type = document.getElementById('pizzaType');
      const mozzTop = document.getElementById('mozzerlla');
      const pepTop = document.getElementById('pepperoni');
      const itTop = document.getElementById('italSausage');
      const hamTop = document.getElementById('ham');
      const boTop = document.getElementById('blOlives');
      const gpTop = document.getElementById('gPeppers');
      const mushTop = document.getElementById('mushrooms');
      const onTop = document.getElementById('onions');
      const burTop = document.getElementById('hamburger');
      const chxTop = document.getElementById('chicken');
      const porkTop = document.getElementById('pork');
      const pineTop = document.getElementById('pineapple');
      const garTop = document.getElementById('garlic');
      const jalTop = document.getElementById('jalapenos');
      const banTop = document.getElementById('bananaPeppers');
      const anchTop = document.getElementById('anchovies');
      const provTop = document.getElementById('provolone');
      const chedTop = document.getElementById('chedder');
      const fetaTop = document.getElementById('feta');

     
      

      const topArray = [mozzTop, pepTop, itTop, hamTop, boTop, gpTop, mushTop,
            onTop, burTop, chxTop, porkTop, pineTop, garTop, jalTop, banTop, anchTop, 
            provTop, chedTop, fetaTop];

      const itemArray = [];
        
      
      for (let i = 0; i < topArray.length; i++) {
       
         if(topArray[i].checked == true){

          itemArray.push(topArray[i].value);
          
        } 
      
      }
     // alert(itemArray);
      
     

    if(size.value == "small"){
        sizePrice = 7.00;
      
      if(type.value == "Supreme"){
          sizePrice = 12.25
        }else{
        toppingPrice = (itemArray.length - 1) * 1;
        sizePrice = 7.00 + toppingPrice;
      }
    }  
    if(size.value == "medium"){
        sizePrice = 8.25;
      
        if(type.value == "Supreme"){
          sizePrice = 13.50
        }else{
          toppingPrice = (itemArray.length - 1) * 1.15;
          sizePrice = 8.25 + toppingPrice;
        }
    }
      if(size.value == "Large"){
        sizePrice = 9.50;
      
        if(type.value == "Supreme"){
          sizePrice = 14.75
        }else{
          toppingPrice = (itemArray.length - 1) * 1.30;
          sizePrice = 9.50 + toppingPrice;
        }
      }
      if(size.value == "X-large"){
        sizePrice = 10.75;
      
        if(type.value == "Supreme"){
          sizePrice = 16.25
        }else{
          toppingPrice = (itemArray.length - 1) * 1.45;
          sizePrice = 10.75 + toppingPrice;
        }
      }
      if(size.value == "XX-large"){
        sizePrice = 12.00;
      
        if(type.value == "Supreme"){
          sizePrice = 17.50
        }else{
          toppingPrice = (itemArray.length - 1) * 1.60;
          sizePrice = 12.00 + toppingPrice;
        }
      }
      //alert(sizePrice);

      const total = document.getElementById("total");
      const orderedItem = document.getElementById("orderedItems");
      const itemDiv = document.createElement('div')
      const newItem = document.createElement('p');
      const remove = document.createElement('button');
      const error = document.getElementById("alert");
        
        const pizzaPrice = sizePrice;
        amount += Math.round(pizzaPrice * 100) / 100;
        total.textContent = "Total: $ " + amount.toFixed(2);
        const toppings = itemArray.join(" ");
        newItem.textContent = size.value + "- " + " " + toppings + " $ " + pizzaPrice.toFixed(2);
        itemDiv.appendChild(newItem);
        remove.textContent = "Remove";
        itemDiv.appendChild(remove);
        orderedItem.appendChild(itemDiv); 
        error.textContent = "";
        size.value = "small";
        type.value = "Cheese";

        if(type.value == "Cheese"){
            mozzTop.checked = true;
            pepTop.checked = false; 
            itTop.checked = false; 
            hamTop.checked = false; 
            boTop.checked = false; 
            gpTop.checked = false; 
            mushTop.checked = false; 
            onTop.checked = false; 
            burTop.checked = false; 
            chxTop.checked = false; 
            porkTop.checked = false; 
            pineTop.checked = false; 
            garTop.checked = false; 
            jalTop.checked = false; 
            banTop.checked = false; 
            anchTop.checked = false; 
            provTop.checked = false; 
            chedTop.checked = false; 
            fetaTop.checked = false; 
            onTop.checked = false; 
        }

        remove.onclick = function(){
          itemDiv.remove();
          amount -= pizzaPrice;
          
          if(amount <= 0){
            total.textContent = "The Cart is Empty";
          }else{
          total.textContent = "Total: $ " + Math.round(amount * 100) / 100;
          }
          
        }

    }

    function types(){
      const type = document.getElementById('pizzaType');
      const mozzTop = document.getElementById('mozzerlla');
      const pepTop = document.getElementById('pepperoni');
      const itTop = document.getElementById('italSausage');
      const hamTop = document.getElementById('ham');
      const boTop = document.getElementById('blOlives');
      const gpTop = document.getElementById('gPeppers');
      const mushTop = document.getElementById('mushrooms');
      const onTop = document.getElementById('onions');
    
      if(type.value == "Cheese"){
        mozzTop.checked = true;
        pepTop.checked = false; 
        itTop.checked = false; 
        hamTop.checked = false; 
        boTop.checked = false; 
        gpTop.checked = false; 
        mushTop.checked = false; 
        onTop.checked = false; 
      }
      if(type.value == "Pepperoni"){
        mozzTop.checked = true;
        pepTop.checked = true;
        itTop.checked = false; 
        hamTop.checked = false; 
        boTop.checked = false; 
        gpTop.checked = false; 
        mushTop.checked = false; 
        onTop.checked = false; 
      }
  
      if(type.value == "Supreme"){
        mozzTop.checked = true;
        pepTop.checked = true;
        itTop.checked = true; 
        hamTop.checked = true; 
        boTop.checked = true; 
        gpTop.checked = true; 
        mushTop.checked = true; 
        onTop.checked = true; 

      }

    }

  
  