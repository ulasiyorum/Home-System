var mails = [];
const sendButton = document.getElementById("send-mail");
sendButton.addEventListener("click", () => {
    window.location.href = "../lib/Forms/producer_add_mail.html";
});

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
    <button class="dltbtnMail w-8 absolute h-4 mr-auto ml-4 my-4 bg-danger">
        <i class="fa-solid fa-trash"></i>
    </button>
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

const deleteButtons = document.querySelectorAll(".dltbtnMail");

if(deleteButtons)
    deleteButtons.forEach((val,ind) => {
        val.addEventListener("click", () => {
            mails.splice(ind, 1);
            localStorage.setItem("mails",JSON.stringify(mails));
            window.location.href = "../Pages/producer_mails.html";
        });
    });
