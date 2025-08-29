gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".section").forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top 85%",
      toggleActions: "play none none reverse"
    }
  });
});
