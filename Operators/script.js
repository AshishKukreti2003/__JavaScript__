// Arithmetic , comparison, logical , assignment, unary, ternary

// +  -  *  /  %  **
// =  ==   ===
// <   >   <=   >=   !   !=   !==   !!
// &&  ||
// ?:


//Arithmetic operators
// 1+2 = 3
// "Ashi" + "sh" = "Ashish"
// 10-9 = 1
// 12*2 = 24
// 30/6 = 5
// 10%3 = 1
// 2**4 = 16


// Comparison operators
// = means value assign(Assignment operator)
// 12 == 13 -> false
// 12 == "12" -> true 
// 12 === "12" -> false

// 12 != 15 -> true
// 12 != "12" -> false

// 12 !== "13" -> true
// 12 !== "12" -> true

// assignment operator
let a = 12;
a+=3;
a-= 5;
a*= 2;
a/= 5;
a %= 3;
console.log(a);

// logical operatore && || !

// true && true -> true
// true && false -> false
// false && true -> false
// false && false -> false

// true || true -> true
// true || false -> true   
// false || true -> true
// false || false -> false 

// !true -> false
// !false -> true


// Unary operators
// +  -  !  typeof   ++   --
// +"12" -> 12
// -"12" -> -12

// typeof "Ashish" -> "string"
// typeof 12 -> "number"

// 12++ -> 13
// 12-- -> 11

// Ternary operator
// condition ? true hui ka code : false hui ka code

let r = 12, d = 45;
console.log(r > d? true: false)
