$(document).ready(() => {
  $(bot1).click((event) => {
    event.preventDefault();
    let result = parseInt($("#campo1").val()) + parseInt($("#campo2").val());
    alert(`O resultado é ${result}`);
    $("h1").text(`Olá! O resultado da soma é ${result}, parabéns.`);
  });
});