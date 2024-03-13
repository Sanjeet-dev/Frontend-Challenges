let count = 60;
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");
const start = document.querySelector("#startButton");
const clear = document.querySelector("#clearButton");
const tickSound = new Audio("tick.mp3");
let timer = "";


function counter(){
  min.textContent = "00";
        if(count>0){
            count--;
            console.log(count);
            sec.textContent=count;
        }
        
        if (!count) {
          clearInterval(timer);
          sec.textContent="00";
          console.log("Time's up!");
        }
}

start.addEventListener("click",()=>{
  clearInterval(timer);
  count=60;
  min.textContent = "01";
  tickSound.play();
  timer = setInterval(counter, 1000);
});

clear.addEventListener("click", function(){
    clearInterval(timer);
    count=60;
    tickSound.pause();
    tickSound.currentTime=0;
    counter();
    min.textContent="00";
    sec.textContent = "00";
})