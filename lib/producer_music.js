var musics = localStorage.getItem("musics");
var index = localStorage.getItem("musicIndex");

if(!index)
index = 0;

const musicTitle = document.getElementById("mus-title");
const musicSinger = document.getElementById("mus-singer");

const addMusicButton = document.getElementById("add-music");

const nextMusicButton = document.getElementById("next-music");
const prevMusicButton = document.getElementById("prev-music");
addMusicButton.addEventListener("click",() => {
    window.location.href = "../lib/Forms/producer_add_music.html";
});

nextMusicButton.addEventListener("click", () => {
    if(index + 1 == musics.length)
    index = 0;
    else
    index++;
    musicTitle.textContent = musics[index].title;
    musicSinger.textContent = musics[index].singer;
    localStorage.setItem("musicIndex",index);
});

prevMusicButton.addEventListener("click", () => {
    if(index == 0)
    index = musics.length - 1;
    else
    index--;
    musicTitle.textContent = musics[index].title;
    musicSinger.textContent = musics[index].singer;
    localStorage.setItem("musicIndex",index);
});

if(musics)
musics = JSON.parse(musics);
else
musics = [{title:"End of list",singer:"List might be empty"}];

musicTitle.textContent = musics[index].title;
musicSinger.textContent = musics[index].singer;