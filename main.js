
var prevControl = document.querySelector("#prevButton");
prevControl.addEventListener("click", function (event) {
	console.log("goodbye")
        var newPage = "THE Campion family seem to have been both gentlefolk and yeomen, and to have been widely scattered over the land: in Northamptonshire, Warwickshire, Essex, Sussex, and Devon. Nothing is definitely known, at present, as to which branch of the Campion family the Blessed Edmund belonged. Unlike many of the martyrs of Tudor and Stuart times, he was what is called a “born” Catholic: in more accurate phrase, a born heathen, as we all are! but baptized in his parents’ religion soon after his birth in London, on the Feast of St. Paul the Apostle, January 25, in the year 1540, New Style.";
        document.getElementById("page").setAttribute("bmfont-text", "text: " + newPage + " ; width: 800");
  
})

var nextControl = document.querySelector("#nextButton");
nextControl.addEventListener("click", function (event) {
	console.log("hello")
        var newPage = "Unlike many of the martyrs of Tudor and Stuart times, he was what is called a “born” Catholic: in more accurate phrase, a born heathen, as we all are! but baptized in his parents’ religion soon after his birth in London, on the Feast of St. Paul the Apostle, January 25, in the year 1540, New Style.";
        document.getElementById("page").setAttribute("bmfont-text", "text: " + newPage + " ; width: 800");

})