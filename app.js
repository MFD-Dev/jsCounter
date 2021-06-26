/*
-- create a counter button to hold the count
-- create a plus counter button
-- create a minus counter button
-- create variables for all 3 buttons

-- reference buttons & addEvent Listeners + functions
-- console log to verify functionality
-- create a function to get plus button element
-- create a function to get minus button element
-- create a variable count set to 0; will rep counterBttn in JS
    then take that number and assign it, so it's 
    constantly being updated.
-- then add count increment to event listeners    
-- then modify the h1 element w/innerHtml to match count variable
*/

let plusButton = document.getElementById("counterPlus");
let minusButton = document.getElementById("counterMinus");
let counter = document.getElementById("counterButton");
let count = 0;


plusButton.addEventListener('click', () => {
    count ++;
    // counter.innerHTML = value;
    console.log('plus')
    
})

minusButton.addEventListener('click', ()=> {
    count --;
    console.log('minus');
})

// function counter() {
//     counter.innerHTML = value;
// }

