
class Box {
    constructor(color, capacity) {
        this.color = color;
        this.contents = [];
        this.capacity = capacity;
    }
    pack(color, capacity) {
        if (this.contents.length < this.capacity) {
            this.contents.push(new Box(color, capacity));
        } else {
            throw 'upack that box you greedy hoarder'
        }
    }
    unpack() {
        const result = [this.color];
        this.contents.forEach(item => {
            if (!item.contents.length) {
                result.push(item.color)
            } else {
                item.contents.forEach(thing =>
                    result.push(thing.color))
            }
        })
        console.log(result)
        return result;
    }
}
module.exports = { Box };
