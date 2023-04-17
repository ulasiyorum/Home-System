var events = localStorage.getItem("events");
const days = document.querySelectorAll(".calcel");


if(events)
events = JSON.parse(events);
else
events = [];
console.log(events);
events.forEach((value) => {
    days[value.day-1].textContent += " - " + value.title.toUpperCase();
});