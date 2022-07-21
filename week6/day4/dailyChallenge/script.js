let client = "John";

let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference

// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.

const displayGroceries=()=>groceries['fruits'].forEach(element=>console.log(element))
displayGroceries();

// Create another arrow function named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
// In the function, create a variable named shopping that is a copy of the groceries object. 
// (Tip : make the shopping variable equal to the groceries variable)
// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
// Change the value of the payed key to false. Will we also see this modification in the shopping object ? Why ?

const cloneGroceries = () =>{
    const user=client;
    client="Betty";
   console.log(user);
   //no because when the value is changing its pointing on a new adress in the stack
   const shopping=groceries;
   groceries['totalPrice']="35$"; 
   console.log(shopping['totalPrice']);
   //yes because an object is not a simple type of variable; its more complex one like an array... and if you want to assign a value you have to do it deeper because they are pointing on the same addrees on the head and if you change a value its will change for both
   groceries['other']['payed']=false;
   console.log(shopping['other']['payed']);
   //yes because of the same reason as before
  
  
  } 
    cloneGroceries();
