gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    toggleActions:"play none none reverse"
})

gsap.to('.img-container',{
    scale:52,
    ease:"ease",
    scrollTrigger:{
      trigger:'.video-section',
      scrub:1,
      start:"top top",
      end:"bottom",
      pin:true
    }
  })

  gsap.to('.right', {
    autoAplha:0,
    x:700,
    duration:1.5,
    scrollTrigger:{
        start:1
    }
  })


  gsap.to('.left', {
    autoAplha:0,
    x:-700,

    duration:1.5,
    scrollTrigger:{
        start:1
    }
  })


  gsap.to('.txt-bottom', {
    autoAplha:0,
    letterSpacing:-10,
    duration:2,
    scrollTrigger:{
        start:2
    }
  })


  const tl = gsap.timeline();

  tl.from('.left-side div',{
    y:150,
    opacity:0,
    stagger:{
        amount:.4
    },
    delay:.5


  }).from('.right-side',{
    opacity:0,
    duration:4
},.5).to('.wrapper',{
  x:-window.innerWidth
    
})



  scrollTrigger.create({
    animation:tl,
    trigger:'.wrapper',
    start:"top top",
    end:"+=600",
    scrub:1,
    pin:true,
    ease:"ease"

  })



const timeline = gsap.timeline();

timeline.from('.title span', {
    y:150,
    skewY:7,
    duration: 3 
}).from('.txt-bottom', {
    letterSpacing:-10,
    opacity:0,
    duration:3
})