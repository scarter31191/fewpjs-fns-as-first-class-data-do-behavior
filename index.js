/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function displayMessage(msg) {
  document.getElementById('greeting').innerText = msg; // updates DOM with appropriate message
}

function greet(e) {
  const hour = parseInt(e, 10);
   if( hour < 12 ) return "Good Morning"
   if ( hour > 17 ) return "Good Evening"
   return "Good Afternoon"
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
