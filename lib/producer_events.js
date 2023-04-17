var events = localStorage.getItem("events");


const clear = document.getElementById("clear-event");
const days = document.querySelectorAll(".calcel");
const addEventButton = document.getElementById("add-event");

addEventButton.addEventListener("click",() => {

    window.location.href = "../lib/Forms/producer_add_event.html";

});

if(events)
events = JSON.parse(events);
else
events = [];
console.log(events);
events.forEach((value) => {
    days[value.day-1].textContent += " - " + value.title.toUpperCase();
});


clear.addEventListener("click", () => {
    localStorage.setItem("events","");
    days.forEach((value,index) => {
        value.textContent = index + 1;
    });
});