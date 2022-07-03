// Instructions
// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out “nested for loops” on Google).
// Do this Daily Challenge by youself, without looking at the answers on the internet.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *
let stars="";
for(let i=5; i>=0 ;i--){
stars+="*"; 
console.log(stars);
}

for(let a=1; a<=6; a++){
    let temp="";
  for(let b=1; b<=row; b++){
    temp+="*";

  }
  console.log(temp);
}