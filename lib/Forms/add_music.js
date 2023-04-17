const sendButton = document.getElementById("send-music");
sendButton.addEventListener("click", () => {
    const obj = {
        title:document.getElementById("m-title").value,
        singer:document.getElementById("m-singer").value,
    };
    var musics = localStorage.getItem("musics");
    if(!musics)
    musics = [];
    else
    musics = JSON.parse(musics);

    musics.push(obj);
    localStorage.setItem("musics",JSON.stringify(musics));
    window.location.href = "../../Pages/producer_music.html";
});