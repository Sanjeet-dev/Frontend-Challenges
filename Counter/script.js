let count = 0;
function increaseCount(){
    count++;
    document.querySelector("#count").textContent=count;
    document.querySelector("#increase").classList.toggle('small');
}
function decreaseCount(){
    if(count>0){
    count--;
    document.querySelector("#count").textContent=count;
    document.querySelector("#decrease").classList.toggle('small');
    }else{
        console.log("decrease button going below zero")
    }
}
const reset = document.querySelector("#reset");
reset.addEventListener("click",()=>{
    count=0;
    document.querySelector("#count").textContent = count;
})
