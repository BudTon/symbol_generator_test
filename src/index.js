// const { canIterate } = require('./js/canIterate.js');
import canIterate from './js/canIterate.js';

canIterate(new Map()); // true
canIterate(new Set()); // true
canIterate(null); // false
canIterate(10); // false
canIterate("Netology"); // true

