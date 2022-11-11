let testArray = Array(20000).fill(1);

const remove = function() {
    testArray.pop();
    if (testArray.length > 0) {
        remove(testArray);
    }
};

remove();