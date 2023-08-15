const $data = { toString: () => new Error() };

console.assert(true, $data);
console.assert(true, $data);
console.assert(true, $data);
console.assert(false, $data);
console.assert(true, $data);
console.assert(true, $data);
console.assert(true, $data);

console.log('FINISH');
