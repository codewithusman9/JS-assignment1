

//1. Write a JavaScript program that accepts two numbers in two prompts and
//displays the larger one in the console.

let Num1 = +prompt("Enter the 1st number");
let Num2 = +prompt("Enter the 2nd number");
 
if (Num1 > Num2) {
    document.write("The larger number is " + Num1);
} else if (Num2 > Num1) {
    document.write("The larger number is " + Num2);
} else {
    document.write("Both numbers are equal");
}

// 2. Write a JavaScript conditional statement to find the sign of a number. Display
// an alert box with the specified sign.

let num = prompt("Enter a number");

if (num >= 0) {
    alert("The sign is +");
} else {
    alert("The sign is -");
}

// 3. Write a JavaScript program that accepts five numbers in five prompts and
// displays the larger one in the console
let num1 = +prompt("Enter the first number");
let num2 = +prompt("Enter the second number");
let num3 = +prompt("Enter the third number");
let num4 = +prompt("Enter the fourth number");
let num5 = +prompt("Enter the fifth number");

let largest_num = num1;

if (num2 > largest_num) {
  largest_num = num2;
}

if (num3 > largest_num) {
  largest_num = num3;
}

if (num4 > largest_num) {
  largest_num = num4;
}

if (num5 > largest_num) {
  largest_num = num5;
}

 document.write("The largest number is " + largest_num);


// 4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        document.write(i + " is even");
    } else {
        document.write(i + " is odd");
    }
}

// 5. Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grad
 let number = +prompt("Enter a Number:");

 if(number>=90){
    alert("Grade is: A+");
 }
 else if(number>=80){
    alert("Grade is: A");
 }
 else if(number>=70){
    alert("Grade is: B");
 }
 else if(number>=60){
    alert("Grade is: C");
 }
 else if(number>=50){
    alert("Grade is: D");
 }
 else{
    alert("F");
 }

// 6. Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz"

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        document.write("Fizz"+"<br>");
    } else if (i % 5 === 0) {
        document.write("Buzz" +"<br>");
    }
    else if (i % 3 === 0 && i % 5 === 0) {
        document.write("FizzBuzz"+"<br>");
    } else {
        document.write(i +"<br>");
    }
}

// 7. Write a JavaScript program to construct the following pattern, using a nested
// for loop

let Number = 5
for (let i = 1; i <= Number; i++) {


    for (let j = 1; j <= i; j++) {
        document.write("*");
    }
    document.write("<br>");
}








