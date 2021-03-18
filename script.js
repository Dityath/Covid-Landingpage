/* const navbar = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;

    if (top >= 75) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }
} */

let data;

$.get("https://covid.aang.dev/api/covid", (data) => {
        console.log(data);
    });

$(document).ready(function(){
    $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 5000,
      adaptiveHeight: true,
      slidesToShow: 1,
      infinite: true,
      arrows: false,
    });
  });