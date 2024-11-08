
gsap.to(".marque",{
    transform:'translateX(-120%)',
    duration:2,
    scrollTrigger:{
        trigger:".marque",
        scroller:"body",
        start: 'top 80%',
        end:'top 20%',
        scrub:3
    }
})
  
gsap.from(".page4 h3",{
    opacity:0,
    duration:1,
    y:30,
    scrollTrigger:{
        trigger:'.page4 h3',
        scroller:'body',
        start:'top 70%',
        end:'top 30%',
        scrub:2
    }
})

gsap.from(".aboutlinks a",{
    opacity:0,
    duration:1,
    y:30,
    scrollTrigger:{
        trigger:'.aboutlinks a',
        scroller:'body',
        start:'top 80%',
        end:'top 40%',
        scrub:2
    }
})

gsap.from(".about h3",{
    opacity:0,
    duration:1,
    x:30,
    scrollTrigger:{
        trigger:'.about h3',
        scroller:'body',
        start:'top 80%',
        end:'top 50%',
        scrub:2
    }
})

gsap.from(".projects h3",{
    opacity:0,
    duration:1,
    x:30,
    scrollTrigger:{
        trigger:'.projects h3',
        scroller:'body',
        start:'top 80%',
        end:'top 50%',
        scrub:2
    }
})

gsap.from(".cc img",{
    opacity:0,
    duration:1,
    y:30,
    scrollTrigger:{
        trigger:'.cc img',
        scroller:'body',
        start:'top 80%',
        end:'top 60%',
        scrub:2
    }
})

gsap.from(".btns a",{
    opacity:0,
    duration:1,
    x:30,
    scrollTrigger:{
        trigger:'.btns a',
        scroller:'body',
        start:'top 80%',
        end:'top 60%',
        scrub:2
    }
})

gsap.from(".page1 h1",{
    opacity:0,
    duration:1,
    x:30  
})

gsap.from(".page1 img",{
    opacity:0,
    duration:1,
    y:30  
})

gsap.from(".content h3",{
    opacity:0,
    duration:1,
    y:30,
    scrollTrigger:{
        trigger:'.content h3',
        scroller:'body',
        start:'top 80%',
        end:'top 50%',
        scrub:2
    }
})

gsap.from(".heading2 h3",{
    opacity:0,
    duration:1,
    x:30,
    scrollTrigger:{
        trigger:'.heading2 h3',
        scroller:'body',
        start:'top 80%',
        end:'top 50%',
        scrub:2
    }
})

gsap.from(".heading2 p",{
    opacity:0,
    duration:1,
    y:30,
    scrollTrigger:{
        trigger:'.heading2 p',
        scroller:'body',
        start:'top 80%',
        end:'top 50%',
        scrub:2
    }
})

