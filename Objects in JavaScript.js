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