$(document).click(() => {
  $("a").click(() => {
    $("p").css("border", "3px dashed red");
    $("p").text("Mário");
  });
});