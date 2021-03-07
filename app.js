var btnTranslate = document.querySelector("#btn-translate");
var inputArea = document.querySelector("#input-area");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/pirate.json"

function getTranslationURL(input) {
  return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("Server is Down! Try again after some moment.")
}

btnTranslate.addEventListener("click", function clickEventHandler() {
  var inputText = inputArea.value;

  fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText
    })
    .catch(errorHandler)
})
