var values = localStorage.getItem("heats");

const increments = document.querySelectorAll(".hinc");
const decrements = document.querySelectorAll(".hdec");
const elements = document.querySelectorAll(".hv");

if(!values)
    values = [0,0,0,0,0];
else
    values = JSON.parse(values);

elements.forEach((value,index) => {
    value.textContent = values[index] + "°";
});

increments.forEach((value,index) => {
    value.addEventListener("click" , () => {
        values[index]++;
        elements[index].textContent = values[index] + "°";
        localStorage.setItem("heats",JSON.stringify(values));
    });
})

decrements.forEach((value,index) => {
    value.addEventListener("click" , () => {
        values[index]--;
        elements[index].textContent = values[index] + "°";
        localStorage.setItem("heats",JSON.stringify(values));
    });
})