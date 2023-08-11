/*
    Goal:
    Develop an Iterator. It must have methods: next, reset and property count and current
    The iterator must take an options parameter to set options such as: step, start etc...
    Step can be: number | '+' | '*' | (current: number) => number.
    All methods of the iterator must be chained.

    Example:
    const iterator = new Iterator();

    iterator.next();
    iterator.reset();
    iterator.next().next();

    iterator.count;
    iterator.current;
*/

// function Iterator

const $data = { toString: () => new Error() };

let iterator = new Iterator();
console.assert(iterator.count === 0, $data);
console.assert(iterator.current === 0, $data);

iterator.next();
console.assert(iterator.count === 1, $data);
console.assert(iterator.next().count === 2, $data);
console.assert(iterator.current === 2, $data);

iterator.reset();
console.assert(iterator.count === 0, $data);
console.assert(iterator.current === 0, $data);

iterator = new Iterator({
  step: 2,
  start: 1,
});
console.assert(iterator.count === 0, $data);
console.assert(iterator.current === 1, $data);

iterator.next();
console.assert(iterator.count === 1, $data);
console.assert(iterator.current === 3, $data);

iterator = new Iterator({
  step: '*',
  start: 3,
});
console.assert(iterator.count === 0, $data);
console.assert(iterator.current === 3, $data);

iterator.next();
console.assert(iterator.count === 1, $data);
console.assert(iterator.current === 9, $data);

iterator = new Iterator({
  step: '+',
  start: 0,
});

// your all other tests here
// ...
// ====================================================================
