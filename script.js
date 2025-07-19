//////Chapter-07


/////Question-01

// let user_name = prompt("Write your city name.");    

// if(user_name === "karachi"){
//     console.log("Welcome to city of lights")
// }else(
//     console.log("Welcome to " + user_name)
// );



/////Question-02

// let user_gender = prompt("What is your gender");

// if (user_gender === "male"){
//     console.log("Good Morning Sir")
// }if(user_gender === "female"){
//     console.log("Good Morning Ma'am")
// }


//////Question-03

// let traffic_signal = prompt("Enter the traffic signal color [Red, Green or Blue]")


// signal_color = traffic_signal.toLowerCase();


// if(signal_color === "red"){
//     alert("Must Stop")
// }else if (signal_color === "yellow"){
//     alert("Ready To Move")
// }else if (signal_color === "green"){
//     alert("Move Now")
// }



/////Question-04


// let remaining_fuel = prompt("Please Enter remaining fuel of your car (in litres)");


// if (remaining_fuel < 0.25){
//     console.log("Please refill the fuel in your car")
// } else(
//     console.log("Fuel percentage is Ok")
// )


/////Question-05


// var a = 4;                                               //// Alert 
// if (++a === 5){     
// alert("given condition for variable a is true");
// }


// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// if("car" < "cat"){
// alert("car is smaller than cat");
// }




/////Question-06 



// document.write("<h1> Marksheet <h1>  <br><br>")

// let subject_1 = prompt("Enter your first subject marks (under 100)");
// let subject_2 = prompt("Enter your second subject marks (under 100)");
// let subject_3 = prompt("Enter your third subject marks (under 100)")


// let subject_01 = +subject_1;
// let subject_02 = +subject_2;
// let subject_03 = +subject_3


// let total_marks = 300
// let marks_obtained = subject_01 + subject_02 + subject_03;
// let percentage = (marks_obtained / total_marks) * 100

// document.write(`Total Marks : ${total_marks}` + "<br>")
// document.write(`Marks Obtained: ${marks_obtained}` + "<br>")
// document.write(`Percentage: ${percentage}` + "%")



// if(percentage >= 80){
//     document.write("<h1>Grade : A-one <br> Remarks : Excellent </h1>")
// }else if (percentage >= 70){
//     document.write("<h1>Grade : A <br> Remarks : Good </h1>")
// }else if (percentage >= 60){
//     document.write("<h1>Grade : B <br> Remarks : You need to improve </h1>")
// }else if (percentage < 60){
//     document.write("<h1>Grade : Fail <br> Remarks : Sorry </h1>")
    
// }


/////Question-07

// let secret_num = 5;
// let user_input = +prompt("Guess the secret number (between 1 and 10)");


// if(user_input === secret_num){
//     alert("Bingo! Correct Answer");
// }else if ((user_input + 1 && user_input - 1) === secret_num){
//     alert("Close enough to the correct answer");
// }else{
//     alert("Wrong Guess. Try again!")
// }


////Question-08

// let user_given_num = prompt("Enter the number whose divisible by 3")


// if(user_given_num % 3 === 0){
//     alert("Given Number is divisible by 3")
// }else(
//     alert("Given Number isn't divisible by 3")
// )


////Question-09

// let user_input = prompt("Enter any number to check (even or odd)")

// if(user_input % 2 === 0){
//     alert("Your given number is Even")
// }else{
//     alert("Your given number is odd")
// }


////Question-10

// let user_temp = prompt("Enter your city temperature (under 0-40)")

// if(user_temp >= 40){
//     alert("It is too hot outside.")
// }else if (user_temp >= 30 ){
//     alert("The Weather today is Normal")
// }else if (user_temp >= 20){
//     alert("Today's Weather is cool")
// }else if (user_temp >= 10){
//     alert("OMG! Today's weather is so Cool")
// }



/////Question-11


// let num_1 = prompt("Enter your First number");
// let num_2 = prompt("Enter your second number");
// let operations = prompt("please select any one operator (+, -, *, /, %)")

// let num_01 = +num_1;
// let num_02 = +num_2

// if(num_1 === "" || num_2 === ""){
//     alert("Please enter valid numbers or operator")
// }

// if(operations === "+"){
//     let addition = num_01 + num_02;
//     alert(addition);
// }else if(operations === "-"){
//     let subtraction = num_1 - num_2;
//     alert(subtraction)
// }else if(operations === "*"){
//     let mulitiplication = num_1 * num_2;
//     alert(mulitiplication)
// }else if(operations === "/"){
//     let Division = num_1 / num_2;  
//     alert(Division)
// }else if(operations === "%"){
//     let modulus = num_1 % num_2
//      alert(modulus)
// }

