document.addEventListener("DOMContentLoaded", function () {
  let menu = document.querySelector("#header ul");
  let bar = document.querySelector("#header .fa-bars");

  if (bar && menu) {
    bar.addEventListener("click", function () {
      menu.classList.toggle("show");
    });
  } else {
    console.error("Menu or menu icon not found!");
  }

  // Scroll event listener for updating active class in navbar
  window.addEventListener("scroll", function () {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("#header ul li a");

    sections.forEach(function (section) {
      let sectionTop = section.offsetTop - 100;
      let sectionBottom = sectionTop + section.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
        navLinks.forEach((link) => link.classList.remove("active"));
        
        // Find the matching link based on href
        let targetLink = document.querySelector(`#header ul li a[href="#${section.id}"]`);
        if (targetLink) {
          targetLink.classList.add("active");
        }
      }
    });
  });
});
