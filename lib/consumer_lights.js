var lights = {
    level:0,
    on:[false,false,false,false,false]
  };
  const dataString = localStorage.getItem('lights');
  if(dataString)
    lights = JSON.parse(dataString);
  

const par = document.querySelectorAll(".lightparent");
  
const tex = document.getElementById("textlevellight");
  lights.on.forEach((value,index) => {
    if(value)
    par[index].innerHTML += '<h3 class="mx-auto text-success">ON</h3>'
    else
    par[index].innerHTML += '<h3 class="mx-auto text-danger">OFF</h3>'
  });

if(lights.level == 0)
tex.innerHTML += "LOW";
else if(lights.level == 1)
tex.innerHTML += "MEDIUM";
else
tex.innerHTML += "HIGH";