$.get("https://covid.aang.dev/api/covid", function(data, status) {

        data.forEach(dt => {
            $("#kasus h3").append(
                dt.positif
            );
            $("#sembuh h3").append(
                dt.sembuh
            );
            $("#meninggal h3").append(
                dt.meninggal
            );
        });
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


$(".btn1").mouseover(function(){
    $(".box1").show("fast");
});

$(".btn1").mouseout(function(){
    $(".box1").hide("fast");
});

$(".btn2").mouseover(function(){
    $(".box2").show("fast");
});

$(".btn2").mouseout(function(){
    $(".box2").hide("fast");
});

$(".btn3").mouseover(function(){
    $(".box3").show("fast");
});

$(".btn3").mouseout(function(){
    $(".box3").hide("fast");
});

$(".btn4").mouseover(function(){
    $(".box4").show("fast");
});

$(".btn4").mouseout(function(){
    $(".box4").hide("fast");
});