gsap.registerPlugin(ScrollTrigger);

gsap.from("#footer", {
  scrollTrigger: {
    trigger: "#footer",
    start: "top 95%",
  },
  opacity: 0,
  y: 80,
  duration: 1.2,
  ease: "power3.out",
});
