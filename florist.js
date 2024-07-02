let rose_price = 8;
let lily_price = 10;
let tulip_price = 2;

let num_roses = 70;
let num_lillies = 50;
let num_tulips = 120;

let rosesValue = rose_price * num_roses;
let liliesValue = lily_price * num_lillies;
let tulipsValue = tulip_price  * num_tulips;

let total = rosesValue + liliesValue + tulipsValue;

console.log("Rose – unit price:", rose_price, ", quantity:", num_roses, ", value:", rosesValue);
console.log("Lily – unit price:", lily_price, ", quantity:", num_lillies, ", value:", liliesValue);
console.log("Tulip – unit price:", tulip_price, ", quantity:", num_tulips, ", value:", tulipsValue);
console.log("Total: ", total);