gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-title",{y:100,opacity:0,duration:1});
gsap.from(".hero-sub",{y:50,opacity:0,duration:1,delay:0.3});
gsap.from(".cta-btn",{scale:0,duration:0.8,delay:0.6});

gsap.utils.toArray(".waffle-card").forEach(card=>{
  gsap.from(card,{
    scrollTrigger:card,
    y:100,
    opacity:0,
    duration:1
  });
});

window.addEventListener("scroll",()=>{
  document.querySelector(".navbar").classList.toggle("scrolled",window.scrollY>50);
});

/* Counter Animation */
const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{
  ScrollTrigger.create({
    trigger:counter,
    onEnter:()=>{
      let target=+counter.getAttribute("data-target");
      gsap.to(counter,{
        innerText:target,
        duration:2,
        snap:{innerText:1}
      });
    }
  });
});