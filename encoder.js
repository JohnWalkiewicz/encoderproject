document.getElementById("inputArea").addEventListener("keyup", function(){
  document.getElementById("textArea").innerHTML = "<p>" + document.getElementById('inputText').value + "</p>"
});
