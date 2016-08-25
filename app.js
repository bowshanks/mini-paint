$(document).ready(function () {
  var box = $(".box"),
      reset = $("#reset"),
      red = $("#red"),
      green = $("#green"),
      blue = $("#blue"),
      yellow = $("#yellow"),
      white = $("#white"),
      color = "white"
      colors = "white green red blue yellow";

  reset.on("click", function() {
    box.removeClass(color);
  })

  red.on("click", function() {
    color = "red";
  })

  green.on("click", function() {
    color = "green";
  })

  blue.on("click", function() {
    color = "blue";
  })

  yellow.on("click", function() {
    color = "yellow";
  })

  white.on("click", function() {
    color = "white";
  })

  box.hover(  function() {
    $(this).addClass("cursorAct");
  }
  ,
  function() {
    $(this).removeClass( "cursorAct" );
  })

  box.css('cursor', 'none');

  box.on("click", function () {
    $(this).addClass(color);
  })

  box.on("dblclick", function () {
    //var activeClick = false;
    $(this).removeClass(colors);
  })


})
