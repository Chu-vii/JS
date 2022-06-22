//HW_3

// Task 1. Написать функцию, которая найдет и выведет в консоль юзеров, зарегистрированных 09.10.2021 и 10.10.2021). Массив в task1.txt

const users = [
    {
        firstName: 'John',
        lastName: 'Caper',
        phone: '7436676737634',
        registrationDate: '12.10.2021'
    },
    {
        firstName: 'Clark',
        lastName: 'Kent',
        phone: '4346676737634',
        registrationDate: '16.09.2021'
    },
    {
        firstName: 'Tony',
        lastName: 'Stark',
        phone: '7436698337634',
        registrationDate: '11.10.2021'
    },
    {
        firstName: 'Bruce',
        lastName: 'Wayne',
        phone: '1111176737634',
        registrationDate: '09.10.2021'
    },
    {
        firstName: 'Star',
        lastName: 'Lord',
        phone: '7439374737634',
        registrationDate: '10.10.2021'
    },
    {
        firstName: 'Kate',
        lastName: 'Bishop',
        phone: '7436693647634',
        registrationDate: '11.10.2021'
    },
    {
        firstName: 'Jerry',
        lastName: 'James',
        phone: '7409048737634',
        registrationDate: '10.10.2021'
    },
    {
        firstName: 'Jeremy',
        lastName: 'Clarkson',
        phone: '743667600289334',
        registrationDate: '16.10.2020'
    },
    {
        firstName: 'Robert',
        lastName: 'Patrik',
        phone: '7436676730093',
        registrationDate: '10.10.2020'
    },
    {
        firstName: 'Jonny',
        lastName: 'Sins',
        phone: '74923982737634',
        registrationDate: '01.01.2021'
    },
    {
        firstName: 'Andrew',
        lastName: 'Garfield',
        phone: '743667988344',
        registrationDate: '09.10.2019'
    },
    {
        firstName: 'Jane',
        lastName: 'Foster',
        phone: '74368783427634',
        registrationDate: '09.10.2019'
    },
    {
        firstName: 'Rick',
        lastName: 'Smith',
        phone: '700000037634',
        registrationDate: '12.10.2021'
    },
];

var newUsers =  users.filter(function(user) {
    return  user.registrationDate == '10.10.2021' || user.registrationDate == '09.10.2021';
});
console.log(newUsers) ;

/******result*****
[
    {
      firstName: 'Bruce',
      lastName: 'Wayne',
      phone: '1111176737634',
      registrationDate: '09.10.2021'
    },
    {
      firstName: 'Star',
      lastName: 'Lord',
      phone: '7439374737634',
      registrationDate: '10.10.2021'
    },
    {
      firstName: 'Jerry',
      lastName: 'James',
      phone: '7409048737634',
      registrationDate: '10.10.2021'
    }
  ]

******result*****
*/

//Task 2* Откройте в VSCode task2.json файл. Скопируйте из него JSONку, вставьте в свой код (присвоив в переменную).
//Дан массив объектов. Каждый объект является идентификационной карточкой человека. Нам нужно хранить только уникальные значения в этом массиве. Реализуйте функцию, которая будет выполнять эту работу.
//Task 2*** Реализуйте считывание из JSONки из файла task2.json с помощью, например, модуля fs. для дальнейшего использования в функции, описанной в задании

const customers = require("./task2 (HW3).json"); 
// не бажано. Если очень большой JSON файл, он захлебнется в цикле событий.
// require будетможет прочитать файл только один раз. Последующие вызовы, require для того же файла, вернут кэшированную копию. Не подойдет к файлу который постоянно обновляется.
// Если файл не имеет расширения .json, require не будет обрабатывать содержимое файла как JSON

var fs = require('fs');
var json = JSON.parse(fs.readFileSync("./task2 (HW3).json", 'utf8'));
//Синхронная версия

/*var fs = require('fs');

fs.readFile("./task2 (HW3).json", 'utf8', function (err, data) {
    if (err) throw err; // we'll not consider error handling for now
    var obj = JSON.parse(data);
});
//Асинхронная версия
*/


const removeDuplicates = function(arr) {
    let persons = [];

    arr.forEach((el) => {
      if (!persons.includes(JSON.stringify(el))) {
        persons.push(JSON.stringify(el));
      }
    });
    return persons.map(el => JSON.parse(el));
}
console.log('===================BEST========================');
console.log(removeDuplicates(json).length);

//____________________________________________________________________________

function removeDuplicates1(arrayIn) {
    let arrayOut =[arrayIn[0]];
    let arrname = [];
   //  console.log(arrayIn[0].name);
    for (let a = 1; a < arrayIn.length; a++) {
   //     console.log(arrayIn[a].name);
        arrname.length=0;
      for (let b = 0; b < arrayOut.length; b++) {
    //      console.log(arrayOut[b].name);
          arrname.push(arrayIn[b].name)
      }
          if (!arrname.includes(arrayIn[a].name)) {
          arrayOut.push(arrayIn[a]) 
        }
      
    }
    arrayIn = arrayOut;
    return arrayIn;
  }
  console.log(removeDuplicates1(customers).length);



