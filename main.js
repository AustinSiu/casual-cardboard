window.onload = function() {
    var fileInput = document.getElementById('fileInput');
    // var fileDisplayArea = document.getElementById('fileDisplayArea');

    fileInput.addEventListener('change', function(e) {
      // Put the rest of the demo code here.
      var file = fileInput.files[0];
      var textType = /text.*/;
      if (file.type.match(textType)) {
          var reader = new FileReader();

          reader.onload = function(e) {
            fileDisplayArea.innerText = reader.result;
          }

          reader.readAsText(file);  
        } else {
          fileDisplayArea.innerText = "File not supported!";
        }
    });
}

var prevControl = document.querySelector("#prevButton");
prevControl.addEventListener("click", function (event) {
  console.log("prev event heard")
  var newPage = "herro"
  // parse or read from cached gutenburg, save to newPage
  document.getElementById("page").setAttribute("bmfont-text", "text: " + newPage + " ; width: 800");
})

var nextControl = document.querySelector("#nextButton");
nextControl.addEventListener("click", function (event) {
  console.log("next event heard")
  var newPage = readTextFile("file:///Users/asiu/Documents/casual-cardboard/resources/gutenburg.txt");
  // parse or read from cached gutenburg, save to newPage
  document.getElementById("page").setAttribute("bmfont-text", "text: " + newPage + " ; width: 800");
})