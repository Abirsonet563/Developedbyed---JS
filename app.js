const name = "Abir Hasan";

function toUpper (){
    console.log("Abir Hasan");
    console.log("Abir Hasan");
}
toUpper();

//---------------------
//Inject Value through function

function adder(num1, num2){
    console.log(num1 + num2);
    console.log(num2 + num1);
}
adder(12,21);

//UpperCase
function upper(text){
 const upperLetter = text.toUpperCase();
 console.log(upperLetter); 
}
upper(name);

//Another way to Write Function
const name2 = function(){
    console.log("Abir");
}
name2();

//Arraw Function
const arrows = () =>{
    console.log("Arraw Function")
} 
arrows();