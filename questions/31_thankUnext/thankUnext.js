// create an array method called "next" that console.logs
// the next index in the array when called.

/*
 Example:
 someArr = ['shake', 'and', 'bake']
 someArr.next() // "shake"
 someArr.next() // "and" 
 someArr.next() // "bake"
*/

// hint: you are adding functionality directly to the
// javascripts global Array object

// ****no test writing required on this stretch

// YOUR CODE (intentionally blank):
Array.prototype.next = function () {
    const length = this.length;
    let index = 0;
    const self = this;
    function logNext() {
        console.log(self[index])
        index++;
    }
    logNext()
}
// no export statement required
