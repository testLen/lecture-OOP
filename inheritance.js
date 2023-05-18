// НАСЛЕДОВАНИЕ В ОБЪЕКТАХ
// const a = {
//     text: 'Hello',
//     color: 'white'
// };

// С ИПОЛЬЗОВАНИЕМ __proto__ ИЗБЕГАТЬ
// // __proto__ хоть и было стандартизировано, его использование плохо влияет на производительность
// // рекомендуется использовать Object.create вместо этого. (R) MDN.
// const b = {
//     __proto__: a,
//     fontSize: '20px',
// };
// console.log(b);

// ПЕРЕБОР СВОЙСТВ В ОБЪЕКТЕ
// с учётом наследования
// for (key in b) {
//     console.log('from for ... in ' + key + ': ' + b[key]);
// }
// без учёта наследования
// console.log('Object.entries: ', Object.entries(b));



// СДЕЛАТЬ НАСЛЕДОВАНИЕ БЕЗ ИСПОЛЬЗОВАНИЯ __proto__
// Object.getPrototypeOf, Object.setPrototypeOf
// const obj = {
//     a: 20,
//     b: 15
// };
// console.log(Object.getPrototypeOf(obj));

// const grand = {
//     c: 21
// };
// Object.setPrototypeOf(obj, grand);
// for (key in obj) {
//     console.log('from for ... in ' + key + ': ' + obj[key]);
// }
// console.log(Object.getPrototypeOf(obj));


// ЕЩЁ ОДИН СПОСОБ СДЕЛАТЬ НАСЛЕДОВАНИЕ БЕЗ ИСПОЛЬЗОВАНИЯ __proto__
// Object.create(), 
// const vehicle = {
//     type: 'vehicle',
//     drive() {
//         console.log(this.type + ' make wroom');
//     }
// };
// vehicle.drive();

// const bike = Object.create(vehicle);
// bike.type = 'bike';
// bike.drive();
// vehicle.drive();
// console.log(vehicle);



// НАСЛЕДОВАНИЕ В КЛАССАХ
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
// //     // ДОБАВЛЕНИЕ ОБЩЕГО МЕТОДА ДЛЯ ПЕРЕИСПОЛЬЗОВАНИЯ И ОТСУТСТВИЯ ДУБЛИРОВАНИЯ В КОДЕ
//    isPasswordValid() { // раскоментить только после показа основной части по наследованию
//        return this.password.length > 5;
//    }
// }

// class Admin extends User {
//     constructor({ email, password, username, role }) {
//         super({ email, password, username, role })
//     }
//     changeUserStatus(user) {
//         console.log(user.username + '\'s status was changed!');
//     }
// }

// const harry = new Admin({ email: 'test@gmail.com', password: '123478', username: 'Harry', role: 'admin' });
// console.log(harry);
// console.log(harry.login());
// console.log(harry.logout());
// console.log('is password valid: ', harry.isPasswordValid()); // открыть после добавления метода isPasswordValid

// class Moderator extends User {
//     constructor({ email, password, username, role, rate }) {
//         // this.rate = rate; // будет ошибка, super должно идти первым!
//         super({ email, password, username, role });
//         this.rate = rate;
//     }
//     moderateUser(user) {
//         console.log(this.username + ' moderated ' + user.username);
//     }
//     // ДЕЛАЕМ СПЕЦИФИЧНЫМ ДЛЯ КОНКРЕТНОГО КЛАССА.
//     // добавить после демонстрации для админа и после того, как для Миоры не пройдёт
//     isPasswordValid() {
//         return this.password.length > 2;
//     }
// }

// const miora = new Moderator({ email: 'miora@gmail.com', password: '178', username: 'Miora', role: 'moderator', rate: 5 });
// console.log(miora.moderateUser(harry));
// console.log(harry.changeUserStatus(miora));
// //  // добавить после добавления isPasswordValid для модератора
// console.log('is password valid for MIORA: ', miora.isPasswordValid());

// // добавить только после того, как покажу работу с остальной валидацией
// console.log('---------------------------------------------------------------------');
// class Student extends User {
//     constructor({ email, password, username, role }) {
//         super({ email, password, username, role });
//     }

//     isPasswordStrong() {
//         return this.password.includes('abc');
//     }

//     isPasswordValid() {
//         const isValid = super.isPasswordValid();
//                // здесь используем super потому, что хотим обратиться к методу родителя с таким же названием
//                // если бы название было другим - можно было бы просто через this.
//         console.log('Student password is valid: ', isValid);
//         return isValid && this.isPasswordStrong();
//     }
// }

// const student = new Student({ email: 'jake@gmail.com', password: '179595', username: 'Jake', role: 'student', rate: 5 });
// console.log('For student ', student.isPasswordValid());



// class User {
//     sayHello() {
//         console.log(this.name, ' Hello');
//     }
// }

// const alex = new User();
// console.log('alex: ', alex);

// class Person extends User {
//     constructor(name, email) {
//         super(); // без него будет ошибка. если у родительского элемента есть constructor
//         // должен быть вызван super у наследника
//         this.name = name;
//         this.email = email;
//     }
// }

// const li = new Person('li', 'li@gmail.com');
// console.log(li);

// class Person {
//     firstName;
//     lastName;
//     age;
//     constructor({ firstName, lastName, age }) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
// }

// class Employeer extends Person {
//     // раскоментить только после показа логов
//     inn;
//     num;
//     snills;
//     constructor({ firstName, lastName, age, inn, num, snills }) {
//         super({ firstName, lastName, age });

//         this.inn = inn;
//         this.num = num;
//         this.snills = snills;
//     }
// }
// const employeer1 = new Employeer({ firstName: 'AI', lastName: 'Droid', age: 5 /*,inn: 15, num: 15, snills: 15*/ });
// console.log(employeer1);

// class Developer extends Employeer {
//     level;
//     constructor({ firstName, lastName, age, inn, num, snills, level }) {
//         super({ firstName, lastName, age, inn, num, snills });

//         this.level = level;
//     }
// }

// const dev = new Developer({ firstName: 'AI', lastName: 'Droid', age: 5 ,inn: 15, num: 15, snills: 15, level: 'SENIOR' });
// console.log('dev: ', dev);

// ЗАДАНИЕ
// написать иерархию классов Vehicle (со свойством type) => Auto (со свойством engineType) => Electrocar (со свойством model)
// создать по одному экземпляру класса, вывести в консоль
// !сделать после вывода в консоль - добавить метод drive в класс Auto, 
// который будет выводить в консоль 'vehicle type ' + this.type + ' drive with engine ' + this.engineType;
// вызвать на инстансе Electrocar;

class Vehicle {
    constructor(type) {
        this.type = type;
    }
}

class Auto extends Vehicle {
    constructor(engineType) {
        super('auto')
        this.engineType = engineType;
    }
    drive() {
        return 'vehicle type ' + this.type + ' drive with engine ' + this.engineType;
    }
}

class Electrocar extends Auto {
    constructor(model) {
        super('electro')
        this.model = model;
    }
}

const vehicle = new Vehicle('vehicle');
const auto = new Auto('gasoline');
const electrocar = new Electrocar('Model X');
console.log('v: ', vehicle);
console.log('auto: ', auto);
console.log('e: ', electrocar);
console.log('e: ', electrocar.drive());