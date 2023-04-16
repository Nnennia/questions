//Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
function areaOfTriangle(b,h){
    area = 0.5 * b * h
    console.log(area)
}
areaOfTriangle(5,6)

function areaTriangle(){
    let side1 = 5; 
    let side2 = 6; 
    let side3 = 7; 
    let perimeter = (side1 + side2 + side3)/2;
    let area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
    console.log(area);
}