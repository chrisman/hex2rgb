var utils = {
  compose: (...fns) => (init) => fns.reduceRight((result, fn) => fn(result), init),
  head: (a) => a[0],
  tail: (a) => a.slice(1),
  split: (onWhat) => (string) => string.split(onWhat),
  join: (onWhat) => (string) => string.join(onWhat),
  map: (f) => (a) => a.map(f),
  reduce: (f) => (a) => a.reduce(f),
  log: (msg) => (x) => { console.log(msg, x); return x; },
  reverse: (x) => x.reverse(),
  toString: (x) => x.toString()
}
export { utils };
