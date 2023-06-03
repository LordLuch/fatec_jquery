window.onload = function() {
  document.getElementById("btn").addEventListener("click", btn_click);
}

function btn_click() {
  let req = new XMLHttpRequest();
  req.onreadystatechange = function() {
    document.getElementById("caixa").innerHTML = this.responseText; 
  }
  req.open("GET", "./dados.txt", true);
  req.send();
}