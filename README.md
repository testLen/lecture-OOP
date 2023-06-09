# ДОМАШНЕЕ ЗАДАНИЕ - МОДУЛЬ

напишите модуль приветствия
он должен внутри себя содержать фразу приветствия, например
const greeting = 'Hello';
и переменную let name = '';
должен возвращать объект с методами: setName, sayGreeting
setName - утанавливает переданное имя в переменную name
sayGreeting - здоровается возвращая фразу greeting + " " + name;

> модуль реализовать 2умя способами:
> 1. с помощью паттерна модуль
> 2. с помощью расположения в разных файлах и домулей RequireJs (как было в лекции)

***
# ДОМАШНЕЕ ЗАДАНИЕ - ПОЛМОРФИЗМ

1.	Написать класс Publisher, в который можно передать статьи, новости, курсы. Класс должен содержать переданное в массиве, как свойство items.
2.	У класса должно быть один 2 метода: printItems, который будет выводить в консоль сформированное содержимое, add – который будет добавлять в массив item (статью, курс или новость)
3.	Написать класс Item – у которого будут свойства: description, title, метод print, который формирует текст из свойств description, title в виде “Title: текст тайтла. Description: текст дескрипшена”
4.	Написать 3 класса: Article, News, Course.
5.	Унаследовать Article, News, Course от класса Item дополнив или переопределив метод print.
6.	Класс Article – содержит свойства: description, title, author. Метод print выводит текст в формате виде “Title: текст тайтла. Description: текст дескрипшена. By author: имя автора”
7.	Класс News – содержит свойства: description, title, source, date. Метод print выводит текст в формате виде “Source: название источника, Happened on: дата. Title: текст тайтла. Description: текст дескрипшена.”
8.	Класс Course – содержит свойства: description, title, expirationDate. Метод print выводит текст “Not actual” в случае, если expirationDate меньше текущей даты, иначе “Course: тайтл, will be awailable till дата истечения”. Для проверки написать в классе приватный метод isActual, который будет проверять на актуальность.
9.	Для проверки работы создать инстансы классов Article, News, Course. Передать их в инстанс класса Publisher при его создании (через new Publisher). Сделать дополнительно инстанс любого из классов и передать в уже существующий инстанс класса Publisher с помощью метода add. Воспользоваться методом printItems для вывода в консоль результата.

***
> назначение модуля - Спрятать чтото, инкапсулировать данные.
https://learn.javascript.ru/modules-intro
https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Modules

***
# Принципы ООП
1. наследование
2. полиморфизм
3. инкапсуляция

***
# Наследование
Реальная жизнь
Автомобиль -> автомобиль s-class
Автомобиль задаёт общие свойства для всех наследников. Двигатель, колеса
Автомобиль s-class - делает автомобиль специфичным, большие колеса, мощный мотор, скоростные характеристики

Написание программы
Пример: Статья -> Новость/Учебный курс
Цель: Переиспользовать код, не дублируя его.
Основное правило: Лаконичность - минимальные необходимые данные. Для каждого класса.

***
# Полиморфизм
Реальная жизнь
Перемещение из пункта А в пункт Б
Действие - перемещение. Реализация - множество форм, способов, которыми можно добраться - самолёт, поезд, автобус

Написание программы
Пример: Печать статьи - печать учебного курса, печать новости
Цель: Создать общее поведение для группы схожих действий. Позволяет одно и то же имя использовать для решения двух или более схожих, но технически разных задач
Основное правило: единая внешняя форма (название метода, количество аргументов, возращаемое значение)

***
# Инкапсуляция
Реальная жизнь
Механизм работы автомобиля скрыт от нас. Предоставляется только внешний интерфейс, с которым можем взаимодействовать. Кнопка старта - внешний интерфейс (нажимаем сами), то как заводится двигатель и как он работает - внутренняя скрытая реализация (руками двигатель не трогаем).

Написание программы
Пример: уникальный идентификатор статьи, который приходит из базы данных.
Цель: Ограничить доступ к части программы, чтобы её не поломать и не допустить багов в случае изменения работы программы.
Основное правило: скрывать часть кода или данных, которые нужны для работы, но не нужны для использования.