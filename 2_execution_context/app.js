
// In the browser our Global object is the Window object
// In Node our Global object is Global
console.log(num);

var num = 10;

numFunction();

function numFunction() {
    console.log('in numFunction');
};

console.log(num);