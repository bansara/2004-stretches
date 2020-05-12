//write a func that takes two arg... selectKey and obj

const comparator = (selectKey, obj) => {
    const keys = obj.reduce((a, c) => {
        Object.keys(c).forEach(key => {
            if (!a.includes(key)) a.push(key);
        })
        return a;
    }, [])
    if (!keys.includes(selectKey)) return 'incorrect key';
    /*
    Everything above is more verbose than
    necssary for these specs but more flexible for
    different inputs, so I did it for practice.
     */
    else if (selectKey === 'age') {
        return obj.sort((a, b) => a.age - b.age);
    } else if (selectKey === 'name') {
        return obj.sort((a, b) => {
            if (a.name.split(" ")[1] > b.name.split(" ")[1]) {
                return 1;
            } else {
                return -1
            }
        })
    }
};

module.exports = { comparator };
