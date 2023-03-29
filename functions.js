function funtion_name(person) {
    console.log("I am running");
    console.log(`Hello ${person}`);
    console.log("I am exiting");

    return "I love 12345";
}

let person='Ratnesh';
let whatSaid = `Hello my name is ${person}`;
console.log(`whatSaid : ${whatSaid}`);
whatSaid = funtion_name(person);
//passing variables in function and reciving back parameters
console.log(`whatSaid : ${whatSaid}`);