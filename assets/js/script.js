$(document).ready(function () {

  $("#accordian .left h1").click(function () {
    $('.left h1').addClass('checked');
    $('.right h1').addClass('small');
    $('.logo').addClass('bottom');
    $("#accordian .right").animate({
      width: "9.5%"
    }, 500);
    $("#accordian .left").animate({
      width: "64.55%"
    }, 500);
    $("#accordian .left > div").show(500);
    $("#accordian .right > div").hide(500);
    $("#x").hide(500);
    $("#y").show(500);
    $('.right h1').removeClass('checked');
    $('.left h1').removeClass('small');
  });
  $("#accordian .right h1").click(function () {
    $('.right h1').addClass('checked');
    $('.left h1').addClass('small');
    $('.logo').addClass('bottom');
    $("#accordian .left").animate({
      width: "9.5%"
    }, 500);
    $("#accordian .right").animate({
      width: "64.55%"
    }, 500);
    $("#accordian > .right > div").show(500);
    $("#accordian > .left > div").hide(500);
    $("#x").show(500);
    $("#y").hide(500);
    $('.left h1').removeClass('checked');
    $('.right h1').removeClass('small');
  });
  $(".logo img").click(function () {
    $("#accordian .left").animate({
      width: "34.75%"
    }, 500);
    $("#accordian .right").animate({
      width: "34.75%"
    }, 500);
    $("#accordian .right > div").hide(500);
    $("#accordian .left > div").hide(500);
    $('.left h1').removeClass('checked');
    $('.right h1').removeClass('checked');
    $('.logo').removeClass('bottom');
  });
});