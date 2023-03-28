// The concepts of writting Object in JavaScript

let input = 'name';

let alien = {
    name:'Ratnesh',
    age:19,
    language:'Hindi',
    'tech he likes':'C++'
}

console.log(alien);

console.log(alien.name , alien.age);

console.log(alien['name'] , alien['age'] , alien['language'] , alien['tech he likes']);

console.log(alien[input]);
console.log("----------------------- ");

let unknown = {
    name: 'Ratnesh',
    tech: 'C++' ,
    laptop: {
        brand: 'hp',
        ram: 16,
        cpu:'i5' 
    }
}

console.log(unknown?.laptop?.brand);

console.log(unknown?.laptop?.model?.length)

for(let key in unknown) {
    console.log(key , unknown[key]);
}

for(let key1 in unknown.laptop) {
    console.log(key1 , unknown.laptop[key1]);
    delete unknown.laptop[key1];
}

console.log("I am going in");
for(let key1 in unknown.laptop) {

    console.log(key1 , unknown.laptop[key1] , 'I am Running');
}
console.log("I have exited ");

console.log(unknown);