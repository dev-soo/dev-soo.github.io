window.onload = function(){
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.lastest .lastest__item').forEach((selector) => {
        gsap.timeline({
            scrollTrigger:{
                trigger:selector,
                start:'0% 10%',
                end:'0% 0%',
                scrub:1,
                markers:true
            }
        })
        .to(selector, {transform:'rotateX(-3deg) scale(0.9)',transformOrigin:'top', filter:'brightness(0.3)'},0)
    })

    gsap.timeline({
        scrollTrigger:{
            trigger:'.test',
            start:'0% 100%',
            end:'100% 0%',
            toggleClass:{targets:'main', className:'on'},
            markers:true
        }
    })



    const lenis = new Lenis({
  // 추가된 부분
  duration: 2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
}