// Write a JavaScript program to remove a character at the 
//specified position of a given string and return the new string
function remove(word, n){
    str1 = word.substring(0,n)
    str2 = word.substring(n + 1, word.length)
    return str1 + str2
}

console.log(remove("Fertch", 3))