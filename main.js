document.addEventListener('DOMContentLoaded', function () {
  // Initialize Typed.js
  var typed = new Typed(".text", {
      strings: ["English student", "web developer", "freelancer", "photographer", "translator"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 2000,
      loop: true,
  });

  // Function to toggle the navigation menu
  function menutoggle() {
      var nav = document.querySelector(".nav");
      // Check if the navigation is currently visible
      if (getComputedStyle(nav).display === "flex") {
          nav.style.display = "none"; // If navigation is visible, hide it
      } else {
          nav.style.display = "flex"; // If navigation is hidden, show it
      }
  }

  // Toggle the navigation menu when the menu icon is clicked
  var menu = document.getElementById("menu");
  menu.addEventListener("click", menutoggle);

  // Close the menu when a link is clicked
  document.querySelectorAll(".nav a").forEach(function (link) {
      link.addEventListener("click", function () {
          var nav = document.querySelector(".nav");
          // Close the menu if it's open
          if (getComputedStyle(nav).display === "flex") {
              nav.style.display = "none";
          }
      });
  });

  // Hide navigation menu by default on page load
  var nav = document.querySelector(".nav");
  nav.style.display = "none";

  // Add event listener for window resize to handle responsiveness
  window.addEventListener("resize", function () {
      var nav = document.querySelector(".nav");
      // Ensure navigation is always visible on wider screens
      if (window.innerWidth > 500) {
          nav.style.display = "flex";
      } else {
          // Hide navigation on smaller screens by default
          nav.style.display = "none";
      }
  });

  // Smooth scroll function
  function smoothScroll(e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      const offsetTop = document.querySelector(href).offsetTop;

      window.scrollTo({
          top: offsetTop,
          behavior: "smooth"
      });

      // Close the menu if it's open
      menutoggle();
  }

  // Attach smooth scroll event to navigation links
  const links = document.querySelectorAll(".nav a");
  for (const link of links) {
      link.addEventListener("click", smoothScroll);
  }
});
