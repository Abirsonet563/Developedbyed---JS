//If else statement 
const age = 13;

if (age > 13){
    console.log("age is bigger than 14")
}else if(age === 13){
console.log("You are 13 years old")
}
else{
    console.log("Age is smaller than 14")
}

//Double Condition check
const dice1 = 6;
const dice2 = 3;

if(dice1 === 6 && dice2 === 3){
    console.log("You did it")
}else{
     console.log("You didn't")
}

//Double Condition check but one condition need to be true

if(dice1 === 6 || dice2 === 6){
    console.log("You did it")
}else{
     console.log("You didn't")
}