function calculateAge(){
    console.log("btn clicked");

    const dob = document.querySelector("#birthday").value;
    if(!dob){
        alert("Please Enter your birthdate:");
        return;
    }
    let birthday = new Date(dob);
    let today = new Date();
    
    const yearDiff = today.getFullYear()-birthday.getFullYear();
    const monthDiff = today.getMonth()-birthday.getMonth();
    if(monthDiff<0 || (monthDiff === 0 && today.getDate()<birthday.getDate())){
        yearDiff--;
    }
    console.log(yearDiff);
    document.querySelector("#result").textContent=yearDiff;
    
}