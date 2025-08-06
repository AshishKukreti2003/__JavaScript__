// var let const 
var name1 = "Ashish";
var a;
var a = 12;
let ab;
let b = 12;
const a1 = 12;

// Scope(global, block, functional)

// var is global and functional scope
// let is block scope

var x = 10;
console.log(x);
function abc(){
    console.log(x);
    x = 100;
    console.log(x);
}
console.log(abc());
console.log(x);

{
    let a4 =10;// block scope
    console.log(a4);
}

let a4 = 20;
console.log(a4)


// declarations and initialization

var a; // declaration
var a = 12; // declare and initialize

// window mein add hota hai
// function scoped hota hai
// app firse declare kar sakthe ho same name se and error nahi aayega


// Temporal Dead Zone -> utna area jitne mai js ko pata to hai ki variable exist karta hao par wo aapko nahi de sakta

console.log(xyz1); // undefined
var xyz1 = 20;

console.log(xyz); // cannot access xyz before initialization
let xyz = 20;


// Hosting impact per type
// hoisting -> ek variable ko jab js mai banate hai to wo variable do hisso mein toot jata hai and uska declare part upar chala jaata hai and uska initialization part neeche reh jata hai

{
    let a = 12;
    console.log(a);

    // hoisting means
    let b = undefined;
    console.log(b);
    b = 12;
}

// var -> hoist -> undefined
// let -> hoist -> reference error (no value set)
// const -> hoist -> reference error (no value set)
