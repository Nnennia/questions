// Write a JavaScript program to calculate days left until next Christmas
today=new Date();
const cmas=new Date(today.getFullYear(), 11, 25);
if (today.getMonth()==11 && today.getDate()>25) // because get month starts from 0 so dec would be 11
{
    cmas.setFullYear(cmas.getFullYear()+1); 
}  
const dayMilliSecond=1000*60*60*24;
console.log(`${Math.ceil((cmas.getTime()-today.getTime())/(dayMilliSecond))} days left until Christmas!`);
