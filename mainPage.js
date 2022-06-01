var button = document.getElementById("changePage");


button.onclick = function(){
  var choice = document.getElementById("input1").value;
  let fletter = choice.charAt(0);
  if(fletter == 1 || fletter == 'C'){
    //go to chatbox
    alert("Ur going to the chatbox")
  }
  else{
    //roll dice
    var w = window.open("");
    w.document.writeln("")
  }
}
