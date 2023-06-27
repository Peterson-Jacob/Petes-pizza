
//const chSticks = document.getElementById("cheeseSticks");

    let amount = 0;

    function addToCart(item, price) {
        if (item.value <= 0) {
          alert("You must order something");
        } else {
          const cstotal = item.value * price;
          amount += cstotal;
      
          const checkOrder = document.getElementById("cartItems");
          const newItem = document.createElement('p');
          newItem.textContent = item.value + " " + item.name + " will cost " + cstotal;
          checkOrder.appendChild(newItem);
        }
      }
  
    function cartFunction(x) {
      const chSticks = document.getElementById("cheeseSticks");
      const gKnots = document.getElementById("garlicKnots");
  
      if (x === chSticks) {
        addToCart(chSticks, 5.99);
      }

      if (x === gKnots) {
        addToCart(gKnots, 6.99);
      }
    }
  
  