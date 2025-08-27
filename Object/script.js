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


let obj2 = {
    name: "OP",
    age: 34,
    address : {
        city: "Indore"
    },
};
console.log(obj2);
let obj3 = {...obj2}; // it will copy all the key and its values but uses the reference of nested key
console.log(obj3);
// ex: 
obj3.address.city = "Rishikesh"; // it will change in obj2 also
console.log(obj2);
console.log(obj3);

//deep clone
let obj4 = JSON.parse(JSON.stringify(obj2));
obj4.address.city = "Bhopal";


console.log(obj4?.addresss?.city); // it will not return the error if it exit or not
// console.log(obj4.addresss.city); // addresss is not in obj4 so it will return error

let role = "admin";
let newObj1 = {
    name: "Ashish",
    age: 34,
    [role] : "ServiceNow Developer",
};
console.log(newObj1);
