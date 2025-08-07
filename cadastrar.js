document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");

  container.style.opacity = '0';
  container.style.transform = 'translateY(40px)';

  void container.offsetWidth;

  container.style.animation = "slideUpFadeIn 0.8s ease forwards";
});
