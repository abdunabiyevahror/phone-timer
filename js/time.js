let clock = document.getElementById("clock");
function updateClock() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1; 
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
  let dateTime = `${year}-${month}-${day} <br> <hr> ${hour}:${minute}:${second}`;
  clock.innerHTML = dateTime;
}
setInterval(updateClock, 1000);  
