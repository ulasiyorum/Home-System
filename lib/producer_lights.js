var lights = {
  level:0,
  on:[false,false,false,false,false]
};
const dataString = localStorage.getItem('lights');
if(dataString)
  lights = JSON.parse(dataString);


const sliders = Array.from(document.querySelectorAll(".chcbLight"));
const radios = Array.from(document.querySelectorAll(".rdbLight"));

radios.forEach((r,i) => {

  if(lights.level == 0 && i == 0)
  r.checked = true;
  else if(lights.level == 1 && i == 1)
  r.checked = true;
  else if(lights.level == 2 && i == 2)
  r.checked = true;

  r.addEventListener('click', (event) => {
    setLevels(i)
  });
})

sliders.forEach((s,i) => {
  s.checked = lights.on[i];
  s.addEventListener('change', function() {
    setLights(i);
  });
});

const setLights = (index) => {
  lights.on[index] = !lights.on[index];
  localStorage.setItem('lights',JSON.stringify(lights));
};

const setLevels = (value) => {
  lights.level = value;
  localStorage.setItem('lights',JSON.stringify(lights));
};