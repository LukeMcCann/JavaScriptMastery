// Method 1

let obj = { 
  name: 'ObjectA',
  number: 0,
};

let obj1 = Object.assign({}, obj);

obj1.number++;

console.log(obj1);
console.log(obj);


// Method 2 

let obj2 = { ...obj };

obj1.number++;

obj2.number++;

console.log(obj1);
console.log(obj);
console.log(obj2);

// Method 3 
// If we have children Objects
// the above two methods do not work.
// We need a deep clone whilst the
// spread and Object.assign only does a shallow clone.

let obj3 = JSON.parse(JSON.stringify(obj));


obj1.number++;

obj2.number++;

obj3.number++;

console.log(obj1);
console.log(obj);
console.log(obj2);
console.log(obj3);


