$(document).ready(() => {
  $("#lista_teste").find("li").each(function() { 
    $(this).html($(this).html() + "Olá");
  });
});