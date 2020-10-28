// Урок 13. JavaScript. Все о Map, Set, WeakMap, WeakSet с примерами

// Map

const obj = {
  name: 'Misha',
  age: 30,
};

const entries = [
  ['name', 'Misha'],
  ['age', 26],
];

// console.log(Object.entries(obj));
// console.log(Object.fromEntries(entries));

const exampleMap = new Map(entries);
// console.log(exampleMap);
// console.log(exampleMap.get('name'));

exampleMap
  .set('newField', 42)
  .set(obj, 'Value of object');
// console.log(exampleMap.get(obj));
exampleMap.delete('age');
console.log(exampleMap);
