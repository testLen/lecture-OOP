// СОВРЕМЕННЫЙ СИНТАКСИС ПРИВАТНОГО СВОЙСТВА
// его доступность внутри класса и не доступность снаружи
// class User {
//     #id = 18;
//     get id() {
//         return this.#id;
//     }
//     changeId() {
//         this.#id = Math.floor(Math.random()*10);
//     }
// }

// const user = new User();
// console.log(user.#id); // будет ошибка
// console.log(user.id);
// user.changeId();
// console.log(user.id);
// user.changeId();
// console.log(user.id);


// В КЛАССЕ-НАСЛЕДНИКЕ ПРИВАТНОЕ СВОЙСТВО РОДИТЕЛЯ НЕ ДОСТУПНО
// class User2 extends User {
//     constructor() {
//         super();
//         // super.#id; // выдаст ошибку, тк это приватное свойство
//     }
// };

// const user2 = new User2();
// console.log(user2.id);
// user2.changeId();
// console.log(user2.id);



// ПРИВАТНЫЕ СВОЙСТВА И МЕТОДЫ
// class CoffeeMachine {
//     #waterLimit = 200;
  
//     #checkWater(value) {
//       if (value < 0) throw new Error("Отрицательный уровень воды");
//       if (value > this.#waterLimit) throw new Error("Слишком много воды");
//     }
//   }
  
//   let coffeeMachine = new CoffeeMachine();
  
//   coffeeMachine.#checkWater();
//   coffeeMachine.#waterLimit = 1000;


// ПРИВАТНОЕ СТАТИЧЕСКОЕ СВОЙСТВО
// class ClassWithPrivateStaticField {
//     static #PRIVATE_STATIC_FIELD
  
//     static publicStaticMethod() {
//       ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD = 42
//       return ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD
//     }
//   }
  
//   console.log(ClassWithPrivateStaticField.publicStaticMethod() === 42)



// КОГДА ПРИМЕНЯТЬ СТАТИЧЕСКИЙ МЕТОД
// Например, есть объекты статей Article, и нужна функция для их сравнения.
// Естественное решение – сделать для этого статический метод Article.compare:
// class Article {
//     constructor(title, date) {
//       this.title = title;
//       this.date = date;
//     }
  
//     static compare(articleA, articleB) {
//       return articleA.date - articleB.date;
//     }
// }
  
// const articles = [
//     new Article("HTML", new Date(2019, 1, 1)),
//     new Article("CSS", new Date(2019, 0, 1)),
//     new Article("JavaScript", new Date(2019, 11, 1))
// ];
  
// articles.sort(Article.compare);
  
// console.log( articles[0].title );



// ЕЩЕ ПРИМЕР ПРИМЕНЕНИЯ СТАТИЧЕСКОГО МЕТОДА
// Если нам нужно проверить id пользователя в базе данных
// создавать для этого нового пользователя смысла нет, нужен доступ через единую точку
// class User {
//     constructor(name) {
//         this.name = name;
//     }

//     static getRole(email) {
//         // реализация. может быть обращение на бэкенд, а может быть поиск по массиву
//         return 'student';
//     }
// }

// const person = new User('Den'); // например это админ и ему нужно узнавать роль по email.
// console.log(person);



// НАСЛЕДОВАНИЕ СТАТИЧЕСКИЪ МЕТОДОВ
// class Animal {
//     constructor(name, speed) {
//       this.speed = speed;
//       this.name = name;
//     }
  
//     run(speed = 0) {
//       this.speed += speed;
//       console.log(`${this.name} бежит со скоростью ${this.speed}.`);
//     }
  
//     static compare(animalA, animalB) {
//       return animalA.speed - animalB.speed;
//     }
// }
  
// class Rabbit extends Animal {
//     hide() {
//       console.log(`${this.name} прячется!`);
//     }
// }
  
// const rabbits = [
//     new Rabbit("Белый кролик", 10),
//     new Rabbit("Чёрный кролик", 5)
// ];
// rabbits.sort(Rabbit.compare);
// rabbits[0].run();



// ЗАДАНИЕ
// напишите класс Article со статическим свойством, которое хранит все статьи. статья в него
// добавляется при создании новой статья, те в конструкторе
// также у него есть приватный id, который защищён от записи снаружи (есть get, но нет set для него)
// также у него есть статический метод, который берёт статью по её id
// и возращает статью.