const rose_price = 8;
const lily_price= 10;
const tulip_price = 2;

let num_roses = 70;
let num_lillies = 50;
let num_tulips = 120;

let total_roses = rose_price * num_roses;
let total_lillies = lily_price * num_lillies; 
let total_tulips = tulip_price * num_tulips;

let total = total_roses + total_lillies + total_tulips;

console.log("Rose - unit price: " + rose_price + " , quantity: " + num_roses + " , value: " + total_roses);
console.log("Lily - unit price: " + lily_price + " , quantity: " + num_lillies + " , value: " + total_lillies);
console.log("Tulip - unit price: " + tulip_price + " , quantity: " + num_tulips + " , value: " + total_tulips);
console.log("Total: ", total);
