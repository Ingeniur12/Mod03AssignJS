/////////////////INVOKING_FUNCTIONS/////////////////
function invokedFunc() { //DECLARE AND NAME FUNCTION
    return invokedFunc = Math.floor(Math.random() * 200 );  // RETURN INVOKED FUNCTION/ GENERATE RANDOM NUMBER BETWEEN 0 AND 1/ SCALE NUMBER TO 200 BY MULTIPLYING RANDOM NUMBER BY 200/ROUND DOWN TO NEAREST WHOLE NUMBER
}
invokedFunc();  // INVOKE FUNCTION BY CALLING invokedFunc()/ RESULT IS RANDOM NUMBER < 200

///////////////////DEFINING_FUNCTIONS //////////////////
const subtractNumbers = function(a, b) { // DEFINE AND DECLARE FUNCTION TO SUBTRACT 2 NUMBERS IN PARAMETERS A AND B
  return a - b; // FUNCTION - THE VALUE OF B FROM A AND RETURNS THE RESULT.
};
let result = subtractNumbers(1098, 497);  //CREATE VARIABLE NAMED "result" AND ASSIGN THE RESULT FROM CALLING THE "subtractNumbers" FUNCTION WITH NUMBERS 1098 AND 497.
console.log(result); // OUTPUT: DISPLAY THE VALUE OF "result" IN THE CONSOLE WHICH IS 601

////////////////ANONYMOUS FUNCTIONS///////////////
var example = function () { // DECLARE AND DEFINE AN ANONYMOUS FUNCTION.
    console.log("Anonymous Function Example");// CONSOLE LOG MESSAGE TO BE INVOKED BY ANONYMOUS FUNCTION CALL
};
example();// CALL THE ANONYMOUS FUNCTION BY INVOKING THE "example" VARIABLE WHICH WILL BE DISPLAYED AS "Anonymous Function Example"


////////////////ARROW FUNCTIONS/////////////////
const calculateLoss = (janSales, febSales) => { //DEFINE AN ARROW FUNCTION NAMES "calculateLoss" WITH PARAMETERS 'janSales' AND 'febSales'
return janSales - febSales; 
};//CALCULATE DIFFERENCE BETWEEN THE PARAMETERS SET IN THE PREVIOUS LINE OF CODE
console.log("January sales vs. February sales:", calculateLoss(298, 234));//DISLAY 'calculateLoss' FUNCTION FOR THE DIFFERENCE BETWEEN 298 AND 234 WHICH IS 64

///////////////SCOPE FUNCTIONS////////////////////
var x = 1984;// GLOBAL VARIABLE 'x' WITH THE VALUE OF 1984 ACCCESIBLE THROUGHOUT THE SCRIPT
function scopeExample() {
var y = 210;// LOCAL VARIABLE 'y' WITH THE VALUE OF 210
console.log("Global x:", x);// ACCESSING GLOBAL AND GLOBAL VARIABLE OUTSIDE THE FUNCTION
console.log("Local y:", y);// ACCESSING LOCALVVARIABLE INSIDE THE FUNCTION
}
scopeExample();// OUTPUT IS "Global x:1984" and "LOCAL Y:210"

/////////////////RETURN VALUES//////////////////////
const addNumbers = function(a, b) { // WE DEINE A FUNCTION TO ADD TWO NUMBERS
  return a + b; // THE RETURN STATEMENT ADDS b AND a TOGETHER, GIVING US THE RESULT
};
let result = addNumbers(1999, 383); // USING THE FUNCTION WITH THE NUMBERS 1999 AND 383
console.log(result); // OUTPUT: DISPLAYS THE VALUE OF THE RESULT IN THE THE CONSOLE WHICH IS 2382

//////////////////DEFAULT VALUES///////////////////////
function greet(name = "T-1000") { // FUNCTION DEFINED WITH A DEFAULT VALUE OF "T-1000" (liquid dude from T-2)FOR THE PARAMETER 'name'
  console.log("Welcome to the year 1995 " + name + ", NOW GO FIND JOHN CONNOR!"); // OUTPUT A GREETING MESSAGE WITH THE PROVIDED NAME OR THE DEFAULT VALUE
}
greet(); // CALL THE GREET FUNCTION WITHOUT PROVIDING AN ARGUMENT (USES THE DEFAULT VALUE) - OUTPUT: "Welcome to the year 1995, T-1000!"
greet("T-800"); // CALL THE GREET FUNCTION WITH THE ARGUMENT "T-800" - OUTPUT: "Welcome to the year 1995, T-800!" (the good Terminator)

/////////////////////CALL STACK///////////////////////
function firstOrder(){  //DEFINE 1ST FUNCTION
  console.log("Order 1: Seared Duck Breast with Truffle Risotto");   // PRINT MESSAGE TO THE CONSOLE
  secondOrder(); // CALL THE secondOrder FUNCTION WITHIN 1ST FUNCTION
}

function secondOrder(){  //DEFINE 2ND FUNCTION

  console.log("Order 2: Lobster Bisque with Garlic Croutons");   // PRINT MESSAGE TO THE CONSOLE
  thirdOrder(); // CALL THE thirdOrder FUNCTION WITHIN2ND FUCNTION
}

function thirdOrder()  {//DEFINE 3RD FUNCTION, LAST FUNCTION IN STACK

  console.log("Order 3: Grilled Filet Mignon with Roasted Potatoes");   // PRINT MESSAGE TO THE CONSOLE
}

firstOrder();   // CALL THE firstOrder FUNCTION
secondOrder();   // CALL THE secondOrder FUNCTION
thirdOrder();   // CALL THE thirdOrder FUNCTION
// OUTPUT WILL BE:
Order 1: Seared Duck Breast with Truffle Risotto
Order 2: Lobster Bisque with Garlic Croutons
Order 3: Grilled Filet Mignon with Roasted Potatoes


------------------------------------------------------------------------------------------------------------------------------------------
/*//////////////PROBLEM SOLVING///////////////////////
The best way I can explain problem solving in my own words, from my limited understanding in computer science is that it can be compared to many real-world processes to solve everyday problems.
I can sort of take an analogy and comparing it to an onion. Why an onion? Because onions come in layers. That’s sort of what one of my previous professors said. In the military sometimes problems are split up into small chunks and divided amongst companies, platoons or squad. Down to individual soldiers who like ants carry out small tasks for a greater purpose. In programing, a problem can be solved by a collaborative team. They could sit down to discuss what the issue at hand is. Then they could all brainstorm the problem into small sections, taking the specific needs into consideration. The problem could be broken off into many other small problems and be given to different team members or groups. This is even better if there are a variation of skills amongst the team. They can all work individually to solve their tasks and meet in intervals to see what advances are made by other members. At some point they can all put their solutions together to then work on a sort of merger where its all put together. 
  
////////////////UNDERSTANDING ERRORS/////////////////////
I understand that in the context of JavaScript, errors help in pointing out where a mistake has been made within the code. These messages normally appear in the web console and are highlighted in red most of the time. The message is composed of what’s called an error object, which includes the name for the error, and a somewhat detailed message explaining what went wrong. Sometimes these errors come with a link that takes the user to the page where the error occurred. This helps the user pinpoint where the error is located. There are 7 error types, and these error types have specific detailed messages that are related to the error. This helps the user debugging their code quickly by using the provided error references.   */
