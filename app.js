//Array

const schedule = ["Wake up", "Eat", "Watch things on Netflix"]

//Print Array value
console.log(schedule[1]);
//Push Array value
 schedule.push("Sleep");

//Remove array value
schedule.pop();
//To remove from front
schedule.shift();
//To add at the front
schedule.unshift("Hi");
console.log(schedule);

//To get the index number
console.log(schedule.indexOf("Eat"))

//Add another layer on it

const film = schedule.indexOf("Watch things on Netflix")
console.log(film)
//We can write it this way as well.
console.log(schedule[film])