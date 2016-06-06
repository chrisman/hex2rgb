'use strict';

import { test } from "tape";
import { utils as u } from "./utils";

test('simple methods', assert => {
  let test, actual, expected;

  test = "i and love and you";
  actual = u.head;
  expected = 'i';

  assert.deepEqual(actual(test), expected,
    'head should return a[0]'
  );

  test = "i and love and you";
  actual = u.compose(
    u.join(' '),
    u.tail,
    u.split(' ')
  );
  expected = 'and love and you';

  assert.deepEqual(actual(test), expected,
    'tail should return the array minus its head'
  );

  test = "i and love and you";
  actual = u.split(' and ');
  expected = ['i', 'love', 'you'];

  assert.deepEqual(actual(test), expected,
    'should curry and split'
  );

  test = ['i', 'love', 'you'];
  actual = u.join(' and ');
  expected = 'i and love and you';

  assert.deepEqual(actual(test), expected,
    'should curry and join'
  );

  test = 42;
  actual = u.toString;
  expected = '42';

  assert.equal(actual(test), expected,
    'toString should return a string'
  );
  assert.ok(typeof actual(test) === 'string');

  test = 42;
  actual = u.log('log message');
  expected = 42;
  assert.equal(actual(test), expected,
    'log returns the value given it'
  );

  test = ['dog', 'cat', 'lizard'];
  actual = u.map(e => e.toUpperCase());
  expected = ['DOG', 'CAT', 'LIZARD'];

  assert.deepEqual(actual(test), expected,
    'should map an array'
  );

  test = ['dog', 'cat', 'lizard'];
  actual = u.reduce((x, y) => x + y);
  expected = 'dogcatlizard';

  assert.deepEqual(actual(test), expected,
    'should reduce an array'
  );

  assert.end();
});

test('composing methods', assert => {
  let test, actual, expected;

  test = 'i and love and you';
  actual = u.compose(
    u.join(' and '), 
    u.map(e => e.toUpperCase()), 
    u.reverse, 
    u.split(' and ' )
  );
  expected = 'YOU and LOVE and I';

  assert.equal(actual(test), expected,
    'compose some basic functions'
  );

  test = ['ff', 'ff', 'ff'];
  actual = u.compose(
    u.join(','),
    u.map(e => u.compose(
        u.reduce((x, y) => x + y),
        u.map((e, i) => Math.pow(16,i)*15),
        u.reverse,
        u.split('')
      )(e)
    )
  );
  expected = '255,255,255';
  assert.equal(actual(test), expected,
    'maps an array of hex values to decimal values'
  );

  assert.end();
});
