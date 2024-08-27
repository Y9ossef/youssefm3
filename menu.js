// Smooth scrolling for navbar links
document.querySelectorAll('nav ul li a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
  
  // Button click to explore the main menu
  document.getElementById('explore-menu').addEventListener('click', () => {
      window.location.href = 'index.html'; // Adjust the URL if needed
  });
  