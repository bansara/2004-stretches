// Given two strings check if they are anagrams of each other
// Return a boolean

const checkAnagrams = (str1, str2) => {
  //YOUR CODE
  if(str1.length !== str2.length) return false;
  const s1 = str1.split('').sort();
  const s2 = str2.split('').sort();

  for(let i = 0; i < s1.length; i++) {
    if(s1[i] !== s2[i]) return false;
  }

  return true;
};

module.exports = { checkAnagrams };
