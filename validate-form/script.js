//Write your javascript code here
const nameText = document.querySelector("#name").value.trim();
const mail = document.querySelector("#email").value.trim();
const password = document.querySelector("#pass").value.trim();
document.querySelector("#form").addEventListener("submit",function(event){
    console.log("working form fine!!");
    event.preventDefault();
    let errmsg = "Fill the form correctly.";
    let successmsg = "Form submitted successfully."
    if(!nameText || /^[a-zA-Z ]+$/.test(nameText) === false){
        alert(errmsg);
        return;
    }
    if(!mail || !mail.endsWith("@codingninjas.com")){
        alert(errmsg);
        return;
    }
    if(!password || password.length < 8 || !password.includes("@")){
        alert(errmsg);
        return;
    }
    alert(successmsg);
});

document.querySelector("#clear").addEventListener('click', function(event){
document.querySelector("#form").reset();
})