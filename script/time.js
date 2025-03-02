let today = new Date ();
let formatteDate = today.toDateString();
document.getElementById("currentDate").innerText = formatteDate;

let todayTime = new Date ();
let formatteTime = todayTime.toLocaleTimeString();
document.getElementById("current-time").innerText = formatteTime;


