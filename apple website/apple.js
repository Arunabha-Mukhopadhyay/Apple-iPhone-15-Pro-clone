function locoScroll(){
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  
}
locoScroll()

var tl=gsap.timeline()

tl.from("#page1 span",{
  y:40,
  opacity:0,
  duration:3,
  stagger:0.14
})

tl.from("#page2-contents h1 span",{
  y:20,
  opacity:0,
  stagger:0.1,
  duration:0.5,
})
tl.from("#page2-contents h3 span",{
  y:20,
  opacity:0,
  stagger:0.1,
  duration:0.5,
})


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// function page4Animation(){
//   gsap.from("#page4-contents h1 span",{
//     y:100,
//     stagger:0.2,
//     duration:1,
//     scrollTriger:{
//       trigger:"#page4",
//       scroller:"#main",
//       start:"top 30%",
//       end:"top 46%",
//       // markers:true,
//       scrub:2
//     }
//   })
// }
// page4Animation()

tl.from("#page4-contents h1 span",{
  y:10,
  opacity:0,
  stagger:0.1,
})



