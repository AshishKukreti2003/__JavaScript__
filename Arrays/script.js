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

let newTestArr1 = testArr.map(function(val){
    if(val %2 == 0){
        return val;
    }
});
console.log(newTestArr1);