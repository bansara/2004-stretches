const lockBox = (code, msg) => {
  // write code here
  if(typeof code !== 'number' || typeof msg !== 'string') {
    throw 'enter a number and a string';
  }
  return {
    modCode(pw, newCode) {
      if(pw === code) {
        code = newCode;
        return code;
      } else {
        throw 'incorrect password'
      }
    },
    modMessage(pw, newMsg) {
      if (pw === code) {
        message = newMsg;
        return message;
      } else {
        throw 'incorrect password'
      }
    },
    revealMessage(pw) {
      if (pw === code) {
        return message;
      } else {
        throw 'incorrect password'
      }
    } 

  }
};

module.exports = { lockBox };
