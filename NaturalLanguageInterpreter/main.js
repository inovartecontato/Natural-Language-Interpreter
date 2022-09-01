//Add Enter Key as Option
var input = document.getElementById("userinput");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("inputButton").click();
  }
})
//Function to call the interpreter
function GO(){	
	const DisplayMessage = document.getElementById("displaymessage");
	DisplayMessage.textContent = Interpret(document.getElementById('userinput').value);
}
function Interpret(command){
	command_ = IdentifyCommands(command);
	
	//ADD NEW COMMANDS HERE:
	if (command_.includes("talk_to!")){
		return "hello user!";
	}
	if (command_.includes("goodbye!")){
		return "Goodbye!";
	}
	if (command_.includes("how_are_you!")){
		return "I'm fine! Thanks for asking!";
	}
	if (command_.includes("play_music!")){
		return "Playing music...";
	}
	if (command_.includes("show_alert!")){
		alert("like this?")
		return "there you go...";
	}

}
//Load Vocabulary
function IdentifyCommands(phrase){
	fetch("./vocabulary.json")
	.then(response => {
		return response.json();
	})
	.then(data => console.log(data));
	macro = data;
	for(x in macro){
		var newlist = macro[x];
		phrase = AddMacro(newlist, phrase);
	}
	//alert (phrase);//Shows final phrase
	return phrase;
}
//Replace Text with Vocabulary Terms
function AddMacro(lista, phrase){
	for(i in lista){
		checking = lista[i];
		if(phrase.includes(checking)){
			newterm = lista[0];
			phrase = phrase.replace(checking,newterm);
			}
		else{
			continue;
		}
	}
	return phrase;
}