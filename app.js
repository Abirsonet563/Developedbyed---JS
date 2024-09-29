//For Loop

const name = ["Abir","Hasan","Saif","Hasan"]

for (names of name){
    console.log(names);
    console.log(`Hello There ${names}`)
}

//Add condition inside Foor Loop
for (names of name){
    if (names === "Abir"){
        console.log("Abir In my List");
        // break;
    }
}

//while loop
let loading = 100

while(loading < 1000){
    console.log("Still Loading")
    loading ++;
}

while (loading < 1001){
    console.log("Still Loading")
    loading += 1;
}