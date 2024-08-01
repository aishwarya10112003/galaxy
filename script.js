gsap.registerPlugin(ScrollTrigger);

gsap.from("#navbar div", {
  y: -100,
  delay: 0.2,
  duration: 0.8,
  stagger: 0.2,
});

gsap.from("#gsap1 img", {
  scale: 0,
  delay: 0.2,
  duration: 1.5,
  rotation: 360,
  stagger: 0.5,
});

gsap.from("#gsap2 img", {
  x: 300,
  delay: 0.5,
  duration: 1,
  stagger: 0.5,
});

gsap.from("#gsap3 img", {
  x: -300,
  delay: 0.5,
  duration: 1,
  stagger: 0.3,
});

gsap.from("#gsap4", {
  y: 300,
  delay: 1,
  duration: 1,
});
// text animation
function breaktext(){
    var mainline3 = document.querySelector("#mainline3")
    var line3text =mainline3.textContent
    var splittedline3=line3text.split("")
    var clutter =""
    splittedline3.forEach(function(elem){
            clutter+=` <span>${elem}</span>`
    })
    mainline3.innerHTML =clutter
}
breaktext()
gsap.from("#mainline3 span",{
    y:50,
    duration:0.5,
    delay:1,
    opacity:0,
    stagger:0.15,
})
gsap.from("#mainlines ",{
  
  duration:1,
  delay:0.5,
  opacity:0,
  stagger:0.5,

})

//sunportion
//animation of image sun
gsap.from("#gsap5", {
  scale:0,
  duration: 1.2,
  y:-500,
  scrollTrigger: {
    trigger: "#gsap5",
    scroller: "body",
    start: "top 20%",
    end: "bottom 40%",
   
    
  },
});

//animation of sun paragraph
gsap.from(".suntext1",{
 x:-50,
 duration:1,
 delay:0.6,
 opacity:0,
 scrollTrigger:{
  trigger: ".suntext1",
    scroller: "body",
    start: "top 70%",
    end: "bottom 40%",
   
    
 }

})
//mercury portion 
//mercury img animation
gsap.to("#page2 #gsap6", {
   height:"80%",
    duration: 2,
   
    scrollTrigger: {
      trigger: "#page2",
      scroller: "body",
      start: "top 0",
      end: "top -100%",
      scrub:2,
      pin:true,
      markers: true,
    },
  });

  gsap.from(".mercurytext1",{
    x:50,
    duration:1,
    delay:0.6,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
     trigger: ".mercurytext1",
       scroller: "body",
       start: "top 70%",
       end: "bottom 40%",
      
       
    }
   
   })
   //venus portion
   gsap.from(".gsap6",{
    x:50,
    duration:1,
    delay:0.6,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
     trigger: ".gsap6",
       scroller: "body",
       start: "top 85%",
       end: "bottom 40%",
      
       
    }
   
   })
   gsap.from(".venustext1",{
    x:-50,
    duration:1,
    delay:0.6,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
     trigger: ".venustext1",
       scroller: "body",
       start: "top 85%",
       end: "bottom 40%",
      
       
    }
   
   })
   //earth portion 
   //animation of headline earth
   function breaktext2(){
    var mainline3 = document.querySelector(".earthtext1")
    var line3text =mainline3.textContent
    var splittedline3=line3text.split("")
    var clutter =" "
    splittedline3.forEach(function(elem){
            clutter+=` <span>${elem}</span>`
    })
    mainline3.innerHTML =clutter
}
breaktext2()
gsap.from(".earthtext1 span",{
    y:90,
    duration:0.5,
    delay:0.2,
    opacity:0,
    stagger:0.15,
    scrollTrigger:{
      trigger: ".earthtext1",
        scroller: "body",
        start: "top 85%",
        end: "bottom 40%",
       
        
     } 
})
//moontext animation
gsap.from(".moontext",{
  x:50,
  opacity:0,
 
  duration:1,
  delay:0.4,
  stagger:0.2,
  scrollTrigger:{
   trigger: ".moontext",
     scroller: "body",
     start: "top 85%",
     end: "bottom 40%",
    
     
  }
 
 })
 
//earthrocket
gsap.from(".earthrocket",{
 y:100,
 x:-100,
 
  duration:1.2,
  delay:0.6,
  stagger:0.2,
  scrollTrigger:{
   trigger: ".earthrocket",
     scroller: "body",
     start: "top 80%",
     end: "bottom 40%",
    
     
  }
 
 })

 //marsanimation
 gsap.from(".marsboxes ",{
  x:100,
  duration:1,
  delay:0.2,
  opacity:0,
  stagger:0.2,
  scrollTrigger:{
   trigger: ".marsboxes",
     scroller: "body",
     start: "top 90%",
     end: "bottom 40%",
    
     
  }
 
 })
 gsap.from(".mars",{
  x:-50,
  duration:1,
  delay:0.6,
  opacity:0,
  stagger:0.5,
  scrollTrigger:{
   trigger: ".mars",
     scroller: "body",
     start: "top 80%",
     end: "bottom 40%",
    
     
  }
 
 })
 gsap.from(".marstext",{
  x:-60,
  opacity:0,
 
  duration:0.5,
  delay:0.6,
  stagger:0.2,
  scrollTrigger:{
   trigger: ".marstext",
     scroller: "body",
     start: "top 80%",
     end: "bottom 40%",
    
     
  }
 
 })
 gsap.from(".marstext2",{
  y:-50,
  opacity:0,
 
  duration:1,
  delay:0.6,
  stagger:0.2,
  scrollTrigger:{
   trigger: ".marstext2",
     scroller: "body",
     start: "top 80%",
     end: "bottom 40%",
    
     
  }
 
 })

 //jupiter animation
 //jupiter
 gsap.from(".gsap7",{
  x:50,
  duration:1,
  delay:0.6,
  opacity:0,
  stagger:0.5,
  scrollTrigger:{
   trigger: ".gsap7",
     scroller: "body",
     start: "top 85%",
     end: "bottom 40%",
    
     
  }
 
 })

