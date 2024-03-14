//smooth scrool
const lenis = new Lenis()
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)
//pointer
window.addEventListener("mousemove",(pointer)=>{
gsap.to(".pointer",{
    top:pointer.pageY-document.querySelector(".pointer").offsetWidth/2,
    left:pointer.pageX-document.querySelector(".pointer").offsetWidth / 2,
})
})
//mouse over
let magic=document.querySelectorAll(".mo");
magic.forEach((m)=>{
    m.addEventListener("mouseover",()=>{
        gsap.to(".pointer",{
            scale:5,
        })
        let a=setTimeout(()=>{
        gsap.to(".pointer",{
            scale:1,
        })
    }, 5000)
    a();
    })
    
})
///about animation
gsap.from(".oo",{
    width:0,
    duration:5,
    scrollTrigger:{
        trigger:".ah",
        scrub:true,
        start:"top 60%",
        end:"bottom 20%",
    }
})
///skill box
gsap.from(".skillbox h2",{
    color:"rgb(3, 8, 28)",
    duration:2,
    scrollTrigger:{
        trigger:".skillbox",
        start:"top 40%",
        scrub:2,
        end:"50% 30%"
    }
})
//flower
gsap.to("#flower",{
    rotate:1060,
    duration:10,
    scrollTrigger:{
        trigger:".pg4",
        scrub:2,
    }
})
//left part of page 4
if(window.innerWidth>600){

gsap.to(".pg4 .right",{
    y:"-60%",
    scrollTrigger:{
        trigger:".pg4",
        scrub:1,
        pin:".pg4",
    }
})
}
//.declaration
gsap.from(".declaration",{
    height:0,
    duration:9,
    scrollTrigger:{
        trigger:"#leee",
        start:"top 50%",
        pin:".pg5",
        scrub:2,
    }
})
// achiviments
