// DIGITAL CLOCK JS

let hours = document.getElementById('hour');
let minutes = document.getElementById('minute');
let seconds = document.getElementById('second');

//Function
setInterval(()=>{
    //Date Object
   let currentTime = new Date();

   hours.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
   minutes.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
   seconds.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();

}, 1000);



