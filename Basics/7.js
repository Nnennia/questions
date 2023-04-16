//Write a JavaScript program to rotate the string 
//'w3resource' in right direction by periodically 
//removing one letter from the end of the string and 
//attaching it to the front.

// function leftrotate(str, d)
// {
//     let ans = str.substring(d, str.length) + 
//     str.substring(0, d);
//     return ans;
// }

// function rightrotate(str, d)
// {
//     return leftrotate(str, str.length - d);
// }

function animate_string(text) {
    setInterval(function () 
    {
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    textNode.data = text;
    }, 100);
}

console.log(animate_string("test"))