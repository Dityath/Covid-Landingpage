/* const navbar = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;

    if (top >= 75) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }
} */

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("demo").innerHTML = myObj.name;
  }
};
xmlhttp.open("GET", "https://api.kawalcorona.com/indonesia/", true);
xmlhttp.send();

$(document).ready(function(){
    $('.slider').slick({
      autoplay: false,
      autoplaySpeed: 2500,
      adaptiveHeight: true,
      slidesToShow: 1,
      infinite: true,
      arrows: false,
    });
  });