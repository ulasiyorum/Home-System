//                 <i class="fa-solid scale2 mx-auto my-4 fa-lock color-dark"></i>
//<i class="fa-solid scale2 fa-lock-open mx-auto my-4 color-dark"></i>

const garageLocker = document.getElementById("lockParentGarage");
const houseLocker = document.getElementById("lockParentHouse");

var locks = localStorage.getItem("locks");

if(locks)
locks = JSON.parse(locks);
else
locks = [false,false];

if(locks[0])
houseLocker.innerHTML += '<i class="fa-solid scale2 mx-auto my-4 fa-lock color-dark"></i>';
else
houseLocker.innerHTML += '<i class="fa-solid scale2 fa-lock-open mx-auto my-4 color-dark"></i>';

if(locks[1])
garageLocker.innerHTML += '<i class="fa-solid scale2 mx-auto my-4 fa-lock color-dark"></i>';
else
garageLocker.innerHTML += '<i class="fa-solid scale2 fa-lock-open mx-auto my-4 color-dark"></i>';
