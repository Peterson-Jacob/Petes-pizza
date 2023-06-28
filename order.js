


  let amount = 0;

  function addToCart(item, price) {
      const total = document.getElementById("total");

        if (item.value <= 0) {
          alert("You must order something");
        } else {
          const cstotal = item.value * price;
          amount += cstotal;
          total.textContent = Math.round(amount * 100) / 100;
      
          const checkOrder = document.getElementById("cartItems");
          const itemDiv = document.createElement('div')
          const newItem = document.createElement('p');
          const remove = document.createElement('button');
          newItem.textContent = item.value + " " + item.name + " $" + cstotal;
          itemDiv.appendChild(newItem);
          remove.textContent = "Remove";
          itemDiv.appendChild(remove);
          checkOrder.appendChild(itemDiv);
          
         
          remove.onclick = function(){
            itemDiv.remove();
            amount = amount - (item.value * price);
            total.textContent = Math.round(amount * 100) / 100;
            
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
          addToCart(chSticks, 5.99)
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
      
      pizzaPrice = 0;

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

      if(size.value == "small" && type.value == "Cheese"){
        alert("Your pizza is 7.00");
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

  
  