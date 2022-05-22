const colors = ["red","green","rgba(133,122,200)","#f15025"];


const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    const randomNumber = random();
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function random() {
    return Math.floor(Math.random() * colors.length);
}