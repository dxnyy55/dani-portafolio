window.onload = () => {
  const tl = gsap.timeline();

  tl.from("#inicio-title", {
    opacity: 0,
    y: -40,
    duration: 1,
    ease: "power3.out",
  })
  .from("#inicio-subtitle", {
    opacity: 0,
    y: 20,
    duration: 1,
    ease: "power3.out",
  })
  .from("#inicio-button", {
    opacity: 0,
    scale: 0.8,
    duration: 0.8,
    ease: "back.out(1.7)",
  });
};
