function openNav() {
  document.getElementById("mySidebar").style.left = "0";
  document.getElementsByClassName("content")[0].style.marginLeft = "200px";
}

function closeNav() {
  document.getElementById("mySidebar").style.left = "-200px";
  document.getElementsByClassName("content")[0].style.marginLeft = "0";
}