'use strict'
import { utils as _ } from "./utils";

const dict = {
  '0': 0, '1': 1, '2': 2, '3': 3,
  '4': 4, '5': 5, '6': 6, '7': 7,
  '8': 8, '9': 9, 'a': 10, 'b': 11,
  'c': 12, 'd': 13, 'e': 14, 'f': 15
};
// helper functions
let add = _.reduce((x, y) => x + y);
let convert = _.map((e, i) => Math.pow(16, i) * dict[e]);
// computation
// takes an array of hex bits
// e.g. ['ff', 'ee', 'dd']
let result = _.compose(
  _.join(','),
  _.map(e => _.compose(
    add,
    convert,
    _.reverse,
    _.split('')
  )(e))
);
// string -> array
// e.g. '#ffeedd' -> ['ff', 'ee', 'dd']
let splitter = (s) => [
  s.slice(1, 3),
  s.slice(3, 5),
  s.slice(5, 7)
];

export { result, splitter };
