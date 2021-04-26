const hoursTag = document.getElementById('digital-clock__time--hours');
const minutesTag = document.getElementById('digital-clock__time--minutes');
const secondesTag = document.getElementById('digital-clock__time--seconds');

const displayHours = document.getElementById('digital-clock__time--hours');
const displayMinutes = document.getElementById('digital-clock__time--minutes');
const displaySeconds = document.getElementById('digital-clock__time--seconds');

function clock(){
    let date = new Date(); 
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    console.log(hours);
    console.log(minutes);
    console.log(date);
    console.log(seconds);
    displayHours.innerHTML=hours;
    displayMinutes.innerHTML=minutes;
    displaySeconds.innerHTML=seconds;
}
clock();

/* setInterval(clock,1000); */

console.log(Date.now());