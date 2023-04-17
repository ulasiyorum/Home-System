var values = localStorage.getItem("waterValues");
const increments = document.querySelectorAll(".waterButtonIncrement");
const decrements = document.querySelectorAll(".waterButtonDecrements");
const elements = document.querySelectorAll(".waterNumber")

increments.forEach((value,index) => {
    value.addEventListener("click", () => increment(index));
});
decrements.forEach((value,index) => {
    value.addEventListener("click", () => decrement(index));
});

if(!values)
values = [0,0,0,0]
else
values = JSON.parse(values);

elements.forEach((value,index) => {
    var str = values[index];   
    if(index > 1)
    str += "L";

    elements[index].textContent = str;
});



const increment = (index) => {
    values[index]++;
    localStorage.setItem("waterValues",JSON.stringify(values));
    if(index > 1) {
        elements[index].textContent = values[index] + "L";
    }
    else {
        elements[index].textContent = values[index];
    }
}

const decrement = (index) => {
    if(index > 1 && values[index] == 0)
    return;

    values[index]--;
    localStorage.setItem("waterValues",JSON.stringify(values));
    if(index > 1) {
        elements[index].textContent = values[index] + "L";
    }
    else {
        elements[index].textContent = values[index];
    }
}