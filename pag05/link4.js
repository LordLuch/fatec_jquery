$(document).click(() => {
  $("#lista_teste").hover(
    function() { $(this).addClass("fundo"); },
    function() { $(this).removeClass("fundo"); }
  );
  $("#lista_teste2").hover(
    function() { $(this).addClass("fundo"); },
    function() { $(this).removeClass("fundo"); }
  );
});