// create
let arr = [1,2,3,4,5];
console.log(arr[0]);
arr[1] = 1;
console.log(arr);

let marks = [10,20,30,40];
marks.push(50);// adds in end
marks.push(60);
console.log(marks);
marks.pop(); // remove from end
console.log(marks);
marks.shift(); // remove from start
console.log(marks);
marks.unshift(1);
console.log(marks); // adds in start
marks.splice(0,2);
console.log(marks);
marks.push(70);
marks.push(80);
console.log(marks);

let newMarks = marks.slice(0,3);
console.log(newMarks);

marks.reverse();
console.log(marks);


let arr1 = [5,7,4,8,4,5,3];
arr1.sort(function(a,b){
    return b-a; // dec
});
console.log(arr1);
arr1.sort(function(a,b){
    return a-b; // asc
});
console.log(arr1);

console.log(arr1.sort())


let testArr = [1,2,3,4,5,6,7,8];
testArr.forEach(function(val){
    console.log(val);
});
testArr.forEach(function(val){
    console.log(val*val);
});

let newTestArr = testArr.map(function(val){
    return 12;
})
console.log(newTestArr);

// jab bhi aapko aisa koi case dikh jaaye jaha par ek array se naya array banega and wo naya array kuch values ko rakhega tab map lagega

let newTestArr1 = testArr.map(function(val){
    if(val %2 == 0){
        return val;
    }
});
console.log(newTestArr1);

// filter
let array1 = [1,2,3,4,5,6,7,8,9];
let newArray = array1.filter(function(val){
    if(val %3 == 0){
        return true;
    }
});
console.log(newArray);

// reduce
let array2 = [1,2,3,4,5,6];
let ans = array2.reduce(function(accumulator, val){
    return accumulator + val;
},0); // 0 to set accumulator value initially
console.log(ans);

// find
let array3 = [
    {id: 1, key: 1},
    {id:2, key: 2},
    {id:3, key: 1}
];
let newArray3 = array3.find(function(val){
    return val.key == 1;
});

console.log(newArray3); // returns first match only

// some
let array4 = [67,89,45,67,34];
let newArray4 = array4.some(function(val){
    return val > 50;
});
console.log(newArray4); // it will check only one condition is true

// every
let array5 = [1,2,3,4,5,7,9];
let newArray5 = array5.every(function(val){
    return val %2 == 0;
});
console.log(newArray5); // it will check all conditions are true or not 

// destructing 
let desArr = [1,2,3,4,5,6];
// let [a,b] = desArr
// console.log(a,b); // 1  2
let [a,b,,c] = desArr;
console.log(a,b,c); // 1  2  4

// spread operator
let arr8 = [1,2,3,4,5,6,7,8,9];
let new_Arr = arr8; // it is a reference copy of arr8 if we change new_Arr will also change in arr8
let new_Arr1 = [...arr8]; // it will create a new copy of arr8

//6:56


