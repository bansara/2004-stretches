// Caeser Cipher
// https://en.wikipedia.org/wiki/Caesar_cipher
// create a function that takes a string and a shift value and returns an encrypted string

// accept only alphanumeric characters
// shifted values should wrap back around
// z -> a  and 9 -> 0

// example
// str = 'hello'
// shift = 3
// result = 'khoor'

// example
// str = "yolo789"
// shift = 4
// result = "csps123"

const encryptString = (str, shift) => {
  // YOUR CODE
  if (str.match(/[^a-z0-9]/i)) throw 'can i haz alphanumeric characters plz';
  const arr = str.split('').map(letter => letter.charCodeAt(0));
  const shifted = arr.map(char => {
    if ((char >= 97 && char <= 122)) {
      //lowercase
      let realShift = shift % 26;
      let newChar = char += realShift;
      if (newChar < 97) {
        newChar += 26
      } else if (newChar > 122) {
        newChar -= 26;
      }
      return newChar;

    }
    if (char >= 65 && char <= 90) {
      //uppercase
      let realShift = shift % 26;
      let newChar = char += realShift;
      if (newChar < 65) {
        newChar += 26
      } else if (newChar > 90) {
        newChar -= 26;
      }
      return newChar;

    }
    if (char >= 48 && char <= 57) {
      let realShift = shift % 10;
      let newChar = char += realShift;
      if (newChar < 48) {
        newChar += 10;
      } else if (newChar > 57) {
        newChar -= 10;
      }
      return newChar;

    }
  })
  return (String.fromCharCode(...shifted))

};

module.exports = { encryptString };
