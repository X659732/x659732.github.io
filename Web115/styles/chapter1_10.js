"use strict"


var company = "Tainted Toe Industries ";
var greeting = "Greets you!";

alert(company + greeting);

var plants = 2;

alert("We offer " + plants + "types of plants!");

var choice1 = prompt("Would you like to hear about our plants? Enter y or n");

if (choice1 === "y") {
	var ornamental = 5.99;
	var edible = 4.50;
	alert("We offer a variety of edible plants for " + "$" + edible + " and ornamental plants for " + "$" + ornamental + ".");
	var pay1 = parseFloat(prompt("How many edible plants would you be interested in?"));
	var subTotal1 =  edible * pay1;
	var pay2 = parseFloat(prompt("How many ornamental plants would you be interested in?"));
	var subTotal2 =  edible * pay2;
	var tax = (subTotal1 + subTotal2) * .06;
	
	var total = subTotal1 + subTotal2 + tax;
	
	alert("The total with tax included is " + total);
	
}

else {
	
	alert("Have a nice day");
	
}
