/*Global Variables*/

var textArea = document.getElementById('textArea');
var letterObject = {

/*Object for translating cipher, heiroglyphics, runes*/
32: " ",
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
 90:"z"



}


document.getElementById("inputArea").addEventListener("keyup", function(e){
  var keyDown = e.keyCode;

if(keyDown == 32) {
    textArea.textContent += letterObject[32];
  }
else if(keyDown == 8){
    textArea.textContent = textArea.textContent.substr(0, textArea.textContent.length - 1)
}


else if($("input:checked").val() == "cipher"){

if(keyDown + 1 ==91){
  textArea.textContent +="a"
}
else if(keyDown == 32) {
  textArea.textContent += letterObject[32];
}
else{
  textArea.textContent += letterObject[keyDown + 1];
}
    }

  else if($("input:checked").val() == "heiroglyphics"){
    if(keyDown == 32) {
      textArea.textContent += letterObject[32];
    }
    else{
        $("#textArea").append("<img src='images/heiroglyphics/" + letterObject[keyDown] + ".gif'>");
    }

  }

  else if($("input:checked").val() == "runes"){

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
