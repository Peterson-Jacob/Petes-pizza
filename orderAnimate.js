const one = document.querySelector(".orderItems");
const two = document.querySelector(".cart");
const butt = document.querySelector(".shopcart");


const t = gsap.timeline({ defaults: { duration: 3 }, paused: true, reversed: true});
const tl = gsap.timeline({defaults:{duration: 1}, paused: true, reversed: true});

t.add("change")
t.to('.orderItems', {opacity: 0, duration: 1, display: 'none'}, "change");
t.to('.cart', {opacity: 1, display: 'flex' }, "change");


butt.addEventListener('click', () =>{
  active(tl)
  tween(tl)
  
  
})
  

function active(x){
  if( x.isActive() == true){
    return false;
  }
}

function tween(y){

    if(y == tl){
      if (tl.reversed() == true) {
        t.play();
    
      }
      if(tl.reversed() == false){
        t.reverse();
        
      }
      tl.reversed() ? y.play() : y.reverse();
    }
}