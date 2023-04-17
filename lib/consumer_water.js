var values = localStorage.getItem("waterValues");
const elements = document.querySelectorAll(".waterNumber")


if(!values)
values = [0,0,0,0]
else
values = JSON.parse(values);

elements.forEach((value,index) => {
    var str = values[index];   
    if(index > 1)
    str += "L";
    else
    str += "°";
    elements[index].textContent = str;
});
