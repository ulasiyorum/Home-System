var musics = localStorage.getItem("musics");
var index = localStorage.getItem("musicIndex");

if(!index)
index = 0;

const musicTitle = document.getElementById("mus-title");
const musicSinger = document.getElementById("mus-singer");

if(musics)
musics = JSON.parse(musics);
else
musics = [{title:"End of list",singer:"List might be empty"}];

musicTitle.textContent = musics[index].title;
musicSinger.textContent = musics[index].singer;