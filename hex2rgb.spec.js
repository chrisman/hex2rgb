import { result as convert, splitter } from './hex2rgb';
import { test } from 'tape';

test('splitter', plan => {

  test('should take a string, return an array', assert => {
    const actual = splitter('#ffffff');
    const expected = ['ff', 'ff', 'ff'];
    assert.deepEqual(actual, expected);
    assert.end();
  });

  plan.end();
});

test('converter', plan => {

  test('convert a string', assert => {
    const actual = convert(splitter('#ffffff'));
    const expected = '255,255,255';
    assert.equal(actual, expected, 'should be a string');
    assert.end();
  });

  plan.end();
});
