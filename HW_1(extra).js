 //Задания с разным количеством звездочек:)

 let age_1 = 10, 
     age_2 = 18, 
     age_3 = 60;

//1* Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст...
/*
const checkAge = function(age) {
    let age_2 = 18,
        age_3 = 60;
    if (age < age_2) {
        return ("You don't have access cause your age is "+ age + ". It's less then "+age_2);
       } else if (age >= age_2 && age <= age_3 ) {
        return "Welcome!";
       } else {
        return "Keep calm and look Culture channel";
          };
    }

    console.log ("First case: ",checkAge(17));
    console.log ("Second case: ",checkAge(18));
    console.log ("Third case: ",checkAge(61));
 */
    //2*: Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

 /*   
    const checkAge = function(age) {
        if(typeof(age) != 'number') {return (`Нужно число, дурачок!` );}
        let age_2 = 18,
            age_3 = 60;
        if (age < age_2) {
            return ("You don't have access cause your age is "+ age + ". It's less then "+age_2);
           } else if (age >= age_2 && age <= age_3 ) {
            return "Welcome!";
           } else {
            return "Keep calm and look Culture channel";
              };
        }
    
        console.log ("First case: ",checkAge(17));
        console.log ("Second case: ",checkAge('привет'));
*/
//3**: Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
/*
const checkAge = function(age) {
    age = Number(age);
    
    if( isNaN(age) ) {return (`Нужно число, дурачок!` );}
    let age_2 = 18,
        age_3 = 60;

    if (age < age_2) {
        return ("You don't have access cause your age is "+ age + ". It's less then "+age_2);
       } else if (age >= age_2 && age <= age_3 ) {
        return "Welcome!";
       } else {
        return "Keep calm and look Culture channel";
          };
    }

    console.log ("First case: ",checkAge('2'));
    console.log ("Second case: ",checkAge('привет'));
*/
//4***: Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

const checkAge = function(age) {
    age = Number(age);
    
   // if( isNaN(age) ) {return (`Нужно число, дурачок!` );}
      if( !Number.isFinite(age) ) {return (`Нужно число, дурачок!`);}

    let age_2 = 18,
        age_3 = 60;

    if (age < age_2) {
        return alert("You don't have access cause your age is "+ age + ". It's less then "+age_2);
       } else if (age >= age_2 && age <= age_3 ) {
        return alert("Welcome!");
       } else {
        return alert("Keep calm and look Culture channel");
          };
    }

  console.log (checkAge(prompt('Enter your age', '')));
    