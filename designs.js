// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// Getting height
const inputOfHeight = document.body.querySelector('#inputHeight');
inputOfHeight.addEventListener('keyup', function(event) {
    var pressed_key = Number(event.target.value);
    inputOfHeight.value = pressed_key;
} )
//getting Width
const inputOfWidth = document.body.querySelector('#inputWidth');
inputOfWidth.addEventListener('keyup', function(event) {
    var pressed_key2 = Number(event.target.value);
    inputOfWidth.value = pressed_key2;
} )
 
// Everyhting is stored now, even store it more if you want
// When submit is clicked, is displays these values

//This submit function will be called when the click event occurs
// nice
// 

const sumbitButton = document.body.querySelectorAll('input')[2];
 sumbitButton.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Height of '+ inputOfHeight.value + ' was pressed\n');
    console.log('Width  of '+ inputOfWidth.value + ' was pressed\n');
 } )
 // So far code does what expected
// The Height value is captured
// Now do the same for width
// Also consider a maximum as well
 

function makeGrid() {

// Your code goes here!

}
