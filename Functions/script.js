// functions declarations
// function abc(){
//     console.log("hello");
// }
// abc();

// functions expression
// let a = function(){
//     console.log("hehehe");
// }
// a();

// fat arrow functions
// let b = ()=>{
//     console.log("hohohho");
// }
// b();

// function dance(animal){
//     console.log(`${animal} nach raha hai`);
// }

// dance("horse");
// dance("donkey");

//default parameters
// function abc(v1 = 1, v2 = 2){
//     console.log(v1+v2);
// }

// abc();
// abc(4,5);
// abc(-2,9);

// rest parameters
// jab arguments kai saare ho to humein utne hi parameter banane padege, issey bachne ke liya hm rest ka use karthe hai
// function abc(...val){
//     console.log(val);
// }
// abc(1,2,3,4,5,6,7,8,9,);


// function abc(){
//     return 12;
// }

// console.log(abc());

//first class functions -> function ko value ki tarah treat karthe hai
// function abc(val){
//     val();
// }

// abc(function(){
//     console.log("hey");
// });

//high order function -> hote hai ki return kare function ya fir accept kare func apne parameter mein

// function abcd(){
//     return function(){
//         console.log("OPOP");
//     }
// }

// abcd()();

//pure vs impure function
let a= 12;
// aisa func jo ki baahar ki value ko na badle wo hai pure func
function abc(){
    console.log("OP");
}
console.log(a);

// aisa func jo ki baahar ki value ko badle wo hai impure func
// function abcd(){
//     ++a;
// }
// abcd();
// console.log(a);

// closures scoping -> ek func jo return kare ek aur func aur return hone wala func hamesha use karega parent func ka koi variable

// function abcd(){
//     let val = 12;
//     return function(){
//         ++val;
//     }
// }
// console.log(abcd());

// lexical scoping 
// function op(){
//     let a = 10;
//     function op1(){
//         let b = 20;
//         function op3(){
//             let c = 30;
//         }
//     }
// }

// IIFE(Immediately invoked Function expressions)
(function(){
    console.log("op");
})();

//Hoisting --> it only works in function declarations
college();

function college(){
    console.log("UPES");
}


// use rest parameters to accept any number scores nad return the total

function total(... scores){
    let total_scores = 0;
    scores.forEach(function(val){
        total_scores += val;
    });
    return total_scores;
}

console.log(total(1,2,3,4,5,6));

//Discount calculator

function discountCal(discount){
    return function(price){
        return price - price*(discount/100);
    };
}

let discounter = discountCal(10);
console.log(discounter(200));

function counter(){
    let count = 0;
    return function(){
        count++;
        return count;
    };
}

console.log(counter())