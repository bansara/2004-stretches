//write a function that takes a function, and makes it callable with two invocations

const extensions = (fn) => {
    if (typeof fn !== 'function') {
        throw 'not a function';
    }
    return (a) => {
        if(typeof a !== 'number') {
            throw 'not a number';
        }
        return (b) => {
            if(typeof b !== 'number') {
                throw 'not a number';
            } 
            return fn(a,b)
        }
    }
};

module.exports = { extensions };
