# hex2rgb

convert hexidecimal color values to rgb color values.

## how-to

Pass a hex color value as a command line parameter.

example: `node index.js '#ffddee'`

tests: `npm test`

coverage: `npm run cover`

## notes

I wrote this because I couldn't, and still can't, map over an array using a composition. When I do, it only maps the first value in the array.

__update:__ in my original compose() function, I `pop`ped the values from `args` in the closure, leaving the array of functions empty on every subsequent iteration of the map.
