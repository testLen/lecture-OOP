// КЛАСС С ВНУТРЕННИМИ, СКРЫТЫМИ СВОЙСТВАМИ (_title, _description, _prise)
// НАРУЖНЫМ МЕТОДОМ ВЗАИМОДЕЙСТВИЯ - getPrise на чтение цены.
// class Merchandise {
//     _title;
//     _description;
//     _prise;
//     constructor({ title, description, prise }) {
//         this._title = title;
//         this._description = description;
//         this._prise = prise; 
//     }
//     getPrise(user) {
//         return this._prise*user.getPriceRate();
//     }
// }
// ЗАЧЕМ ТАК ДЕЛАТЬ? 
// - получение цены может измениться, например, поменялся процент скидки, если везде используем в коде
// только предоставленный метод - в коде нм ничего менять не надо. только в единственом месте
// - merchandise.getPrise(user); читается короче и понятнее, чем merchandise._prise*user.getPriceRate();


// КЛАСС ПОЛЬЗОВАТЕЛЯ В КОТОРОМ СКРЫТ ПОДСЧЁТ СКИДКИ НА ОСНОВЕ СДЕЛАННЫХ ПОКУПОК
// class User {
//     constructor(purchasesPerMonth = 0) {
//         this.purchasesPerMonth = purchasesPerMonth;
//         this._rate = this._calculateRate(purchasesPerMonth);
//     }
//     _calculateRate(purchasesPerMonth) {
//         if (this.purchasesPerMonth > 20) {
//             return 5;
//         } else if (purchasesPerMonth > 10) {
//             return 3;
//         } else {
//             return 1;
//         }
//     }
//     getPriceRate() {
//         return 1/this._rate;
//     }
//     addPurchase() {
//         this.purchasesPerMonth += 1;
//         this._rate = this._calculateRate(this.purchasesPerMonth);
//     }
// }

// const user1 = new User(25);
// const user2 = new User(19);
// const user3 = new User();

// const ball = new Merchandise({ title: 'ball', description: 'Lorem Ipsum', prise: 15 });

// console.log(ball.getPrise(user1));
// console.log(ball.getPrise(user2));
// console.log(ball.getPrise(user3));

// for(let i = 0; i < 22; i++) {
//     user3.addPurchase()
// }

// console.log(ball.getPrise(user3));



// ПРИМЕР ПОДКЛЮЧЕНИЯ БАЗЫ ДАННЫХ В РЕАЛЬНОЙ ЖИЗНИ НА СТОРОНЕ БЭКЕНДА
// class Database {
//     _uri; // скрытые свойства
//     _provider; // скрытые свойства
//     _connection; // скрытые свойства

//     constructor(uri, provider) {
//         this.uri = uri;
//         this.provider = provider;
//     }

//     connect() { // открытый API - метод для работы с инстансом класса снаружи. мы не обращаемся напрямую к скрытым свойствам
//         // здесь мы просто подсоединяемся к базе данных и то, как именно это работает - скрыто от нас.
//         try {
//             this._connection = this._provider.establishConnection(this._uri);
//         } catch(error) {
//             throw new Error('Could not connect!');
//         }
//     }

//     disconnect() { // открытый API - метод для работы с инстансом класса снаружи. мы не обращаемся напрямую к скрытым свойствам
//         this._connection.close();
//     }
// }


// //ПЛОХОЙ ПРИМЕР ИСПОЛЬЗОВАНИЯ
// db._connection.close();
// // проблемы, мы влазим в ответственность класса и, если в какойто момент захотим поменять логику внутри класса
// // в методе disconnect нам надо будет помнить места (искать), где мы используем прямое взаимодействие.


// // ПРАВИЛЬНОЕ ИСПОЛЬЗОВАНИЕ
// const db = new Database('testUrl', sqlEstablish);
// db.connect();
// db.disconnect();


// Есть специальные методы get, set. Они позволяют читать и за писывать (соответственно) значения,
// добавляя или не добавляя дополнительные действия. get - чтение, set - запись

// ИНКАПСУЛЯЦИЯ С ВАЛИДАЦИЕЙ ЗНАЧЕНИЙ ПРИ ЗАПИСИ
// зщита от записи отрицательных чисел
// class Rectangle {
//     _width;
//     _height;
//     constructor({ width, height }) {
//         this.width = width;  
//         this._height = height;
//     }
//     // не добавляет дополнительные действия
//     get width() {
//         return this._width;
//     }
//     // добавляет дополнительно проверку на отрицательное устанавливаемое значение
//     set width(value) {
//         this._width = value <= 0 ? 1 : value;
//     }
//     calcArea() {
//         return this.width*this._height;
//     }
//     calcPeimeter() {
//         return (this._height + this.width)*2;
//     }
// }

// const rect = new Rectangle({ width: 15, height: 2 });
// console.log(rect.calcArea());
// console.log(rect.calcPeimeter());

// rect.width = -2;
// console.log(rect.width);
// если бы использовали для записи напрямую свойство _width - могли бы записать туда отрицательное число,
// чего в реальной жизни быть не может. Получили бы не правильные значения для методов calcArea
// и calcPeimeter, когда использовали их


// ДАЁМ ДОСТУП ТОЛЬКО НА ЧТЕНИЕ ДАННЫХ, с помощью get
// (возможность записи только на момент создания)
// class User {
//     username;
//     password;
//     _id;

//     constructor({ username, password }) {
//         this.username = username;
//         this.password = password;
//         this._id = this.getRandomNum();
//     }

//     getRandomNum() {
//         return Math.floor(Math.random() * 1000);
//     }

//     get id() {
//         return this._id;
//     }
// }

// const user1 = new User({ username: 'Umber', password: '14523' });
// const user2 = new User({ username: 'Trawis', password: '96875' });

// user1.id = 25;
// console.log(user1);



// ИСПОЛЬЗОВАНИЕ SET ДЛЯ СКРЫТИЯ РЕАЛИЗАЦИИ ДОБАВЛЕНИЯ ТАБЛИЦЫ.
// class TableContainer {
//     _tables = [];
//     get tables() {
//         return this._tables;
//     }
//     set tables(table) {
//         this._tables.push(table);
//     }
// }

// const tableContainer = new TableContainer();
// console.log(tableContainer);
// tableContainer.tables = { name: 'table1', size: '12GB' };
// console.log(tableContainer);



// ЗАДАНИЕ
// написать класс Car,
// в котором есть свойства: prise, model, kilometersDriven
// метод getFinallPrice который возвращает стоимость авто,
// в зависимости от коэффициента пройденного расстояния

// class Car {
//     constructor({ prise, model, kilometersDriven }) {
//         this._prise = prise;
//         this._model = model;
//         this._kilometersDriven = kilometersDriven;
//     }
//     getFinallPrice() {
//         return `${(this._prise*this._kilometersDriven/25).toFixed()} $`;
//     }
// }

// const car1 = new Car({ prise: 1000, model: 'VAZ', kilometersDriven: 100000 });
// const car2 = new Car({ prise: 1500, model: 'Saab', kilometersDriven: 1000 });
// console.log('car1: ', car1.getFinallPrice());
// console.log('car2: ', car2.getFinallPrice());