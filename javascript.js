function ChangePrice(){
	var selected = document.getElementById("strila-select").value;
	switch(selected) {
		case "1 шт.": 
		document.getElementById("strila-price").innerHTML = "12 UAH"; break;
		case "6 шт.": 
		document.getElementById("strila-price").innerHTML = "72 UAH"; break;
		case "12 шт.": 
		document.getElementById("strila-price").innerHTML = "144 UAH"; break;
		case "32 шт.": 
		document.getElementById("strila-price").innerHTML = "384 UAH"; break;
	}
	var selected = document.getElementById("freska-select").value;
	switch(selected) {
		case "1 шт.": 
		document.getElementById("freska-price").innerHTML = "17 UAH"; break;
		case "6 шт.": 
		document.getElementById("freska-price").innerHTML = "102 UAH"; break;
		case "12 шт.": 
		document.getElementById("freska-price").innerHTML = "204 UAH"; break;
		case "32 шт.": 
		document.getElementById("freska-price").innerHTML = "544 UAH"; break;
	}
	var selected = document.getElementById("truffle-select").value;
	switch(selected) {
		case "1 шт.": 
		document.getElementById("truffle-price").innerHTML = "10 UAH"; break;
		case "6 шт.": 
		document.getElementById("truffle-price").innerHTML = "60 UAH"; break;
		case "12 шт.": 
		document.getElementById("truffle-price").innerHTML = "120 UAH"; break;
		case "32 шт.": 
		document.getElementById("truffle-price").innerHTML = "320 UAH"; break;
	}
}
var start1 = 0, start2 = 0, start3 = 0;
function Open_strila() {
	var elem1 = document.getElementById("strila");
	if(start1==0){
		elem1.style.width = "300px";
		elem1.style.height = "300px";
		elem1.style.padding = "10px 10px 10px 10px";
		elem1.style.margine = "100px 100px 100px 0px";
		elem1.style.backgroundColor = "transparent";
		elem1.style.position = "absolute";
		elem1.style.cursor = "zoom-out";
		start1 = 1;
	} else {
		elem1.style.width = "150px";
		elem1.style.height = "150px";
		elem1.style.margine = "10px 10px 10px 10px";
		elem1.style.padding = "0px";
		elem1.style.borderRadius = "50%";
		elem1.style.cursor = "zoom-in";
		elem1.style.cssFloat = "right";
		elem1.style.position = "inherit";
		start1 = 0;
	}
}
function Open_freska() {
	var elem2 = document.getElementById("freska");
	if(start2==0){
		elem2.style.width = "300px";
		elem2.style.height = "300px";
		elem2.style.padding = "10px 10px 10px 10px";
		elem2.style.margine = "100px 100px 100px 0px";
		elem2.style.backgroundColor = "transparent";
		elem2.style.position = "absolute";
		elem2.style.cursor = "zoom-out";
		start2 = 1;
	} else {
		elem2.style.width = "150px";
		elem2.style.height = "150px";
		elem2.style.margine = "10px 10px 10px 10px";
		elem2.style.padding = "0px";
		elem2.style.borderRadius = "50%";
		elem2.style.cursor = "zoom-in";
		elem2.style.cssFloat = "right";
		elem2.style.position = "inherit";
		start2 = 0;
	}
}

function Open_truffle() {
	var elem3 = document.getElementById("truffle");
	if(start3==0){
		elem3.style.width = "300px";
		elem3.style.height = "300px";
		elem3.style.padding = "10px 10px 10px 10px";
		elem3.style.margine = "100px 100px 100px 0px";
		elem3.style.backgroundColor = "transparent";
		elem3.style.position = "absolute";
		elem3.style.cursor = "zoom-out";
		start3 = 1;
	} else {
		elem3.style.width = "150px";
		elem3.style.height = "150px";
		elem3.style.margine = "10px 10px 10px 10px";
		elem3.style.padding = "0px";
		elem3.style.borderRadius = "50%";
		elem3.style.cursor = "zoom-in";
		elem3.style.cssFloat = "right";
		elem3.style.position = "inherit";
		start3 = 0;
	}
}