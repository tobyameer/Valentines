let noBtn = document.querySelector(".noButton");
let yesBtn = document.querySelector(".yesButton");
let yesDiv = document.querySelector(".yes");
let pleaseBear = document.querySelector(".pleaseBear");
let container = document.querySelector(".valentinesContainer");
const phrase = [
    "Why Not?",
    "Are You Sure?",
    "Pleaseee",
    "Your Going To Make Me Sad 😞",
    "Im Going To Cry 😖",
    "You Broke My HeartHeart💔"
]
var yesTimes = 10;
let clicks = 1;
noBtn.addEventListener('click',  function(){
    clicks++;
})
function saysNo(){
    yesTimes += 10;
    yesBtn.style.height = (yesTimes * 3) + "px";
    yesBtn.style.width = (yesTimes * 6) + "px";
    yesBtn.style.fontSize = (yesTimes) + "px";

    noBtn.innerHTML = phrase[clicks];
    if(clicks > 5){
        saysYes();
    }
    
}

function saysYes(){
    yesDiv.style.display = "flex"
    container.style.display = "none"
}