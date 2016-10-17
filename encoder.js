var textAreaContent = document.getElementById('textArea');

var letters = {
 65:"a",
 66:"b",
 67:"c",
 68:"d",
 69:"e",
 70:"f",
 71:"g",
 72:"h",
 73:"i",
 74:"j",
 75:"k",
 76:"l",
 77:"m",
 78:"n",
 79:"o",
 80:"p",
 81:"q",
 82:"r",
 83:"s",
 84:"t",
 85:"u",
 86:"v",
 87:"w",
 88:"x",
 89:"y",
 90:"z",
 32: " "

}


document.getElementById("inputArea").addEventListener("keyup", function(e){
  var userKey = e.keyCode;

   if(userKey == 8){
    textArea.textAreaContent = textArea.textAreaContent.substr(0, textArea.textAreaContent.length - 1)
   }

 if($("input:checked").val() == "cipher"){

 if(userKey + 1 ==91){
  textArea.textAreaContent +="a"
 }
 else if(userKey == 32) {
  textArea.textContent += letters[32];
}
  else{
    textArea.textAreaContent += letters[userKey + 1];
  }
     }

else if($("input:checked").val() == "heiroglyphics"){
    if(userKey == 32) {
      textArea.textContent += letters[32];
    }
    else{
    $("textArea").append("img src='images/heiroglyphics/" + letters[userKey] + ".gif>");

  }
else if($("input:checked").val() == "runes"){
    $("textArea").append("img src='images/heiroglyphics/" + String.fromCharCode(e.keyCode) + ".gif");
}
else if($("input:checked").val() == "echo"){
  document.getElementById("textArea").innerHTML = "<p>" + document.getElementById('inputText').value + "</p>";

}



});

//event handler for radio buttons
$("input[type='radio']").click(function(){
$("input:checked").prop('checked',false);
$(this).prop('checked',true);


});
