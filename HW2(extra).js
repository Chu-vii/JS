//"use strict"; 

 // 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

  function sumTo(n) { 
    let result ="";
    for (let i = 1; i<=10;i++) {
      result = result + " "+ n**i;
    }
    return result;
   }
    console.log( sumTo(2) ); 

//1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
function sumTo1(n) { 
        return 2**n;;
   }
    console.log( sumTo1(10) );


/*2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
Пример в консоли:
:)
:):)
:):):)
:):):):)
:):):):):)
*/

  function sumTo2(n) { 
        
        let result ="";
        for (let i = 1; i<=5;i++) {
        result = result + n;
        console.log(result) ;
        } 
    }
   sumTo2(":)"); 

//2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
//2e.g. function printSmile(stroka, numberOfRows)

function sumTo2_1(stroka, numberOfRows) { 
    
        let result ="";
        for (let i = 1; i<=numberOfRows;i++) {
        result = result + stroka;
        console.log(result) ;
        } 
    }

   sumTo2_1("*",3);

/*
3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
e.g. function getWordStructure(word)
В консоли: 
Слово (word) состоит из  (число) гласных и (число) согласных букв

Проверки: 'case', 'Case', 'Check-list'
*/

function getWordStructure(word) { 
    let words = word.toLowerCase()
    let vowels = "aeiouy";
    let vowels_num = 0;
    let arr = words.split('');
        for (let i = 0; i<= arr.length ;i++) {
            
            if ( vowels.includes(arr[i])){
                vowels_num = vowels_num+1;
            }  
        }
        let tacit = arr.length-vowels_num
            
        if ( words.includes("-")){
                tacit = arr.length-1-vowels_num;
            } 
        
    return ("Слово " + word + " состоит из " + vowels_num + " гласных и " + tacit + " согласных букв.");
   }
   console.log(getWordStructure("Check-lost"));

/* 4**. Написать функцию, которая проверяет, является ли слово палиндромом
e.g. function isPalindrom(word)

Проверки: 'abba', 'Abba'
*/

function isPalindrom(word) {
    word = word.toLowerCase()
    let vise = word.split("").reverse().join("");    
    
    if (vise == word) {
        return "You are sladkiy piroshok. It is palindrome";
    } else {
       return "You are ne sladkiy piroshok. It is't palindrome";
    }
}

console.log(isPalindrom('Aвbtba'));

// version 2

function isPalindrom1(word){ 
    wordCase = word
    let flag = true
    word = word.toLowerCase()
    word = word.trim()
    let mid = Math.floor(word.length / 2)
    for (let i = 0; i < mid; i++){
        if (word[i] !== word[word.length-i-1]){
            flag = false
            break
        }    
        flag = true
    }
    if (flag == true) {
        console.log(wordCase, '- слово палиндром')         
    }
    else {
        console.log(wordCase, '- слово не палиндром')    
    }
}
isPalindrom1('Abмba');