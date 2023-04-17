const garageLocker = document.getElementById("garagelock");
const houseLocker = document.getElementById("houselock");

var locks = localStorage.getItem("locks");

if(locks)
locks = JSON.parse(locks);
else
locks = [false,false];

garageLocker.checked = locks[1];
houseLocker.checked = locks[0];

garageLocker.addEventListener("change" , (e) => {
    locks[1] = e.target.checked;
    localStorage.setItem("locks",JSON.stringify(locks));
});

houseLocker.addEventListener("change", (e) => {
    locks[0] = e.target.checked;
    localStorage.setItem("locks",JSON.stringify(locks));
});