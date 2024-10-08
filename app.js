// const text = document.querySelector(".title");
// const changeColor = document.querySelector(".changeColor");

// //Add Color to Class
// text.style.color= "red";
// //Remove color to Class
// // text.style.remove
// text.style.backgroundColor = "green"

// //To add Class from CSS
// text.classList.add('change')

// //To remove Class from CSS
// text.classList.add('change')

// //Click Me button 
// changeColor.addEventListener('click',function(){
//     // text.classList.remove('change')
//     text.classList.toggle('change') //It will add and remove class upon click
// })
//NameList
// const userList = document.querySelectorAll(".name-list li");
// console.log(userList);

// for (user of userList){
//     user.addEventListener("click",function(){
//         this.style.backgroundColor = 'pink';
//     });
// }

const userList = document.querySelectorAll(".name-list");
const addListBtn = document.querySelector(".addListBtn");
const listInput = document.querySelector(".list-input");

addListBtn.addEventListener("click",function() {
    const newLi = document.createElement("LI");
    const liContent = document.createTextNode(listInput.value);
    newLi.appendChild(liContent);
    userList.appendChild(newLi);
});