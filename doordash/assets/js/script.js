const navbar = document.querySelector(".navbar");
const floatingNav = document.querySelector(".floating-navbar");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    navbar.style.display = "none";
    floatingNav.classList.add("scrolled");
  } else {
    navbar.style.display = "flex";
    floatingNav.classList.remove("scrolled");
  }
}
