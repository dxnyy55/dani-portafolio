gsap.from(".hobbies .section-title", {
  scrollTrigger: ".hobbies",
  opacity: 0,
  y: -40,
  duration: 1,
});

gsap.from(".hobbies .section-text", {
  scrollTrigger: ".hobbies",
  opacity: 0,
  y: 20,
  duration: 1,
});
