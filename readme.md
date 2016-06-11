# hex2rgb

convert hexidecimal color values to rgb color values.

## how-to

Pass a hex color value as a command line parameter.

`npm install`

tests: 

* local unit tests: `npm test`

* test in headless testling browser: `npm browser`

* code coverage: `npm run cover`

integration:

* https://ci.testling.com/chrisman/hex2rgb

## notes

This turned out to be an exercise in es2015 import/export, babel-node, and test coverage. (first time using isparta.)

__historical:__
    
    I wrote this because I couldn't, and still can't, map over an array using a composition. When I do, it only maps the first value in the array.
    
    __update:__ in my original compose() function, I `pop`ped the values from `args` in the closure, leaving the array of functions empty on every subsequent iteration of the map.
