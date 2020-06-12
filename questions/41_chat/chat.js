//	Chat is almost complete - solve the last spec

class Chat {
  constructor() {
    this.listeners = {};
  }
  join(str, fn) {
    Object.values(this.listeners).forEach((listener) =>
      listener(`${str} has joined chat!`)
    );
    this.listeners[str] = fn;

    return {
      talk: (msg) => {
        const otherPeople = Object.keys(this.listeners).filter(key => key !== str);
        otherPeople.forEach(person => {
          console.log(`TO ${person.toUpperCase()}: ${str} says ${msg}`);
        })
          ;
      }
    }
  };
}


module.exports = { Chat };