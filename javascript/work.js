let nav = document.querySelector(".navigation_wrap");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 10) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.remove("scroll-on");
  }
}