window.onload = function(){
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".masked-image").forEach(item=>{
        gsap.to(item,{
            yPercent:-20,
            ease:'none',
            duration:0.5,
            scrollTrigger:{
                trigger:item,
                start:'top bottom',
                end:'bottom top',
                scrub:0.5
            }
        })
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