/*
if (1 == 1) {
	var a = 10;
	//this is a block scope
}

//this works. weird right, its not like funciton level scope
console.log(a);
//but thankfully we have hoisting
//notice the difference in the folowing

if (1 == 1) {
	let b = 10;
}
console.log(b);	//this wont work, because let enforces block scope strictly

if (1 == 1) {
	const EXAMPLE = 100;
}
console.log(EXAMPLE);	//this works but can't be modified.

*/
//SO WHAT IS HOISTING??
//it is when js moves a variable declaration to the top of the page,
	//so that any references to it work.
// it also hoists function definitions
var a = "First";
var b = "Second";
var c = "Third";

console.log(a + " " + b + " " + c);
console.log(gravy());

function gravy() {
	var g = "gravy";
	return g;
}
//you can avoid hoisting function definitions by using anonymous functions.
//like this function example, which wont be hoisted and will break
console.log(a());
var a function() {
	var a = 20;
	return a;
}