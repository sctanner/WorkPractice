

function sendText(message, chats){//update chat
  chats = chats + "\n" + message;
}

//var chats = document.getElementById("textList").innerHTML;

var button = document.getElementById("sendButton");

button.onclick = function(){//when the button is clicked
  var text = document.getElementById("input1").value;

  if(text.length < 1){
    text = "End of List-------";
    var ul = document.getElementById("textBox");
    var li = document.createElement("li");

    li.appendChild(document.createTextNode(text));
    ul.appendChild(li);
    text= "Start New List---"
    var ul = document.getElementById("textBox");
    var li = document.createElement("li");

    li.appendChild(document.createTextNode(text));
    ul.appendChild(li);
    document.getElementById("input1").value = "";//clears the textbox
  }

  else{
  var ul = document.getElementById("textBox");
  var li = document.createElement("li");

  li.appendChild(document.createTextNode(text));
  ul.appendChild(li);
  document.getElementById("input1").value = "";//clears the textbox
}

}
