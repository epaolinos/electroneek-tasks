/**
 * Task 1. Starting function that receives the input string,
 * makes it an integer array, receives the information about
 * ascending/descending sort from checkbox, then sends it all
 * to the sort and prints input and output arrays.
 */
function sortInputHandle() {
    let inputStr = document.forms["input-array"]["array"].value;
    let inputArray = inputStr.split(',').map(x=>parseInt(x));
    let ascending = !(document.forms["input-array"]["descending"].checked);
    let sortedArray = mergeSort(inputArray, ascending);
    document.getElementById("sort-result").innerHTML = "Input array: " + inputArray +
        "<br><br>Sorted array: " + sortedArray;
    document.getElementById("sort-result").style.display = "block";
}

/**
 * Sorting function that receives array and ascending/descending information (as boolean).
 * Merge sort is used.
 */
function mergeSort(inputArray, ascending) {
    let leftPart = [];
    let rightPart = [];
    let outputArray = [];
    if (inputArray.length <= 1) {
        return inputArray;
    } else {
        let middle = Math.floor(inputArray.length / 2);
        for (let i = 0; i < middle; i++) {
            leftPart.push(inputArray[i]);
        }
        for (let j = middle; j < inputArray.length; j++) {
            rightPart.push(inputArray[j]);
        }
        leftPart = mergeSort(leftPart, true);
        rightPart = mergeSort(rightPart, true);
        outputArray = merge(leftPart, rightPart);
        return (ascending) ? outputArray : outputArray.reverse();
    }
}

/**
 * Merge function for the merge sort.
 */
function merge(leftPart, rightPart) {
    let resultArray = [];
    while (leftPart.length > 0 && rightPart.length > 0) {
        if (leftPart[0] <= rightPart[0]) {
            resultArray.push(leftPart[0]);
            leftPart.shift();
        } else {
            resultArray.push(rightPart[0]);
            rightPart.shift();
        }
    }
    while (leftPart.length > 0) {
        resultArray.push(leftPart[0]);
        leftPart.shift();
    }
    while (rightPart.length > 0) {
        resultArray.push(rightPart[0]);
        rightPart.shift();
    }
    return resultArray;
}

/**
 * Task 2. The Russian Federation flag print.
 */
function flag() {
    let width = 60;
    let height = 80;
    for (let i = 0; i < width; i++) {
        let letterColor = (i < width / 3) ? 'white' : (i < (2 * width / 3)) ? 'blue' : 'red';
        for (let j = 0; j < height; j++) {
            document.write("<span style='color: " + letterColor + "'>O</span>");
        }
        document.write("\n");
    }
}

/**
 * Tasks 3–5. New phone fields adding and the Person class.
 */
let phoneN = 1;

function plusPhone() {
    if (document.getElementById("phone").innerHTML.includes("Phone:")) {
        document.getElementById("phone").innerHTML = "Phone " + phoneN +
            ": <input type=\"tel\" style=\"width: 150px\" name=\"phone" + phoneN + "\">";
    }
    phoneN++;
    document.getElementById("phone").innerHTML += "Phone " + phoneN +
        ": <input type=\"tel\" style=\"width: 150px\" name=\"phone" + phoneN + "\">";
}

class Person {

    constructor() {
        this.name = "Иванов Иван Иванович";
        this.phone = "+79999999999";
        this.comment = "No comment";
    }

    send() {
        document.forms["contact-form"]["full-name"].value = this.name;
        document.forms["contact-form"]["phone1"].value = this.phone;
        document.forms["contact-form"]["comment"].value = this.comment;
        document.getElementById("submit-form").click();
    }
}