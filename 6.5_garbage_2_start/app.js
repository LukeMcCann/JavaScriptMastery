// In most C based languages we have to allocate and deallocate
// memory ourselves, in JS this is not the case, yet, there
// still must be a mechanism to reclaim memory so that we have
// some way of freeing up memory as not to run out of memory crashing the system.

// JS handles this memory reclamation for us. Once a piece of
// information (Object/variable) is out of context and wont
// be used anymore, it's memory is reclaimed so it may be reused.

// This takes place within the memory heap.
// it uses what is referred to a mark and sweep algorithm.
// This means that it determines the objects which are safe for
// deletion by determining which objects are reachable and which
// are not. Any unreachable items are swept off and the memory
// reclaimed.

// The garbage collector begins with the root or global object
// and moves to the objects referenced by them, moving from
// one object to another, identifying objects which are referenced
// by other objects.

// Any unreferenced objects can be cleared from the heap and
// memory reclaimed.

// In order for information to be reclaimed it must not be
// connected to anything currently ongoing in the program.

// It is possible that our code may make some pieces of the heap
// unreclaimable even though we are no longer using them. This is
// known as a memory leak.

// Memory leaks are parts of memory which was needed and used in
// the past but is not needed anymore, but the memory has not been
// returned to the memory pool.

// Even though garbage collection is handled for us in JS, we still
// need to be cautious with memory management.

// Memory leaks can cause our programs to fail by using up all
// available memory.

// Memory Management Mistakes:
//
// 1. Global Variables - if you keep 

let cnt = 0;
let title = document.getElementById('title');

function titleClick(e) {
    cnt++;
    console.log('The number of times title has been clicked: ' + cnt);
};
