//concept of while loop in JavaScript

let i = 10;
console.log("1st loop starts");

while (i--) {
    console.log(i,"Hi...");
}

console.log("2nd loop starts");

while (i<9 ) {
    console.log(i,"Hiiii");
    i++;
}

console.log("3rd loop starts");

while (i<5) {
    console.log(i,"Hello");
    i++;
}

console.log("4th loop starts");

do {
    console.log(i,"Hey");
} while (i<5);

let x = 12334567890;

let y = 0;

console.log("x = ",x);

while(x>0) {
    
    let temp = x%10;

    y = y*10 + temp;

    console.log(temp);

    x = parseInt(x/10);

}

console.log("y = ",y);

while(y>0) {
    
    let temp = y%10;

    //y = y*10 + temp;

    console.log(temp);

    y = parseInt(y/10);

}