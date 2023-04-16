//Write a JavaScript program to create a new string adding "Py" in front of a given string. 
//If the given string begins with "Py" then return the original string.

function string(word){
    if (word.startsWith("Py")){
        return word
    }
    else{
        return "Py" + word
    }
}
console.log(string("thon"))