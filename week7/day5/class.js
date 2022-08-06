/* 
create a function called pangram - get the sentence as an input
A pangram is a sentence that contains all the letter of tha alphabet

return true if the sentense contains all
rturn false if not
*/
/*
const pangram = (s) => {
  let alphabet = "abcdefghijklmnopqrstuvyxyz";
  let lowercase = s.toLowerCase().split(' ').join('');
  // console.log(lowercase);
  for(let i = 0; i < alphabet.length; i++){
    if(lowercase.indexOf(alphabet[i]) === -1){
      return 'not pangram' // false
    }
  }
  return 'pangram' // true
} 
*/
// const isPangram = (string) => 
//      new Set(string.toLowerCase().match(/[a-z]/g)).size === 26;

// console.log(isPangram("The quick brown fox jumps over the lazy dog")); 
// console.log(isPangram('We promptly judged antique ivory buckles for the prize'));

// function pangram(string) {
//     let alphabet = "abcdefghijklmnopqrstuvwxyz";
//     let lowercase = s.toLowerCase().replace(/\s/g, "");
   
//     for(let i = 0; i < alphabet.length; i++){
//      if(lowercase.indexOf(alphabet[i]) === -1){
//        return "not pangram";
//      }
//     }
   
//    return "pangram";
//  }