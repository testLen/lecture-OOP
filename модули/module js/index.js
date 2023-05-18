const {decorateWithHash, decorateWithDollar, decorateWithPercent} = require('./decorate.js');
const {getRandomFromRange} = require('./getRandom.js');

const phrases = ['Привет Всем!', 'Обычная фраза', 'Классная погода!'];
const index = getRandomFromRange(0, phrases.length - 1);
const text = phrases[index];

console.log(decorateWithHash(text));
console.log(decorateWithDollar(text));
console.log(decorateWithPercent(text));