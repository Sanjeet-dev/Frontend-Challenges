const inputText = document.querySelector("#textInput");

inputText.addEventListener("keydown", function(event){
	document.querySelector("#charCount").textContent = event.target.value.length;
});
