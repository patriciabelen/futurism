
    $(".one").hover(function() {
        $("#intro").toggleClass("hoverone")
    });

    $(".two").hover(function() {
        $("#intro").toggleClass("hovertwo")
    });

    $(".three").hover(function() {
        $("#intro").toggleClass("hoverthree")
    });






/* ------Part One Sequence------  */
gsap.set(".capt", { yPercent: -5, xPercent: 0});
gsap.set(".capf", { xPercent: -100, yPercent: -5});
gsap.set(".minerva", { yPercent: 10, xPercent: -100});
gsap.set(".apollo", { yPercent: -50, xPercent: 50});
gsap.set(".dannunzio", { yPercent: -20});
gsap.set(".clusterOne", { yPercent: 5});

gsap.to(".capf", {
  yPercent: -500,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterOne",
    scrub: 1
  }, 
});

gsap.to(".capt", {
  yPercent: -5,
  xPercent: 200,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterOne",
    scrub: 1
  }, 
});

gsap.to(".minerva", {
   yPercent: -10,
  xPercent: 50,
  rotation: 40,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterOne",
    scrub: 1
  }, 
});

gsap.to(".apollo", {
   yPercent: 50,
  xPercent: -200,
  rotation: 20,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterOne",
    scrub: 1
  }, 
});

gsap.to(".dannunzio", {
  yPercent: 20,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterOne",
    scrub: 1
  }, 
});

gsap.to(".caption", {
  yPercent: 100,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterOne",
  // markers:true,
    end: "bottom center",
    scrub: 1
  }, 
});

gsap.to(".clusterOne", {
  yPercent: -5,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterOne",
    end: "bottom center",
    scrub: 1
  }, 
});



/* ------Part Two Sequence------  */
gsap.set(".zang", { yPercent: -20, xPercent: -50});
gsap.set(".lesmots", { yPercent: 25});
gsap.set(".scrab", { yPercent: -50});
gsap.set(".clusterTwo", { yPercent: 5});

gsap.to(".zang", {
  yPercent: 20,
  xPercent: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterTwo",
    scrub: 1
  }, 
});


gsap.to(".lesmots", {
  yPercent: -5,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterTwo",
    scrub: 1
  }, 
});


gsap.to(".scrab", {
  yPercent: 30,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterTwo",
    scrub: 1
  }, 
});


gsap.to(".clusterTwo", {
  yPercent: -5,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterTwo",
  // markers:true,
    end: "bottom center",
    scrub: 1
  }, 
});



/* ------Part Three Sequence------  */
gsap.set(".parole", { yPercent: -20, xPercent: 50});
gsap.set(".mallarme", { yPercent: -5, xPercent: 0});
gsap.set(".clusterThree", { yPercent: 0});

gsap.to(".parole", {
  yPercent: -20,
  xPercent: -200,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterThree",
    scrub: 1
  }, 
});


gsap.to(".mallarme", {
  yPercent: -5,
  xPercent: 50,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterThree",
    scrub: 1
  }, 
});

gsap.to(".clusterThree", {
  yPercent: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterThree",
  // markers:true,
    end: "bottom center",
    scrub: 1
  }, 
});




/* ------Part Four Sequence------  */
gsap.set(".guerre", { yPercent: 0, xPercent: -150});
gsap.set(".belle", { yPercent: -120, xPercent: -50, rotation: -180});
gsap.set(".numbers", { yPercent: 0, xPercent: 200});
gsap.set(".mmss", { yPercent: 0, xPercent: 100, rotation: 30});
gsap.set(".amii", { yPercent: -20, xPercent: 0, rotation: 180});
gsap.set(".mnvh", { yPercent: 100, xPercent: 0, rotation: -50});
gsap.set(".verbal", { yPercent: 0, xPercent: 0, rotation: -180});
gsap.set(".clusterFour", { yPercent: 0, xPercent: 0});

gsap.to(".guerre", {
  yPercent: 0,
  xPercent: 150,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterFour",
    scrub: 1
  }, 
});

gsap.to(".belle", {
  yPercent: 120,
  xPercent: 220,
  rotation: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterFour",
    scrub: 1
  }, 
});

