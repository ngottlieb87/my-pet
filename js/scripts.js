$(document).ready(function(){
  $("button#spooky").click(function(){
    $("body").removeClass();
    $("body").addClass("dark");

  });
  $("button#angelic").click(function(){
    $("body").removeClass();
    $("body").addClass("light");

  });
});
