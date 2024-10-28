# «Символы, итераторы, генераторы»

**Важно**: код проходит ESLint без ошибок.

**Важно**: на задачи данного раздела писать авто-тесты не нужно.

---

## Генераторы (задача со звёздочкой)

[![Build status](https://ci.appveyor.com/api/projects/status/67pup87fwv9ywdfx?svg=true)](https://ci.appveyor.com/project/BudTon/symbol-generator-test)

**Важно**: данная задача не является обязательной 

### Легенда

Как вы знаете, объекты, позволяющие организовать итерирование, содержат метод с "именем" `Symbol.iterator`. Напишите функцию `canIterate`, которая определяет, соответствует ли объект протоколу итерирования, возвращая, соответственно, `true`/`false`.

Примеры использования:
```javascript
canIterate(new Map()); // true
canIterate(new Set()); // true
canIterate(null); // false
canIterate(10); // false
canIterate("Netology"); // true
```
