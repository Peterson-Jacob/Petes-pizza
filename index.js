window.onload = function(){
    const img = document.getElementById("topImg");
    const quote = document.getElementById("proverb");

    gsap.to('.proverb', {delay: 0.5, duration: 5, text: '“Those pizzas I ate were for medicinal purposes.” – Amy Neftzger'});

    setInterval(imgChange, 7000);
    let i = 1;
    function imgChange(){
        const images = ["pizza1.jpg", "pizza2.jpg", "pizza4.jpg", "pizza6.jpg", "pizza8.jpg", "pizza9.jpg", "pizza7.jpg"];
        const proverbs = ['“The perfect lover is one who turns into a pizza at 4:00 A.M.” – Charles Pierce' ,
        '"Every pizza is a personal pizza if you try hard and believe in yourself." - Bill Murray',
        '“Keep your friends close and your pizza closer.” – Anonymous',
         '“Pizza is like the entire food pyramid!” – Madeline Oles',
        '"Do good. Be nice. Order pizza. Repeat." - Anonymous"', 
        '“Those pizzas I ate were for medicinal purposes.” – Amy Neftzger',
        '“A pizza slice a day keeps sadness away.” – Jet Paacal']
        if(i < 7){
            img.src = "images/" + images[i];
            quote.textContent = "";
            gsap.to('.proverb', {delay: 0.5, duration: 5, text: proverbs[i]});
            i++;
        }else{
           i = 1;
           img.src = "images/" + images[0];
           quote.textContent = "";
           gsap.to('.proverb', {delay: 0.5, duration: 5, text: proverbs[0]});
        };
    };
     
}