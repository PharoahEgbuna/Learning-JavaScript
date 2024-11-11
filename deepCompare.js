"use strict";

function deepComp(obj1, obj2) {
    
    let identical = true;

    for (let key of Object.keys(obj1)) {
        if (obj1[key] instanceof Array) { //Checks if key is an array, if true compares length and elements 

            if (obj1[key].length !== obj2[key].length) { //check for difference in array lengths
                identical = false;
                break;
            }

            for (let i = 0; i < obj1[key].length; i++) { //check for difference in elements
                if (obj1[key][i] !== obj2[key][i] ) {
                    identical = true;
                    break; 
                }

            } 

        } else if (obj1[key] instanceof Object && (obj1[key] instanceof Array) == false) {//checks for if the key is an object if true uses recursion to compare nested properties 
            identical = deepComp(obj1[key], obj2[key]);
        } else if ((obj1[key] instanceof Object) != true) {
            if (obj1[key] != obj2[key]) {
                identical = false;
                break;
            }

        }
    }

    return identical;

};


let a={x:[1,2,3,4,5], y:0, z: {m:'test', n:false}};
let b={x:[1,2,3,4,5], y:0, z: {m:'test', n:false}};
let c={x:[1,2,3,4,5,6], y:0, z: {m:'test', n:false}};
let d={x:[1,2,3,4], y:0, z: {m:'test', n:false}};
let e={x:[1,2,3,4,5], y:0, z: {m:'test', n:true}};
let f={x:[1,2,3,4,5], y:-1, z: {m:'test', n:false}};

console.log(deepComp(a,b)); //true
console.log(deepComp(a,c)); //false
console.log(deepComp(a,d)); //false
console.log(deepComp(a,e)); //false
console.log(deepComp(a,f)); //false