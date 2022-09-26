"use strict"


window.onload = function() {
    
   document.forms[0].onsubmit = function() {
	  document.getElementById("greeting").innerHTML= "Welcome to Tainted Toe Industries";
	  var first_name=document.getElementById("fName").value;
	  var middle_name=document.getElementById("mName").value;
	  var last_name=document.getElementById("lName").value;
	  var welcome=document.getElementById("greeting").textContent;
	  document.getElementById("greeting").innerHTML = welcome +" "+ first_name +" "+ middle_name + ". " + last_name;
	  var words = 140;
	  var expect = "";
	  for (var i = 1; i <= words; i++) {
		    if (i % 3 === 0 && i % 5 != 0) {
				expect += i +".) "+ "Bountiful<br>";
		}
			else if (i % 5 === 0 && i % 3 != 0) {
				expect +=  i +".) "+ "Harvest<br>";
		}
			else if (i % 5 === 0 && i % 3 === 0) {
				expect +=  i +".) "+ "Bountiful Harvest<br>";
		}
			else {
				expect +=  i +".) "+ "Spices<br>";
		}
	  }
	  
	  document.getElementById("displayR").innerHTML = expect;     
	  return false;
   };
};
