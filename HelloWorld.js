console.log("Hello world")

// same file for practicing the variables -----------------

num = 2+2
console.log(num)
console.log(num+3)

// the concept of let -----------------

let userName = "Ratnesh"
console.log(userName) 

// constants concept -----------------

let radius = 5
const pi = 3.14
let area

radius=6 
// pi=5 this can not happen as its defind as constant
area = pi*radius*radius

console.log(area)

// concept of data types

let data = 3               //number
let user = "Ratnesh"       //string

let num1= 23456789045675
console.log(num1)

//typeof function in java script

console.log(typeof num1)
console.log(typeof user)

// hexa decimal number system im js 

let num2 = 0xff
console.log(num2)

console.log(typeof num2)
console.log(num2*5)

// floating decimal number type in javascript

let num3 = 1.23456789e34
console.log(typeof num3)
console.log(num3)

//special way of writing zeros

let num4 = 10_00_00_00_000
console.log(num4)

//infinty in js

let a = 5/0
let b = -5/0

console.log(a)
console.log(b)

let c = Number.MAX_VALUE

console.log(" c =" ,c)

c = c*10

console.log("10 * c =" ,c)

let d = Number.MIN_VALUE

console.log(" d =" ,d)

d = d/10

console.log("d / 10 =" ,d)

// data type Big int in js

let x = 5678998765345678n

console.log("x = ",x)

console.log("x * 5n = ", x*5n)

console.log(typeof x )

// concept of type conversion 

let one_more = 123

console.log(one_more , typeof one_more)
let written = String(one_more)

console.log(written , typeof written)
written = Number(written)

console.log(written , typeof written)
one_more = Boolean(one_more)

console.log(one_more ,typeof one_more)
console.log(!one_more ,typeof one_more)
console.log(!!one_more ,typeof one_more)


//concept of type of coversion

let test
console.log(test, typeof test)

test = 6
console.log(test, typeof test)

test = test + ""
console.log(test, typeof test)

test = test - 3
console.log(test, typeof test)

test = test + "abc"
console.log(test, typeof test)

test = test - 2
console.log(test, typeof test)