var values = localStorage.getItem("heats");
const elements = document.querySelectorAll(".hv");

if(!values)
    values = [0,0,0,0,0];
else
    values = JSON.parse(values);

elements.forEach((value,index) => {
    value.textContent = values[index] + "°";
});