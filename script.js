// JavaScript code to display the current day of the week
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDate = new Date();
const currentDayIndex = currentDate.getDay();
const currentDayOfWeek = daysOfWeek[currentDayIndex];

// Update the HTML element with the current day of the week
const currentDayElement = document.getElementById('currentDayOfTheWeek');
currentDayElement.textContent = currentDayOfWeek;

//Update the HTML element with the current UTC time
const currentUTCTimeInMilliseconds = new Date().getTime();
console.log(currentUTCTimeInMilliseconds);
