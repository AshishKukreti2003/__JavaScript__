// primitives -> aisi sari value jinko copy karne par tumhe ek real copy mil jaye
// ex. -> string, number, boolean, null, undefined, symbol, bignit
let a = 12;
let b = a;
a = 40;

// reference -> inko copy karne mai real copy nahi milegi but aapko reference milega parent ka
// ex. -> array, object, functions
let a1 = [1,2,3];
let b1 = a1;
a1[0] = 0;
b1.pop();

// String
// 'Ashish'
// "Ashish"
// `Ashish` // backticks

// number
// 12
// 12.3

// boolean
// true
// false

// null -> null ka matlab apne ne jaan boojh kar koi value nahi di
let v = null;

// undefined -> it means apne ne ek value banaya aur usey value nahi di to jo value by default mili wo hai undefined
var a3;
let d;
let j;

//symbol -> unique immutable value
let obj ={
    uid : 1,
    name : "Ashish",
    age: 12,
    email: "xyz@example.com"
};

let u1 = Symbol("uid");
obj[u1] = 101;

// bigint
let g = 110928374982734987203948720394n;
g+=2n;
console.log(g); 















