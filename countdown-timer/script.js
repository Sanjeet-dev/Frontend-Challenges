let count = 60;
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");
const clear = document.querySelector("#clearButton");
let timer = "";
document.querySelector("button").addEventListener("click",()=>{
    min.textContent = "01";
   timer = setInterval(function() {
        min.textContent = "00";
        count--;
        console.log(count);
        sec.textContent=count;
        if (count === 0) {
          clearInterval(timer);
          sec.textContent="00";
          console.log("Time's up!");
        }
      }, 1000);
});

clear.addEventListener("click", function(){
    clearInterval(timer);
    count=60;
    min.textContent="01";
    sec.textContent = "00";
})