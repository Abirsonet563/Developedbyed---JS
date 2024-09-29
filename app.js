const user = {
    name: "Abir Hasan",
    age: "23",
    married: "False",
    purchase: ["Mobile","Laptop","Bag"],
    sayName: function(){
        console.log(this.name);
    }
};
 user.sayName();
// console.log(user.sayName,user.name);

function apple (){
    console.log("apples")
}
//console.log(this);

//Focuse default window object 
function nameTwo(){
    console.log(this)
}
nameTwo();