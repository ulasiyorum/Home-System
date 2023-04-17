var mails = [];

const dataString = localStorage.getItem('mails');
if(dataString)
    mails = JSON.parse(dataString);

const root = document.getElementById("mailRoot");

const createMail = (title, description, date) => {
    const elementDiv = document.createElement("div");
    elementDiv.classList.add("flex", "flex-col", "m-auto");
    elementDiv.innerHTML = `
    <div class="w-128 flex flex-row rounded-sm h-6 bg-dark">
    <p class="my-auto mx-4 w-inherit absolute text-start">Title</p>
    <p class="my-auto mx-4 w-inherit absolute text-center">Description</p>
    <p class="my-auto mx-4 text-end w-inherit absolute">Date</p>
    </div>
    `;

const titleElement = elementDiv.querySelector(".text-start");
const descElement = elementDiv.querySelector(".text-center");
const dateElement = elementDiv.querySelector(".text-end");

titleElement.textContent = title;
descElement.textContent = description;
dateElement.textContent = date;

root.appendChild(elementDiv);
}



mails.forEach((value) => {

    createMail(value.title, value.description, value.date);

});
