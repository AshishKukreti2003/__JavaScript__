// if else   elseif
// switch
// early return pattern

let a = 20;
if(a >= 18){
    console.log("You are an adult");
}else if(a >= 13){
    console.log("You are a teenager");  
}else{
    console.log("You are a child");
}

// switch (key) {
//     case 1:
//         break;
//     case 2:
//         break;
//     default:
//         break;
// }

function OP(val){
    if(val < 100) return "A";
    else if(val < 200) return "B";
    else if(val < 300) return "C";
    else return "D";;
}

console.log(OP(250));
