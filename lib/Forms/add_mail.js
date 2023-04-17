const sendButton = document.getElementById("send-mail-1");
sendButton.addEventListener("click", () => {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); 
    const formattedDate = `${day}/${month}`;
    const obj = {
        title:document.getElementById("add-mail-title").value,
        description:document.getElementById("add-mail-desc").value,
        date:formattedDate
    };
    var mails = localStorage.getItem("mails");
    if(!mails)
    mails = [];
    else
    mails = JSON.parse(mails);

    mails.push(obj);
    localStorage.setItem("mails",JSON.stringify(mails));
    window.location.href = "../../Pages/producer_mails.html";
});