var items = localStorage.getItem("apps");
const makeCoffeeButton = document.getElementById("coffee-make");
const makeCleanButton = document.getElementById("clean-make");

const coffeeSelections = document.querySelectorAll(".cofsel");
const cleanSelections = document.querySelectorAll(".clesel");

const coffeeText = document.querySelectorAll(".cofcont");
const cleanText = document.querySelectorAll(".clecont");

if(items)
items = JSON.parse(items);
else
items = {coffees:[],cleans:[]}



const sendCoffee = () => {
    var l = 0;
    coffeeSelections.forEach((value) => {
        if(value.checked)
        l++;
    });

    if(l < 3) {
    
        alert("Please select all options");
        return;
    }

    const attr = [];

    coffeeSelections.forEach((value,index) => {
        if(value.checked)
            attr.push(coffeeText[index].textContent);
    });

    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); 
    const formattedDate = `${day}/${month}`;

    items.coffees.push(
        {
            attributes:attr,
            date:formattedDate
        }
    );
    alert("Coffee queued");
    localStorage.setItem("apps",JSON.stringify(items));
}

const sendClean = () => {
    var l = 0;
    cleanSelections.forEach((value) => {
        if(value.checked)
        l++;
    });
    if(l < 3) {
        alert("Please select all options");
        return;
    }
    const attr = [];

    cleanSelections.forEach((value,index) => {
        if(value.checked)
            attr.push(cleanText[index].textContent);
    });

    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); 
    const formattedDate = `${day}/${month}`;

    items.cleans.push(
        {
            attributes:attr,
            date:formattedDate
        }
    );
    alert("Clean queued");
    localStorage.setItem("apps",JSON.stringify(items));
}

makeCoffeeButton.addEventListener("click",sendCoffee);
makeCleanButton.addEventListener("click",sendClean);