let obj = {
    name: "Ashish",
    age: 22,
    gender: "M",
    phone_no: 345678987654
};
console.log(obj);
console.log(obj.age);

let aa = "name";
// obj.aa // it will check aa in object
//but
obj[aa] // it will assign the aa value to obj key
console.log(obj[aa]); 

//Nesting
let details = {
    name: "Ashish",
    age: 22,
    address : {
        city :"Rishikesh",
        pin: 249204,
        location: {
            lat : 45.55,
            lng : 65.45
        },
    },
};
// deep access
console.log(details.address.location.lng);

// object destructuring
let {lat,lng} = details.address.location;
console.log(lat,lng); 

let newObj = {
    name: "Ashish",
    age: 34,
    email: "@coforge.com"
};

for(let key in newObj){
    console.log(newObj[key]); // it will print the value of key 
}

console.log(Object.keys(newObj)); // it saves the key in array form

let newNewObj = {...newObj}; // spread operator 