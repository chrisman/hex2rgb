var utils = {
  compose: function(){
    var args = Array.from(arguments).reverse();
    return function(x) {
      var result = x;
      args.forEach((f) => {
        result = f(result);
      });
      return result;
    }
  },
  split: (on) => (what) => what.split(on),
  join: (on) => (what) => what.join(on),
  map: (f) => (a) => a.map(f),
  reduce: (f) => (a) => a.reduce(f),
  log: (msg) => (x) => { console.log(msg, x); return x; },
  reverse: (x) => x.reverse(),
  toString: (x) => x.toString()
}
export { utils };
