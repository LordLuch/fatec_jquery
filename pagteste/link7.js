$(document).ready(() => {
  $("body").find("p").each(function() { 
    $(this).html($(this).html() + "Olá");
  });
});