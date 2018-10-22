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
    clearAll();
    makeGrid();
 } )

 
 // So far code does what expected
// The Height value is captured
// Now do the same for width
// Also consider a maximum as well
 

function makeGrid() {
// Your code goes here!
    for (let i =0; i<inputOfHeight.value; i++) {
        var canvasTable = document.body.querySelector('#pixelCanvas');
        var canvasRow = document.createElement('tr');
        canvasTable.appendChild(canvasRow);
        for (let j = 0; j<inputOfWidth.value; j++) {
            var canvasColom = document.createElement('td');
            canvasRow.appendChild(canvasColom);
        }
    }
    var tableElements = document.body.querySelectorAll('td')
    for (let i = 0; i< tableElements.length; i++) { 
        var singleElement = document.body.querySelectorAll('td')[i];
        singleElement.addEventListener('click', function (e) {
                e.target.style.background = document.body.querySelector('#colorPicker').value;
        }, true)
    }
       

    


};

/*canvasColom.addEventListener('click', function () {
    canvasColom.style.background = document.body.querySelector('#colorPicker').value;
}, true)
*/

function clearAll() {
    var rowsList = document.body.querySelectorAll('tr');
    for (let i = 0; i<rowsList.length; i++)  {
        rowsList[i].remove();
    }
    

}
// crt + /
