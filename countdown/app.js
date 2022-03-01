const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const deadline = document.querySelector('.deadline');
const giveaway = document.querySelector('.giveaway');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth= tempDate.getMonth();
let tempDay = tempDate.getDate();



// let futureDate = new Date(2022, 11, 1,10,30,0);
const futureDate = new Date(tempYear, tempMonth, tempDay+11, 11, 30, 0)
const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate()
let month = futureDate.getMonth()
month = months[month];

const weekday = weekdays[futureDate.getDay()];
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hour}:${minutes} am `;


// future time in milliseconds
const futureTime = futureDate.getTime();
 function getRemainingTime(){
   const today = new Date().getTime()
   const t = (futureTime - today );
   //1s 1000ms
   //1m = 60s
   //1hr = 60min
   //1d = 24hr

   //values  in ms
   const oneDay = (24*60*60*1000);
      const oneHour = (60*60*1000);
         const oneMin = (60*1000);

         //calculating values
         let days = t/oneDay
      days = Math.floor(days);
      let hours = Math.floor((t % oneDay) / oneHour )  //getting the remainder hrs after getting the actuall hours

      let minutes = Math.floor((t % oneHour)/ oneMin);
      let seconds = Math.floor((t % oneMin)/ 1000);


      //set values array
      const values = [days,hours, minutes ,seconds];
      function format(item){
        if(item < 10 ){
          return item = `0${item}`
        }
        return item;
      }
      items.forEach((item, i) => {
        item.innerHTML = format(values[i])
      });

      //clearing our interval when time elapse
      if(t < 0){
        clearInterval(Countdown);
        deadline.innerHTML = `<h4 class ="expired"> offer no longer available</h4>`
      }
 }

// Countdown
let Countdown = setInterval(getRemainingTime,1000);

getRemainingTime();
