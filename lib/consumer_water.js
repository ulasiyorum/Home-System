var values = localStorage.getItem("waterValues");
const elements = document.querySelectorAll(".waterNumber")

const xyValues = [
    {x:generateRandom(), y:generateRandom()},
    {x:generateRandom(), y:generateRandom()},
    {x:generateRandom(), y:generateRandom()},
    {x:generateRandom(), y:generateRandom()},
    {x:generateRandom(), y:generateRandom()},
    {x:generateRandom(), y:generateRandom()},
    {x:generateRandom(), y:generateRandom()},
    {x:generateRandom(), y:generateRandom()},
    {x:generateRandom(), y:generateRandom()},
    {x:generateRandom(), y:generateRandom()},
    {x:generateRandom(), y:generateRandom()}
  ];
  const xyValues2 = [
    {x:generateRandom(), y:generateRandom()},
    {x:generateRandom(), y:generateRandom()},
    {x:generateRandom(), y:generateRandom()},
    {x:generateRandom(), y:generateRandom()},
    {x:generateRandom(), y:generateRandom()},
    {x:generateRandom(), y:generateRandom()},
    {x:generateRandom(), y:generateRandom()},
    {x:generateRandom(), y:generateRandom()},
    {x:generateRandom(), y:generateRandom()},
    {x:generateRandom(), y:generateRandom()},
    {x:generateRandom(), y:generateRandom()}
  ];
  
  new Chart("myChart", {
    type: "line",
    data: {
      datasets: [{
        label:"Bathroom",
        borderColor: "gray",
        fill: false,
        data: xyValues
      },
      {
        label:"Pool",
        borderColor: "blue",
        fill: false,
        data: xyValues2
      }
    
    ]
    },

    options:{}
  });

  const xyValues3 = [
    {x:generateRandomL(), y:generateRandomL()},
    {x:generateRandomL(), y:generateRandomL()},
    {x:generateRandomL(), y:generateRandomL()},
    {x:generateRandomL(), y:generateRandomL()},
    {x:generateRandomL(), y:generateRandomL()},
    {x:generateRandomL(), y:generateRandomL()},
    {x:generateRandomL(), y:generateRandomL()},
    {x:generateRandomL(), y:generateRandomL()},
    {x:generateRandomL(), y:generateRandomL()},
    {x:generateRandomL(), y:generateRandomL()},
    {x:generateRandomL(), y:generateRandomL()}
  ];
  const xyValues4 = [
    {x:generateRandomL(), y:generateRandomL()},
    {x:generateRandomL(), y:generateRandomL()},
    {x:generateRandomL(), y:generateRandomL()},
    {x:generateRandomL(), y:generateRandomL()},
    {x:generateRandomL(), y:generateRandomL()},
    {x:generateRandomL(), y:generateRandomL()},
    {x:generateRandomL(), y:generateRandomL()},
    {x:generateRandomL(), y:generateRandomL()},
    {x:generateRandomL(), y:generateRandomL()},
    {x:generateRandomL(), y:generateRandomL()},
    {x:generateRandomL(), y:generateRandomL()}
  ];
  
  new Chart("myChart2", {
    type: "line",
    data: {
      datasets: [{
        label:"Bathroom",
        borderColor: "gray",
        fill: false,
        data: xyValues3
      },
      {
        label:"Pool",
        borderColor: "blue",
        fill: false,
        data: xyValues4
      }
    
    ]
    },

    options:{}
  });

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

function generateRandom() {
    return Math.random() * 30 - 5;
}

function generateRandomL() {
    return Math.random() * 10000 + 5000;
}