let random = Math.floor(Math.random() * 100);///create a variable.
let para1 = document.querySelector(".para1");////create a another variable for storing information.
let para2 = document.querySelector(".para2");////create a another variable for storing information.
let para3 = document.querySelector(".para3");////create a another variable for storing information.
let array = [];//create an array.
let numbers = 10;//create a another variable

function gamegenerator() {//create a function to call a user value.
    let data = document.querySelector(".input").value;//create a new variable
    ///give a conditional statements if and else to input multiple value from the users.
    if (data < 1 || data > 100) {
        alert("please enter a number between 1 to 100.")
    } else {
        array.push(data);
        numbers = numbers - 1;
        if (data > random) {
            para1.textContent = "please enter a smaller number";
            para2.textContent = "No.of guess remaining : " + numbers;
            para3.textContent = "guessing numbers : " + array;
            if (numbers == 0) {
                document.querySelector(".btn").disabled = true;
            }
        }
        else if (data < random) {
            para1.textContent = "please enter a larger number";
            para2.textContent = "No.of guess remaining : " + numbers;
            para3.textContent = "guessing numbers : " + array;
        } else if (data == random) {
            para1.textContent = "Excellent You have guess a correct number" + random;
            document.querySelector(".btn").disabled = true;////if users value become zero .
        }
    }


}
///ends js parts.