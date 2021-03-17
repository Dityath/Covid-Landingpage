/* const navbar = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;

    if (top >= 75) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }
} */

$(document).ready(function(){
    $('.slider').slick({
      autoplay: false,
      autoplaySpeed: 2500,
    });
  });