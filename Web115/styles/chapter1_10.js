"use strict"


var company = "Tainted Toe Industries ";
var greeting = "Greets you!";

alert(company + greeting);

var plants = 2;

alert("We offer " + plants + " types of plants!");

var choice1 = prompt("Would you like to hear about our plants? Enter y or n");

if (choice1 === "y") {
	var ornamental = 5.99;
	var edible = 4.75;
	alert("We offer a variety of fruit bearing plants for " + "$" + edible + " and herb plants for " + "$" + ornamental + ".");
	var pay1 = parseFloat(prompt("How many fruit bearing plants would you be interested in?"));
	var subTotal1 =  edible * pay1;
	alert(subTotal1);
	var pay2 = parseFloat(prompt("How many herb plants would you be interested in?"));
	var subTotal2 =  edible * pay2;
	
	var tax = (subTotal1 + subTotal2) * .06;
	
	var total = subTotal1 + subTotal2 + tax;
	
	alert("The total with tax included is $" + total);
	alert("Thank you for your patronage.");
	
}

else {
	
	alert("Have a nice day");
	
}
