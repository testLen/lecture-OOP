// // БАЗОВЫЙ КЛАСС
// class Person {
//     _firstName; // старое обозначение приватных (внутренних) свойств класса, объекта.
//     _lastName;
//     _age;
//     constructor({ firstName, lastName, age }) {
//         this._firstName = firstName;
//         this._lastName = lastName;
//         this._age = age;
//     }
//     getFullName() {
//         return this._firstName + ' ' + this._lastName;
//     }
//     greeting() {
//         console.log('Привет, я человек и меня зовут ' + this.getFullName());
//     }
// }


// // // НАСЛЕДУЕМ ОТ КЛАССА И ПЕРЕОПРЕДЕЛЯЕМ МЕТОД
// class Employeer extends Person {
//     inn;
//     num;
//     snills;
//     constructor({ firstName, lastName, age, inn, num, snills }) {
//         super({ firstName, lastName, age });

//         this.inn = inn;
//         this.num = num;
//         this.snills = snills;
//     }
//     greeting() {
//         console.log('Привет, я РАБОТОДАТЕЛЬ. ' + this.getFullName());
//     }
// }

// // // НАСЛЕДУЕМ ОТ КЛАССА И ПЕРЕОПРЕДЕЛЯЕМ МЕТОД
// class Developer extends Employeer {
//     _level;
//     constructor({ firstName, lastName, age, inn, num, snills, level }) {
//         super({ firstName, lastName, age, inn, num, snills });

//         this._level = level;
//     }
//     greeting() {
//         console.log('Привет, я разработчик. Мой уровень - ' + this._level + '. Меня зовут, ' + this.getFullName());
//     }
// }

// // // НАСЛЕДУЕМ ОТ КЛАССА. МЕТОДЫ ИЗ БАЗОВОГО КЛАССА
// class Hr extends Person {}

// const hr = new Hr({ firstName: 'Jack', lastName: 'Barton', age: 23 })
// const dev = new Developer({ firstName: 'Isaac', lastName: 'Tilda', age: 25 ,inn: 15, num: 15, snills: 15, level: 'SENIOR' });
// const employeer1 = new Employeer({ firstName: 'Stephan', lastName: 'Brown', age: 30 ,inn: 15, num: 15, snills: 15 });

// function massGreeting(arr) {
//     arr.forEach(item => item.greeting())
// }

// massGreeting([hr, dev, employeer1]);


// // // ЕЩЁ ПРИМЕР. БАЗОВЫЙ КЛАСС С МЕТОДАМИ, КОТОРЫЕ НУЖНЫ ВСЕМ ПОТОМКАМ
// const COURSES = [1,2,3,4,5,6,7];
// class User {
//     constructor({ email, password, username, role }) {
//         this.email = email;
//         this.password = password;
//         this.username = username;
//         this.role = role;
//     }
//     login() {
//         console.log('User: ' + this.username + ' logged in');
//     }
//     logout() {
//         console.log('User: ' + this.username + ' logged out');
//     }
// }

// class Admin extends User {
//     constructor({ email, password, username, role }) {
//         super({ email, password, username, role })
//     }
//     changeUserStatus(user) {
//         console.log(user.username + '\'s status was changed!');
//     }
//     getCourses() {
//         return COURSES.filter(el => el%2 === 0);
//     }
// }

// class Moderator extends User {
//     constructor({ email, password, username, role, rate }) {
//         super({ email, password, username, role });
//         this.rate = rate;
//     }
//     moderateUser(user) {
//         console.log(this.username + ' moderated ' + user.username);
//     }
//     getCourses() {
//         return COURSES.filter(el => el%2);
//     }
// }

// class Guest extends User {
//     getCourses() {
//         return COURSES;
//     }
// }

// const miora = new Moderator({ email: 'miora@gmail.com', password: '178', username: 'Miora', role: 'moderator', rate: 5 });
// const harry = new Admin({ email: 'test@gmail.com', password: '1234', username: 'Harry', role: 'admin' });
// const guest = new Guest({ role: 'guest' });

// console.log(miora.getCourses());
// console.log(harry.getCourses());
// console.log(guest.getCourses());



// Factory
// ПРИМЕР ДИЗАЙН ПАТТЕРНА ПРОЕКТИРОВАНИЯ НА ОСНОВЕ ПОЛИМОРФИЗМА
class FullTime {
    constructor () {
      this.rate = '$12'
    }
}
  
class PartTime {
    constructor () {
      this.rate = '$11'
    }
}
  
class Temporary {
    constructor () {
      this.rate = '$10'
    }
}
  
class Contractor {
    constructor () {
      this.rate = '$15'
    }
}


// // ЕДИНСТВЕННОЕ МЕСТО ДЛЯ СОЗДАНИЯ ИНСТАНСА КЛАССА И ДОБАВЛЕНИЯ ВСЕМ ИНСТАНСАМ ОДИНАКОВОГО МЕТОДА
class Employee {
    create (type) {
      let employee
      if (type === 'fulltime') {
        employee = new FullTime()
      } else if (type === 'parttime') {
        employee = new PartTime()
      } else if (type === 'temporary') {
        employee = new Temporary()
      } else if (type === 'contractor') {
        employee = new Contractor()
      }
      employee.type = type;
      employee.say = function () {
        console.log(`${this.type}: rate ${this.rate}/hour`)
      }
      return employee;
    }
}

const factory = new Employee()
fulltime = factory.create('fulltime')
parttime = factory.create('parttime')
temporary = factory.create('temporary')
contractor = factory.create('contractor')

fulltime.say()
parttime.say()
temporary.say()
contractor.say()