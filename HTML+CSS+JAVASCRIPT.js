function changeColor() {
	document.getElementById("culoare_text").style.color = "yellow"; 
	}
function changeColor_2() {
	document.getElementById("culoare_text_2").style.color = "red" 
	}
function changeColor_3() {
	document.getElementById("culoare_text_2").style.color = "black" 
	}
function changeColor_4() {
	document.getElementById("culoare_text").style.color = "black" 
	}
function change_text_size() {
	document.getElementById("marime_text").style.fontSize = "24.5px"
	}
function change_text_size_1() {
	document.getElementById("marime_text").style.fontSize = "22.5px"
	}
function select_box(event) {  
	 let select_box = document.body; 
	 let value = event.target.value;
	 switch (value){
		case "1": select_box.style.backgroundColor="brown"; break;
		case "2": select_box.style.backgroundColor="green"; break;
		case "3": select_box.style.backgroundColor="white"; break;
		}
}






