const nav = document.querySelector(".mobile_nav_list");
const burger = document.querySelector(".nav_burger");

burger.addEventListener("click", () => {
  nav.classList.toggle("show_mobile_nav");
});
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }

  toggleButton.addEventListener("click", () => {
    let theme = document.documentElement.getAttribute("data-theme");
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  });
});
// JavaScript for carousel functionality
document.addEventListener("DOMContentLoaded", function() {
  const carouselItems = document.querySelectorAll(".carousel-item");
  let currentSlide = 0;

  function showSlide(index) {
    // Remove active class from all slides
    carouselItems.forEach(item => {
      item.classList.remove("active");
    });

    // Add active class to the selected slide
    carouselItems[index].classList.add("active");
  }

  // Automatically move to the next slide every 5 seconds
  function nextSlide() {
    currentSlide = (currentSlide + 1) % carouselItems.length;
    showSlide(currentSlide);
  }

  // Change slide every 5 seconds
  setInterval(nextSlide, 5000);
});
// Function to animate count up effect
function animateCountUp(target, start, end, duration) {
  let current = start;
  const increment = end > start ? 1 : -1;
  const stepTime = Math.abs(Math.floor(duration / (end - start)));
  const timer = setInterval(function() {
    current += increment;
    target.textContent = current;
    if (current === end) {
      clearInterval(timer);
    }
  }, stepTime);
}

// Trigger the animation when the element is in view or on page load
function triggerCountUpAnimation() {
  const countUpElement = document.getElementById('countupNumber');
  const startValue = 0; // Starting value
  const endValue = 2024; // Desired end value
  const animationDuration = 2000; // Duration in milliseconds

  animateCountUp(countUpElement, startValue, endValue, animationDuration);
}

// Call the function when the page is loaded or when the section is in view
window.addEventListener('load', triggerCountUpAnimation);
