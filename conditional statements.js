//if else statement

let a = 6
let b = 7
let c = 9

if ( a > b ) {
    console.log(a)
} else {
    console.log(b)
    console.log("yee....")
}

if (a>b && a>c) {
    console.log(a)
} else if (b>a && b>c) {
    console.log(b)
} else {
    console.log(c)
}

if(a%2 === 0) {
    console.log("number is even");
}

// ternary operators concept in js

a%2==0?console.log(a,"Even"):console.log(a,"odd");

b%2==0?console.log(b,"Even"):console.log(b,"odd");