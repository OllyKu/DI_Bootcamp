let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
let shoppingList = ["banana", "orange", "apple"];

let myBill = () => {
    let total = 0;
    let getPrice = (key) => {
        let toAddInTotal
        if(stock[key]){
            toAddInTotal = prices[key]
        }else{
            toAddInTotal=0
        }
        total += toAddInTotal
    }
    
    for(let index =0; index<shoppingList.length; index++){
        getPrice(shoppingList[index]);
    }
    return total
}
console.log(myBill())


 //ex 6

 function hotelCost(){
    let userTold
    do{
        let nights = Number(prompt("Enter number of nights: "));
        userTold = !isNaN(Number(nights) || nights === "")
    }while((!userTold))
    let cost = 140*Number(nights)
 }

 function planeRideCost() {
    let destination
    let userTold 
    do{
        destination = prompt("where to ride? ")
        userTold = !(typeof destination !=="string" || destination === "")
    }
 }