//jupitertext
 gsap.from(".jupitertext",{
  x:-60,
  opacity:0,
 
  duration:0.5,
  delay:0.6,
  stagger:0.2,
  scrollTrigger:{
   trigger: ".jupitertext",
     scroller: "body",
     start: "top 85%",
     end: "bottom 20%",
    
     
  }
 
 })
 //saturn section
 gsap.from(".saturnring",{
  scale:0,
  opacity:0,
 x:-50,
  duration:1,
  delay:0.3,
  stagger:0.2,
  scrollTrigger:{
   trigger: ".saturnring",
     scroller: "body",
     start: "top 80%",
     end: "bottom 20%",
     
     
  }
 
 })
 
 function breaktext3(){
  var mainline3 = document.querySelector(".saturntext1")
  var line3text =mainline3.textContent
  var splittedline3=line3text.split("")
  var clutter =""
  splittedline3.forEach(function(elem){
          clutter+=` <span>${elem}</span>`
  })
  mainline3.innerHTML =clutter
}
breaktext3()
gsap.from(".saturntext1 span", {
  y: 50,
  duration: 0.3,
  delay: 0.3,
  opacity: 0,
  stagger: 0.15,
  ease: 'bounce.out',
  scrollTrigger: {
      trigger: ".saturntext1",
      scroller: "body",
      start: "top 85%",
      end: "bottom 40%",
      
      scrub: false
  }
})
gsap.from(".saturntext2",{
  x:60,
  opacity:0,
 
  duration:0.5,
  delay:0.6,
  stagger:0.3,
  scrollTrigger:{
   trigger: ".saturntext2",
     scroller: "body",
     start: "top 85%",
     end: "bottom 20%",
    
     
  }
 
 })
 //uranus section
 gsap.from(".uranustext1",{
  x:-60,
  opacity:0,
 
  duration:0.5,
  delay:0.6,
  stagger:0.3,
  scrollTrigger:{
   trigger: ".uranustext1",
     scroller: "body",
     start: "top 85%",
     end: "bottom 20%",
    
     
  }
 
 })
 gsap.from(".uranustext2",{
  y:-100,
  opacity:0,
 
  duration:0.5,
  delay:1,
  stagger:0.3,
  scrollTrigger:{
   trigger: ".uranustext2",
     scroller: "body",
     start: "top 85%",
     end: "bottom 20%",
    
     
  }
 
 })
 gsap.from(".uranustext3",{
  x:100,
  opacity:0,
 
  duration:0.5,
  delay:1,
  stagger:0.3,
  scrollTrigger:{
   trigger: ".uranustext3",
     scroller: "body",
     start: "top 85%",
     end: "bottom 20%",
    
     
  }
 
 })
 gsap.from(".uranus",{
  y:100,
  opacity:0,
 
  duration:0.8,
  delay:0.6,
  stagger:0.5,
  scrollTrigger:{
   trigger: ".uranus",
     scroller: "body",
     start: "top 85%",
     end: "bottom 20%",
    
     
  }
 
 })
//neptune section
gsap.from(".neptunetext1",{
  y:-100,
  opacity:0,
scale:0.2,
  duration:0.8,
  delay:0.6,
  stagger:0.5,
  scrollTrigger:{
   trigger: ".neptunetext1",
     scroller: "body",
     start: "top 90%",
     end: "bottom 20%",
    
     
  }
 
 })
 gsap.from(".neptunetext2",{
 
  opacity:0,

  duration:0.8,
  delay:0.8,
  stagger:0.5,
  scrollTrigger:{
   trigger: ".neptunetext2",
     scroller: "body",
     start: "top 90%",
     end: "bottom 20%",
    
     
  }
 
 })
 gsap.from(".neptunetext3",{
 
  opacity:0,
y:-100,
  duration:0.8,
  delay:0.8,
  stagger:0.5,
  scrollTrigger:{
   trigger: ".neptunetext3",
     scroller: "body",
     start: "top 90%",
     end: "bottom 20%",
    
     
  }
 
 })
 gsap.from(".neptune1",{
 
  opacity:0,
  y:100,
  duration:0.8,
  delay:0.8,
  stagger:0.5,
  scrollTrigger:{
   trigger: ".neptune1",
     scroller: "body",
     start: "top 80%",
     end: "bottom 10%",
    
     
  }
 
 })
