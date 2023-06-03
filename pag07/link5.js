$(document).ready(() => {
  $("#botao1").click(() => { $("p").hide("fast") });
  $("#botao2").click(() => { $("p").show("slow") });
});