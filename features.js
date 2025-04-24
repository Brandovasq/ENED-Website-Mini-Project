// Transition code
document.addEventListener("DOMContentLoaded", () => {
   const header = document.querySelector("header");

   //initial styles for the transition
   header.style.transform = "translateX(-100%)";
   header.style.transition = "1s ease-out";

   // This Triggers transition after short delay
   setTimeout(() => {
      header.style.transform = "translateX(0)";
   }, 100);
});

// dark mode button
function myFunction() {
   document.body.classList.toggle("dark-mode");
   document.querySelector(".container").classList.toggle("dark-mode");
   document.querySelector("header").classList.toggle("dark-mode");
   document.querySelector("main").classList.toggle("dark-mode");
   document.querySelector("nav").classList.toggle("dark-mode");
   document.querySelector("footer").classList.toggle("dark-mode");
}

// Show/hide scroll button on scroll
window.onscroll = function () {
   const btn = document.getElementById("scrollUpBtn");
   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 200) {
      btn.style.display = "block";
   } else {
      btn.style.display = "none";
   }
};
// Smooth scroll to top
function scrollToTop() {
   window.scrollTo({ top: 0, behavior: 'smooth' });
}