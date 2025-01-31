let menu = document.querySelector("#header ul");
let bar = document.querySelector("#header .fa-bars");

bar.addEventListener("click", function() {menu.classList.toggle("show");});

// Add event listener to update active class on nav items
window.addEventListener("scroll", function() {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("#header ul li a");

  sections.forEach(function(section, index) {
    if (window.scrollY >= section.offsetTop - 100 && window.scrollY < section.offsetTop + section.offsetHeight) {
      navLinks.forEach(function(link) {
        link.classList.remove("active");
      });
      navLinks[index].classList.add("active");
    }
  });
});

