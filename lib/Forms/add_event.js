const sendButton = document.getElementById("send-event");

const input = document.getElementById("add-event-day");
input.value = 1;
input.addEventListener("change",(e) => {
    if (e.target.value < 1 || e.target.value > 30) {
        e.target.value = 1;
      }
});

sendButton.addEventListener("click", () => {
    const obj = {
        title:document.getElementById("add-event-title").value,
        day:input.value
    };
    var events = localStorage.getItem("events");
    if(!events)
    events = [];
    else
    events = JSON.parse(events);

    events.push(obj);
    localStorage.setItem("events",JSON.stringify(events));
    window.location.href = "../../Pages/producer_calendar.html";
});