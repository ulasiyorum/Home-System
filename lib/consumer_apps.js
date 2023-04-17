/*
                    <div class="flex flex-row bg-dark rounded-sm mx-4 my-4">
                        <h3 class="mx-5">Coffee</h3>
                        <h3 class="mx-5">No Milk</h3>
                        <h3 class="mx-5">Espresso</h3>
                        <h3 class="mx-5">Date</h3>
                    </div>           
*/


var items = localStorage.getItem("apps");

const coffeeParent = document.getElementById("coffeeParent");
const cleanParent = document.getElementById("cleanParent");

if(items)
items = JSON.parse(items);
else
items = {coffees:[],cleans:[]}
items.coffees.forEach((val) => {
    let html = 
    `<div class="flex flex-row bg-dark rounded-sm mx-4 my-4">
    <h3 class="mx-5">${val.attributes[0]}</h3>
    <h3 class="mx-5">${val.attributes[1]}</h3>
    <h3 class="mx-5">${val.attributes[2]}</h3>
    <h3 class="mx-5">${val.date}</h3></div>`

    coffeeParent.innerHTML += html;
});

items.cleans.forEach((val) => {
    let html = 
    `<div class="flex flex-row bg-dark rounded-sm mx-4 my-4">
    <h3 class="mx-5">${val.attributes[0]}</h3>
    <h3 class="mx-5">${val.attributes[1]}</h3>
    <h3 class="mx-5">${val.attributes[2]}</h3>
    <h3 class="mx-5">${val.date}</h3></div>`

    cleanParent.innerHTML += html;
});