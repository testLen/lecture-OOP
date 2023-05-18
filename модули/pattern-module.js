// МОДУЛЬ БЕЗ ВОЗВРАЩЕНИЯ ЭЛЕМЕНТОВ,
// ПРОСТО ИНКАПСУЛИРОВАЛИ ЛОГИКУ
// const counterModule = (function () {
//   let counter = 0;

//   const increaseCounter = function () {
//       counter++;
//   }

//   const getCounter = function () {
//     return counter;
//   }
// })();
// console.log('counterModule: ', counterModule);

// // МОДУЛЬ БЕЗ ВОЗВРАЩЕНИЯ ЭЛЕМЕНТОВ
// const counterModule = (function () {
//   let counter = 0;

//   const increaseCounter = function () {
//       counter++;
//   }

//   const getCounter = function () {
//     return counter;
//   }
// return {
//     getCounter: getCounter,
//     increaseCounter: increaseCounter
//   }
// })();
// console.log('counterModule: ', counterModule);
// console.log('getCounter: ', counterModule.getCounter());
// counterModule.increaseCounter();
// counterModule.increaseCounter();
// counterModule.increaseCounter();
// console.log('getCounter: ', counterModule.getCounter());

// // задание напишите модуль приветствия
// // он должен внутри себя содержать фразу приветствия, например
// // const greeting = 'Hello';
// // и переменную let name = '';
// // должен возвращать объект с методами: setName, sayGreeting
// // setName - утанавливает переданное имя в переменную name
// // sayGreeting - здоровается возвращая фразу greeting + " " + name;

class Test {
  #v = 56;
  c = 78;
  constructor(v) {
    this.#v = v;
  }
  #tt() {
    this.#v;
  }
  getTT() {
    return this.#tt() + this.#v;
  }
}

const ttt = {
  tt: 25
}

function travel(obj) {
  if (obj instanceof Test) {
    const {v, c} = obj;
    console.log(v);
    console.log(c);
  }
  console.log('not instance');
}

const test = new Test(6);
travel(test.);
travel({v: 23, c: 23});
// test.tt = 50;
// console.log(test);