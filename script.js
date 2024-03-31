function openNav() {
  document.getElementById("mySidebar").style.left = "0";
  document.getElementsByClassName("content")[0].style.marginLeft = "200px";
}

function closeNav() {
  document.getElementById("mySidebar").style.left = "-200px";
  document.getElementsByClassName("content")[0].style.marginLeft = "0";
}
// back to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Scroll smoothly to the top
  });
}

window.addEventListener("scroll", function() {
  var backToTopBtn = document.getElementById("backToTopBtn");
  
  if (window.pageYOffset > 200) {
    backToTopBtn.style.display = "block"; // Show the button when scrolling down 200px
  } else {
    backToTopBtn.style.display = "none"; // Hide the button when scrolling back to top
  }
});