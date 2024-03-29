console.log("Hello world");


console.log("\n-----------------\n");
// same file for practicing the variables -----------------
console.log("the variables");
num = 2 + 2;
console.log(num);
console.log(num + 3);


console.log("\n-----------------\n");
// the concept of let -----------------
console.log("the concept of let");

let userName = "Ratnesh";
console.log(userName);


console.log("\n-----------------\n");
// constants concept -----------------
console.log("constants concept");

let radius = 5;
const pi = 3.14;
let area;

radius = 6;
// pi=5 this can not happen as its defind as constant -----------------
area = pi * radius * radius;

console.log(area);


console.log("\n-----------------\n");
// concept of data types -----------------
console.log("data types");

let data = 3; //number
let user = "Ratnesh"; //string

let num1 = 23456789045675;
console.log(num1);


console.log("\n-----------------\n");
//typeof function in java script -----------------
console.log("typeof function in java script");

console.log(typeof num1);
console.log(typeof user);


console.log("\n-----------------\n");
// hexa decimal number system im js -----------------
console.log("hexa decimal number system");

let num2 = 0xff;
console.log(num2);

console.log(typeof num2);
console.log(num2 * 5);


console.log("\n-----------------\n");
// floating decimal number type in javascript -----------------
console.log("floating decimal number type");

let num3 = 1.23456789e34;
console.log(typeof num3);
console.log(num3);


console.log("\n-----------------\n");
//The exponential way of writing number -----------------
console.log("exponential way of writing number");

let num31 = 1.2e14;
console.log("1.2*10^14 = ",num31);


console.log("\n-----------------\n");
//special way of writing zeros -----------------
console.log("special way of writing zeros");

let num4 = 10_00_00_00_000;
console.log(num4);


console.log("\n-----------------\n");
//infinty in js -----------------
console.log("infinty ");

let a = 5 / 0;
let b = -5 / 0;

console.log(a);
console.log(b);

let c = Number.MAX_VALUE;

console.log(" c =", c);

c = c * 10;

console.log("10 * c =", c);

let d = Number.MIN_VALUE;

console.log(" d =", d);  

d = d / 10;

console.log("d / 10 =", d);


console.log("\n-----------------\n");
// data type Big int in js -----------------
console.log(" data type Big int ");

let x = 5678998765345678n;

console.log("x = ", x);

console.log("x * 5n = ", x * 5n);

console.log(typeof x);


console.log("\n-----------------\n");
// concept of strings -----------------
console.log("concept of strings");

let firstName = "Ratnesh"
let lastName = "Pasi"

console.log("concatenation = ",firstName +" "+ lastName)
console.log("Escape character = \"\\\"")
console.log("'singel quotes' and "+'"double quotes"')
console.log("use of \\t \\n \\v \\b = 'ratnesh\t tara\vkant \npasif\b'")



console.log("\n-----------------\n");
// concept of type conversion -----------------
console.log("type conversion ");

let one_more = 123;

console.log(one_more, typeof one_more);
let written = String(one_more);

console.log(written, typeof written);
written = Number(written);

console.log(written, typeof written);
one_more = Boolean(one_more);

console.log(one_more, typeof one_more);
console.log(!one_more, typeof one_more);
console.log(!!one_more, typeof one_more);


console.log("\n-----------------\n");
//concept of type of coersion -----------------
console.log("type of coersion");

let test;
console.log(test, typeof test);

test = 6;
console.log(test, typeof test);

test = test + "";
console.log(test, typeof test);

test = test - 3;
console.log(test, typeof test);

test = test + "abc";
console.log(test, typeof test);

test = test - 2;
console.log(test, typeof test);

test = "1234 leave me";
console.log(parseInt(test));

test = "haha!1234 leave me";
console.log(parseInt(test));


console.log("\n-----------------\n");
// arithematic operations concepts -----------------
console.log("arithematic operations concepts");

let number1 = 4;
let number2 = 2;

let result = number1 + number2;
console.log(result);

result = number1 - number2;
console.log(result);

result = number1 * number2;
console.log(result);

result = number1 / number2;
console.log(result);

result = number1 ^ number2;
console.log(result);

result = String(number1) + String(number2);
console.log(result);

result = Boolean(number1) + Boolean(number2);
console.log("result = ", result);

result += 5;
console.log("result += 5", result);

result++;
console.log("result++", result);

++result;
console.log("++result", result);

result--;
console.log("result--", result);

--result;
console.log("--result", result);


console.log("\n-----------------\n");
// concept of relational operators -----------------
console.log(" relational operators ");

console.log("5 > 6 =",5 > 6);

console.log("7 > 6 =",7 > 6);

console.log("5 >= 5 =",5 >= 5);

console.log("7 <= 7 =",7 <= 7);

let str1 = "Pen";
let str2 = "Book";

data = str2 > str1;

console.log(data);
str1 = "3";
str2 = 2;
data = str2 > str1;
console.log(data);

str1 = "3";
str2 = 3;
data = str2 == str1;
console.log(data);

data = str2 === str1;
console.log(data);


console.log("\n-----------------\n");
// concept of logical operators -----------------
console.log(" logical operators ");

console.log("2 > 3 && 2 > 1 =",2 > 3 && 2 > 1);
console.log("2 > 3 || 2 > 1 =",2 > 3 || 2 > 1);
console.log("!(2 > 1) =",!(2 > 1));
