'use strict'
var _ = require('./utils');
// a hex:dec dictionary!
var dict = {
  '0': 0, '1': 1, '2': 2, '3': 3,
  '4': 4, '5': 5, '6': 6, '7': 7,
  '8': 8, '9': 9, 'a': 10, 'b': 11,
  'c': 12, 'd': 13, 'e': 14, 'f': 15
};
// other
var add = (x, y) => x + y;
// base 16 to base 10
const BASE = 16;
var convert = (root) => (exp) => (n) => Math.pow(root, exp) * n;
var from_hex = convert(BASE);
var to_decimal = (e,i) => from_hex(i)(dict[e]);
var decimal = _.compose(
  _.reduce(add), _.map(to_decimal), _.reverse, _.split('')
);
// computation
_.log('output') (
  _.compose (
    _.join(','),
    _.map(e => decimal(e))
  ) ([
    process.argv[2].slice(1, 3),
    process.argv[2].slice(3, 5),
    process.argv[2].slice(5, 7),
  ])
);
