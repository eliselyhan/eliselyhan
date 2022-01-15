/* $(document).ready(function(){

	console.log("hello!");

	var myFavoriteBook = "A Raisin in the Sun";
	console.log("My favorite book is " +myFavoriteBook);


	window.onclick = changeBG;

	function changeBG(){
		document.getElementsByTagName("Body")[0].style.backgroundColor = "#C1E3B0";
		document.getElementsByTagName("Body")[0].style.color="aliceblue";
	}


});

*/

var i = 0;
var txt = 'Welcome!'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("welcome").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onclick = typeWriter;



