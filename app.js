/*
-- html
-- create a counter button to hold the count
-- create a plus counter button
-- create a minus counter button
-- js
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


let decreaseBtn = document.getElementById("button__decrease");
let increaseBtn = document.getElementById("button__increase");
let counter = document.getElementById("counter");
let count = 0;

// addEventListeners for these buttons.  When user 'clicks' on it.
decreaseBtn.addEventListener('click', ()=> { // create a arrow func
    count --;
    counter.innerHTML = count; // send the count to the html
    numberStyle(); // call the number color function
})

increaseBtn.addEventListener('click', ()=> {
    count ++;
    counter.innerHTML = count;
    numberStyle();
})
// create a function that depending on the condition will change the 
// color of the number.  poistive or negative.  Else it's black. aka 0.
function numberStyle() { 
    if (count < 0) {
        counter.classList.add("negative");
    } else if (count > 0){
        counter.classList.add("positive")
    } else {
        counter.classList.remove("negative");
        counter.classList.remove("positive");
    }
}