gsap.to(".numbers", {
  yPercent: 0,
  xPercent: -150,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterFour",
    scrub: 1
  }, 
});

gsap.to(".mmss", {
  yPercent: 0,
  xPercent: -100,
  rotation: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterFour",
    scrub: 1
  }, 
});

gsap.to(".amii", {
  yPercent: 100,
  xPercent: 20,
  rotation: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterFour",
    scrub: 1
  }, 
});

gsap.to(".mnvh", {
  yPercent: -100,
  xPercent: 0,
  rotation: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterFour",
    scrub: 1
  }, 
});

gsap.to(".verbal", {
  yPercent: -200,
  xPercent: 0,
  rotation: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterFour",
    scrub: 1
  }, 
});



gsap.to(".clusterFour", {
  yPercent: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterFour",
  // markers:true,
    end: "bottom center",
    scrub: 1
  }, 
});


/* --- Part One --- */
var vPartOne = gsap.timeline(), 
    PartOne = new SplitText(".textOne", {type:"words,chars"}), 
    chars = PartOne.chars;


vPartOne.from(chars, {
  duration: 2,
  opacity:0,
  y:0,
  ease:"circ.out",
  stagger: 0.02,
scrollTrigger: {
    trigger: ".textOne",
//markers:true,
    start: "top 75%",
   end: "bottom center",
    scrub:1
  }

}, "+=0");



/* --- Part Two --- */
  
var vPartTwo = gsap.timeline(), 
    PartTwo = new SplitText(".textTwo", {type:"words,chars"}), 
    chars = PartTwo.chars; //an array of all the divs that wrap each character


vPartTwo.from(chars, {
  duration: 2,
  opacity:0,
  y:0,
  ease:"circ.out",
  stagger: 0.02,
scrollTrigger: {
    trigger: ".textTwo",
//markers:true,
    start: "top 75%",
   end: "bottom center",
    scrub:1
  }
}, "+=0");


/* --- Part Three --- */
  
var vPartThree = gsap.timeline(), 
    PartThree = new SplitText(".textThree", {type:"words,chars"}), 
    chars = PartThree.chars; //an array of all the divs that wrap each character


vPartThree.from(chars, {
  duration: 2,
  opacity:0,
  y:0,
  ease:"circ.out",
  stagger: 0.02,
scrollTrigger: {
    trigger: ".textThree",
//markers:true,
    start: "top 75%",
   end: "bottom center",
    scrub:1
  }
}, "+=0");


/* --- Part Four --- */
  
var vPartFour = gsap.timeline(), 
    PartFour = new SplitText(".textFour", {type:"words,chars"}), 
    chars = PartFour.chars; //an array of all the divs that wrap each character


vPartFour.from(chars, {
  duration: 2,
  opacity:0,
  y:0,
  ease:"circ.out",
  stagger: 0.02,
scrollTrigger: {
    trigger: ".textFour",
//markers:true,
    start: "top 75%",
   end: "bottom center",
    scrub:1
  }
}, "+=0");


/* --- Part Five --- */
  
var vPartFive = gsap.timeline(), 
    PartFive = new SplitText(".textFive", {type:"words,chars"}), 
    chars = PartFive.chars; //an array of all the divs that wrap each character


vPartFive.from(chars, {
  duration: 2,
  opacity:0,
  y:0,
  ease:"circ.out",
  stagger: 0.02,
scrollTrigger: {
    trigger: ".textFive",
//markers:true,
    start: "top 75%",
   end: "bottom center",
    scrub:1
  }
}, "+=0");



/* --- Part Six --- */
  
var vPartSix = gsap.timeline(), 
    PartSix = new SplitText(".textSix", {type:"words,chars"}), 
    chars = PartSix.chars; //an array of all the divs that wrap each character


vPartSix.from(chars, {
  duration: 2,
  opacity:0,
  y:0,
  ease:"circ.out",
  stagger: 0.02,
scrollTrigger: {
    trigger: ".textSix",
//markers:true,
    start: "top 75%",
   end: "bottom center",
    scrub:1
  }
}, "+=0");



ScrollTrigger.addEventListener("refresh", setupSplits);
setupSplits();


