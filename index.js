 // JavaScript to toggle the dropdown for Company
 document.getElementById("menuCompany").addEventListener("click", function() {
    var dropdown = this.querySelector(".dropdown");
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
  });

  // JavaScript to toggle the dropdown for Careers
  document.getElementById("menuCareers").addEventListener("click", function() {
    var dropdown = this.querySelector(".dropdown");
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
  });

  // JavaScript to toggle the dropdown for About
  document.getElementById("menuAbout").addEventListener("click", function() {
    var dropdown = this.querySelector(".dropdown");
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
  });


  
  // JavaScript to hide dropdowns initially
  window.onload = function() {
    document.querySelectorAll(".dropdown").forEach(function(dropdown) {
      dropdown.style.display = "none";
    });
  };

  function adjustImage() {
    var desktopImage = document.querySelector('.desktop-image');
    var mobileImage = document.querySelector('.mobile-image');

    if (window.innerWidth <= 950) {
      desktopImage.style.display = 'none';
      mobileImage.style.display = 'block';
    } else {
      desktopImage.style.display = 'block';
      mobileImage.style.display = 'none';
    }
  }

  // Initial call to set the image on page load
  adjustImage();

  // Attach the function to the window resize event
  window.addEventListener('resize', adjustImage);


  document.addEventListener('DOMContentLoaded', function () {
    // Get the menu icon and the navigation ul
    var menuIcon = document.querySelector('.menu');
    var navList = document.querySelector('nav ul');
    var b = document.querySelector('.b');

    // Add click event listener to the menu icon
    menuIcon.addEventListener('click', function () {
      // Toggle the visibility of the navigation ul
      navList.style.display = (navList.style.display === 'none' || navList.style.display === '') ? 'block' : 'none';
      b.style.display = (b.style.display === 'none' || b.style.display === '') ? 'block' : 'none';
    });
  });
