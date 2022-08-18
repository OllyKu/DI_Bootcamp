/* 
Instructions :
Create a function that takes a date object and return string in the following format: YYYYMMDDHHmmSS.

The format should contain a 4 digit year, 2 digit month, 2 digit day, 2 digit hour(00-23), 2 digit minute and 2 digit second.
If any of the value has only single digit, you must use zero prefix, so that the result string length is always the same.

Examples
formatDate(new Date(2020, 6, 4, 8, 0, 0)) ➞ "20200704080000"

formatDate(new Date(2019, 11, 31, 23, 59, 59)) ➞ "20191231235959"

formatDate(new Date(2020, 6, 4)) ➞ "20200704000000"

Notes
Assume Date year input will always be greater than 1970.

Try not to rely on the default Date.toString() output in your implementation.

Be aware that the Date's month field is zero based (0 is January and 11 is December).

*/
const addOneIfMonth = (value, key) => key === "getMonth" ? (value + 1).toString() : value.toString();
const formatDate = (dateObj) => {
    let obj = {
               getFullYear: "",
               getMonth: "",
               getDate: "",
               getHours: "",
               getMinutes: "", 
               getSeconds: "",
    };
    for (let key in obj){

        // Way to use string as a function name. The function calling : obj[stringAsFunName]()
        let value = dateObj[key]();
        ((dateObj[key]()).toString()).length < 2  ?  obj[key] = "0" + addOneIfMonth(value, key) : obj[key] = addOneIfMonth(value, key);
    }
    return Object.values(obj).join('');
}
console.log(formatDate(new Date(2020, 6, 4, 8, 0, 0))) 
console.log(formatDate(new Date(2019, 11, 31, 23, 59, 59))) 
console.log(formatDate(new Date(2020, 6, 4))) // "20200704000000"