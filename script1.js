
/* =========================== typing animation ========================== */

// var typed = new Typed(".typing", {
//     strings: ["Web Designer", "Web Developer", "Graphic Designer", "YouTuber"],
//     typeSpeed:100,
//     BackSpeed:60,
//     loop:true
// })


gsap.to(".hello", {
    y: -20,
    duration: 1,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1
})