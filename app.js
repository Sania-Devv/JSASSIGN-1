// chap 1 and 2 both:
//practice 1.1
/* Open the browser console, type 4 + 10, and press Enter. What do you see as
the response*/
//QUESTION1
// ans is 14

/*Use the console.log() syntax, placing a value within the rounded brackets.
Try entering your name with quotes around it (this is to indicate the fact that
it's a text string—we'll get to this in the next chapter).*/
//QUESTION 2

// console.log(14,"SANIA")


  //Practice exercise 1.2
/*1.Open your code editor and create an HTML file.
2. Within your HTML file, set up the HTML tags, doctype, HTML, head, and
body, and then proceed and add the script tags.
3. Place some JavaScript code within the script tags. You can use console.
log("hello world!").*/
  //check in html....

  //Practice exercise 1.3

  /*Linking to a JS JavaScript file:

1. Create a separate file called app with the extension .js.
2. Within the .js file, add some JavaScript code.
3. Link to the separate .js file within the HTML file you created in Practice
exercise 1.2.
4. Open the HTML file within your browser and check to see whether the
JavaScript code ran properly.*/

//Practice exercise 1.4

/* 1.Add a new statement to your JavaScript code by setting a variable value.
Since we will cover this in the next chapter, you can use the following line:
let a = 10;*/
// let a = 10;

/*2.Add a comment at the end of the statement indicating that you set a value of
10.*/

//let a = 10;

/*3.Print the value using console.log(). Add a comment explaining what this
will do.*/
// console.log(a)

/* 4.At the end of your JavaScript code, use a multiple-line comment. In a real
production script, you might use this space to add a brief outline of the
purpose of the file.*/

//Chapter project
/* 1. In the JavaScript file, output your name into the console and add a multiple-
line comment to your code.*/
// console.log("Sania Maqsood Ahmed")

/* Multiple line comment:
   Multiline comments are used for large text descriptions of code
  Comments are ignored by the compiler */
  
  /* 2.Try commenting out the console message in your JavaScript file so that
nothing shows in the console.*/

// console.log("Hi!I'm learning JAVASCRIPT")
      // Self-check quiz

  // 1.What is the HTML syntax to add an external JavaScript file?
  //ANSWER 1:
  /*  In the head tag we use script tag and  connect the external js file i.e;
  <script type="text/javascript" src="app.js"></script>*/

// 2. Can you run JavaScript in a file with a JS extension in your browser?
//ANSWER 2:
// Yes, you can run JavaScript code that is stored in a file with a .js extension in your web browser. 

// 3. How do you write a multiple-line comment in JavaScript?
//ANSWER 3:
// In JavaScript, you can write multi-line comments using either /* and */

/* 4. What is the best way to remove a line of code from running that you might
want to keep as you debug?*/
//ANSWER 4:
/*  The best way to temporarily remove a line of code from running while you're debugging,
    without actually deleting it, is to comment it out.  */

                   //Chapter2:
    //Converting data types
// let strToBool = "";
// strToBool = Boolean(strToBool);
// console.log(strToBool, typeof strToBool);
// // let numToStr = 3;
// numToStr = String(numToStr);
// console.log(numToStr,typeof numToStr);
// let nr1 = 2;
// let nr2 = "2";
// console.log(nr1 + Number(nr2));
//Practice exercise 2.1
// What are the types of these variables listed below? Verify this with typeof and
// output the result to the console:
// let str1 = 'Laurence';
// let str2 = "Svekis";
// let val1 = undefined;
// let val2 = null;
// let myNum = 1000;
// console.log(typeof str1);
// console.log(typeof str2);
// console.log(typeof val1);
// console.log(typeof val2);
// console.log(typeof myNum);
//Practice exercise 2.2

// let myName = "Sania";
// let myAge = 20;
// let canCodeJavascript = "true";
// console.log(`My name is ${ myName},I'm ${myAge} years old,and I can code Javascript:${canCodeJavascript}`);
//Practice exercise 2.3
// Write some code to calculate the hypotenuse of a triangle using the Pythagorean
// theorem when given the values of the other two sides. The theorem specifies that the
// relation between the sides of a right-angled triangle is a2
// + b2 = c2.
// You can use prompt() to get the value for a and b. Write code to get the value from
// the user for a and b. Then square the values of both a and b before adding them
// together and finding the square root. Print your answer to the console.

// let a =parseFloat(prompt("Enter the value of side 'a':"));
// let b =parseFloat(prompt("Enter the value of side 'b':"));
// if(isNaN(a) || isNaN(b))
// {
//   console.log("Invalid input");
// }
// else{
// let hypotenuse = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
// console.log(`the hypotenuse of triangle with side 'a'=${a} and 'b'=${b} is:${hypotenuse}`);
// }

// Practice exercise 2.4
// Create variables for three numbers: a, b, and c. Update these variables with the
// following actions using the assignment operators:
// • Add b to a
// • Divide a by c
// • Replace the value of c with the modulus of c and b
// • Print all three numbers to the console

// let a = 10;
// let b = 5;
// let c = 3;

// a += b; 
// a /= c;
// c %= b; 

// Print all three numbers to the console
// console.log("a:", a);
// console.log("b:", b);
// console.log("c:", c);

// chap project:
// Miles-to-kilometers converter
// Create a variable that contains a value in miles, convert it to kilometers, and log the
// value in kilometers in the following format:
// The distance of 130 kms is equal to 209.2142 miles
// let distanceInMiles=130;
// let distanceInKilometers= distanceInMiles*1.60934;
// console.log(`The distance of ${distanceInKilometers.toFixed(4)} kms is equal to ${ distanceInMiles}miles`);

// BMI CALCULATOR:
// Set values for height in inches and weight in pounds, then convert the values to
// centimeters and kilos, outputting the results to the console:
// • 1 inch is equal to 2.54 cm
// • 2.2046 pounds is equal to 1 kilo
// Output the results. Then, calculate and log the BMI: this is equal to weight (in kilos)
// divided by squared height (in meters). Output the results to the console.
let heightInInches=68;
let weightInPounds=150;
// conversion factor
const inchesToCentimeters = 2.54;
const poundsToKilos = 0.45359237;
let heightInCentimeters = heightInInches * inchesToCentimeters;
let weightInKilos = weightInPounds * poundsToKilos;
// Calculate BMI 
// (weight in kilos divided by squared height in meters)
let heightInMeters = heightInCentimeters / 100; // Convert height from cm to meters
let bmi = weightInKilos / (heightInMeters * heightInMeters);
console.log(`Height:${heightInInches} inches is equal to ${heightInCentimeters.toFixed(2)}cm`);
console.log(`Weight:${weightInPounds} pounds is equal to ${weightInKilos.toFixed(2)} kg`);
console.log(`BMI:${bmi.toFixed(2)}`);

