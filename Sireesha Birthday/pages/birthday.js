const btn = document.getElementById("celebrateBtn");

btn.addEventListener("click", () => {

for(let i=0;i<120;i++){

const confetti=document.createElement("div");

confetti.className="confetti";

const emojis=["🎉","🎊","🎂","💙","✨","🎈","🥳","🎁","❤️"];

confetti.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

confetti.style.left=Math.random()*100+"vw";

confetti.style.animationDuration=(Math.random()*3+2)+"s";

document.body.appendChild(confetti);

setTimeout(()=>{

confetti.remove();

},5000);

}

});