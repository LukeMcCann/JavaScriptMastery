// Stack overflow exception is caused
// when our Call Stack is filled
// but more function calls keep being added
// to the stack. We can simulate such a situation
// using recursion.

// Stack Overflow
function recursion(num) {
    num = num + num;
    recursion();
}

recursion(1);

// Expect: Maximum call stack size exceeded

// Consider what happens here:
//
// We call recursion, it is added to the
// call stack.
//
// It creates a reference to our variables
// on the heap.
//
// it reaches another recursion call
// adds it to the call stack
//
// This occurs over and over again
// yet none of our function calls are removed from
// the call stack as we never cease execution.
//
// We can solve this by ensuring that
// our functions cease execution.
// We can do so by ensuring our functions
// do eventually return removing them from the call stack

// function recursion(num) {
//     num = num + num;
//     if (num > 99999999999) {
//         console.log(num);
//         return;
//     }
//     recursion(num);
// };

// recursion(1);