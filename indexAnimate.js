let aboutTL = gsap.timeline({
    scrollTrigger:{
      trigger: '.aboutSectionOne',
      start: '-15% center',
      end: '175% center',
      scrub: false,
      markers: false,
      toggleActions: 'play complete'
    }
  })

  let aboutTLTwo = gsap.timeline({
    scrollTrigger:{
      trigger: '.aboutSectionThree',
      start: '-50% center',
      end: '175% center',
      scrub: false,
      markers: false,
      toggleActions: 'play complete'
    }
  })
  
  aboutTL.add('aboutChange')
  aboutTL.to('.aboutSectionOne', {duration: 1.5, opacity: 1}, 'aboutChange');
  aboutTL.to('.aboutSectionTwo', {delay: 1, duration: 1.5, opacity: 1}, 'aboutChange');
  aboutTLTwo.to('.aboutSectionThree', { duration: 1.5, opacity: 1}, 'aboutChange');
  aboutTLTwo.to('.aboutSectionFour', { delay: 1, duration: 1.5, opacity: 1}, 'aboutChange');

  let sidesTL = gsap.timeline({
    scrollTrigger:{
      trigger: '.menuSectionSides',
      start: '-60% center',
      end: '200% center',
      scrub: false,
      markers: false,
      toggleActions: 'play reverse play reverse'
    }
  })

  sidesTL.to('.menuSectionSides', {y: -50 , opacity: 1});

  let sandTL = gsap.timeline({
    scrollTrigger:{
      trigger: '.menuSectionSandwich',
      start: '-75% center',
      end: '180% center',
      scrub: false,
      markers: false,
      toggleActions: 'play reverse play reverse'
    }
  })

  sandTL.to('.menuSectionSandwich', {y: -50 , opacity: 1});

  let pastaTL = gsap.timeline({
    scrollTrigger:{
      trigger: '.menuSectionPasta',
      start: '-90% center',
      end: '200% center',
      scrub: false,
      markers: false,
      toggleActions: 'play reverse play reverse'
    }
  })

  pastaTL.to('.menuSectionPasta', {y: -50 , opacity: 1});

  let pizzaTL = gsap.timeline({
    scrollTrigger:{
      trigger: '.menuSectionPizza',
      start: '-90% center',
      end: '200% center',
      scrub: false,
      markers: false,
      toggleActions: 'play reverse play reverse'
    }
  })

  pizzaTL.to('.menuSectionPizza', {y: -50 , opacity: 1});

  let toppingTL = gsap.timeline({
    scrollTrigger:{
      trigger: '.menuSectionToppings',
      start: '-60% center',
      end: '300% center',
      scrub: false,
      markers: false,
      toggleActions: 'play reverse play reverse'
    }
  })

  toppingTL.to('.menuSectionToppings', {y: -50 , opacity: 1});

  let hoursTL = gsap.timeline({
    scrollTrigger:{
      trigger: '.infoSectionHours',
      start: '-80% center',
      end: '300% center',
      scrub: false,
      markers: false,
      toggleActions: 'play reverse play reverse'
    }
  })
  hoursTL.to('.infoSectionHours', {duration: 1, x: 25000 });

  let contactTL = gsap.timeline({
    scrollTrigger:{
      trigger: '.infoSectionContact',
      start: '-80% center',
      end: '300% center',
      scrub: false,
      markers: false,
      toggleActions: 'play reverse play reverse'
    }
  })
  contactTL.to('.infoSectionContact', {duration: 1, x: 25000 });