function zip(objs) {
  return objs.reduce((a,c) => {
    const keys = Object.keys(c);
    for( let key of keys ) {
      if(a.hasOwnProperty(key)) {
        a[key] += c[key]
      } else {
        a[key] = c[key]
      }
    }
    return a;
  }, {})
}

module.exports = { zip };
