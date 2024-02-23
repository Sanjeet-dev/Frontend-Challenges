//Write your javascript code here
const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#pass");

form.addEventListener("submit", function(event){
    event.preventDefault();
    const nameText = nameInput.value.trim();
    const mail = emailInput.value.trim();
    const password = passwordInput.value.trim();

    let errmsg = "Fill the form correctly.";
    let successmsg = "Form submitted successfully.";

    if(!nameText || /^[a-zA-Z ]+$/.test(nameText) === false){
        alert(errmsg);
        return false; // Prevent form submission
    }
    if(!mail || !mail.endsWith("@codingninjas.com")){
        alert(errmsg);
        return false; // Prevent form submission
    }
    if(!password || password.length < 8 || !password.includes("@")){
        alert(errmsg);
        return false; // Prevent form submission
    }
    alert(successmsg);
    return false; // Prevent form submission
});

document.querySelector(".cancelbtn").addEventListener('click', function(event){
    form.reset();
});

function verify(){
    alert("Verification Code has been sent to your mail");
}