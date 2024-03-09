document.addEventListener('DOMContentLoaded', function () {
  var typed = new Typed(".text", {
    strings: ["student", "Front-End", "web developer" ,  "freelancer", "blogger", "photographer", ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
  });

  var nav = document.querySelector(".nav");
  var menu = document.getElementById("menu");

  // Function to toggle the navigation menu
  function menutoggle() {
    if (nav.style.display === "" || nav.style.display === "none") {
      nav.style.display = "flex";
    } else {
      nav.style.display = "none";
    }
  }

  // Toggle the navigation menu when the menu icon is clicked
  menu.addEventListener("click", menutoggle);

  // Close the menu when a link is clicked
  document.querySelectorAll(".nav a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 500) {
        nav.style.display = "none";
      }
    });
  });

  // Add event listener for window resize to handle responsiveness
  window.addEventListener("resize", function () {
    if (window.innerWidth > 500) {
      nav.style.display = "flex"; // Ensure navigation is always visible on wider screens
    } else {
      nav.style.display = "none"; // Hide navigation on smaller screens by default
    }
  });
});
