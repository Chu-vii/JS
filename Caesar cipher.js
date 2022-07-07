
/*
Итак, нужно написать функцию, которая будет видоизменять входную строку шифром Цезаря со сдвигом ровно ОДИН.  (Каждая буква в подаваемой строке меняется на следующую по алфавиту, либо на предыдущую в зависимости от направления кодирования)

!! Например при сдвиге вперед (С1) - из слова "Hello" получается слово "Ifmmp".
При сдвиге назад (С0) -  слово "Hello" превратится в "Gdkkn"

На вход функции подается строка и последовательность кодирования/декодирования.
*/

const Rom = function(word, flow){
    flow = flow.toLowerCase();
  let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let index = '';
  let arr_word = word.split('');
  
  for (let a=0; a < arr_word.length; a++){
        
        if (arr_word[a] === arr_word[a].toLowerCase()) {
          index = arr_en.indexOf(arr_word[a]);
          if (flow == 'c0') { (index != 0) ? (arr_word[a] = arr_en[index-1]):(arr_word[a] = 'z')}
          else if(flow == 'c1') {(index != 25) ? (arr_word[a] = arr_en[index+1]):(arr_word[a] = 'a') };
          
        }else{ index = arr_EN.indexOf(arr_word[a]);
          if (flow == 'c0') { (index != 0) ? (arr_word[a] = arr_EN[index-1]):(arr_word[a] = 'Z')}
          else if(flow == 'c1') {(index != 25) ? (arr_word[a] = arr_EN[index+1]):(arr_word[a] = 'A') };     
        } 
  }
      return arr_word.join('');  
  };
  console.log(Rom('ZzZ', 'C1'));
  console.log(Rom('AaA', 'c0'));