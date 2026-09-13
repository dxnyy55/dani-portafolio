gsap.from(".sobre-mi .section-title", {
  scrollTrigger: ".sobre-mi",
  opacity: 0,
  y: -40,
  duration: 1,
});

gsap.from(".sobre-mi .section-text", {
  scrollTrigger: ".sobre-mi",
  opacity: 0,
  y: 20,
  duration: 1,
});
