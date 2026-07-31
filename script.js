function hello(){
  alert("Welcome to Sojib Website!");
}
document.querySelectorAll(".card").forEach(card=>{
  card.addEventListener("mouseenter",()=>{
    card.style.transform="translateY(-10px)";
  });

  card.addEventListener("mouseleave",()=>{
    card.style.transform="translateY(0)";
  });
});
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 30) {
    navbar.style.background = "rgba(255,255,255,.12)";
    navbar.style.backdropFilter = "blur(40px)";
  } else {
    navbar.style.background = "rgba(255,255,255,.08)";
    navbar.style.backdropFilter = "blur(30px)";
  }
});
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

cards.forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "0.6s ease";
  observer.observe(card);
});
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        toggle.innerHTML = "☀️";
    } else {
        toggle.innerHTML = "🌙";
    }
});