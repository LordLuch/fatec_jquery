$(document).ready(() => {
  $("#bot1").click(() => {
    if($("#campo1").val() !== $("#campo2").val()) {
      alert("Valores diferentes.");
    } else {
      alert("Valores iguais.");
    }
  });
});