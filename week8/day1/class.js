//anagram 
const angram = (str1, str2) => {
    if(str1.length !== str2.length){
        return false
    }
    let sort1 = str1.split('').sort();
    let sort2 = str2.split('').sort();
    return sort1.join('') === sort2.join('')
}