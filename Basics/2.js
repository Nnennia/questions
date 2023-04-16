//Write a function that comapres two arrays
//returns a boolean if the first array is a subset of the other

function compare(arrayOne, arrayTwo){
    arrayOne = []
    arrayTwo = []
    const containsAll = arrayOne.every(element => {
        return arrayTwo.includes(element);
    });
    console.log(containsAll)
}

compare(["west", "thanks"], ["west", "tsjs"]);