const title = document.querySelector("h1");
const img = document.querySelector("img");
const callBtn = document.querySelector(".call");
const connectBtn = document.querySelector(".connect");
const talkBtn = document.querySelector(".talk");
const tone=document.querySelector(".tone");
const tone2=document.querySelector(".tone2");

title.style.textAlign="center";
title.style.color="red";

img.onmouseover= ()=>{
    img.src="./img/aslan1.jpeg";
    tone.pause();
    tone2.pause();
}

img.onmouseleave= ()=>{
    img.src="./img/aslan2.jpeg";
    tone.pause();
    tone2.play();
}

talkBtn.onmouseover = () => {
    img.src="./img/telfirlat.gif"
    tone.pause();
    tone2.pause();
}

talkBtn.onclick = () => {
    img.src="./img/telefon.gif"
    tone.pause();
    tone2.pause();
}

connectBtn.onclick = () => {
    img.src="./img/connect.gif"
    tone.pause();
    tone2.pause();
}

callBtn.onclick = () => {
    img.src="./img/img.gif"
    tone.play();
    tone2.pause();
}

