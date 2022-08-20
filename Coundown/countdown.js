const daysel = document.getElementById('days');
const hoursel = document.getElementById('hours');
const minutesel = document.getElementById('mins');
const secondsel = document.getElementById('sec');



const newYears = "1 Jan 2023";

function countdown(){
    const newYearsDate = new Date(newYears); 
    const currentDate = new Date(); 
    const seconds = (newYearsDate - currentDate) / 1000; 
    const days = Math.floor(seconds / 3600 / 24); 
    const hours = Math.floor(seconds / 3600) % 24; 
    const minutes = Math.floor(seconds / 60) % 60; 
    const sec = Math.floor(seconds) % 60; 
    console.log(days, hours, minutes, sec); 

    daysel.innerHTML = days; 
    hoursel.innerHTML = hours; 
    minutesel.innerHTML = minutes; 
    secondsel.innerHTML = sec; 
}

//calls countdown every 1000 miliseconds

countdown(); 
setInterval(countdown,1000); 
