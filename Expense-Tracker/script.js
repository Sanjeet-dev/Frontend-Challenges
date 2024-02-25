// Must to have

//     Should have an input tag with type as text , id as "expenseName".
//     Should have an input tag with type as number , id as "amount".
//     Should have an input tag with type as date , id as "date".
//     Should have a button tag with id as "addExpense".
//     The button should trigger a function named "addExpense".
//     A function named "displayExpenses".
//     The button with contect Remove should trigger a function named "removeExpense".
// Functionality tested

//     Use the localstorage for storing the expense with the name of "expenses" (The Expenses added should be stored in Localstorage named as "expenses")
//     addExpense function should add the the particular expense in the localstorage with the of "expenses"
//     For each expense thats been added should have name , amount , date and id as the Date.now()
//     The function named "displayExpenses" should be display the expense from the localstorage to the < li>
//     The function named "removeExpense" should remove the particular expense
const inputArea = document.querySelector(".input-area");
const addExpense = document.querySelector("#addExpense");
const nameInput = document.querySelector("#expenseName");
const amountInput = document.querySelector("#amount");
const  dateInput = document.querySelector("#date");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];


displayExpenses();
addExpense.addEventListener("click",()=>{

    let expense = {
        id:Date.now(),
        name:nameInput.value,
        amount:amount.value,
        date:dateInput.value
    }
    console.log(expenses);
    expenses.push(expense);

    localStorage.setItem('expenses', JSON.stringify('expenses'));

    // inputArea.reset();
    nameInput.value="";
    amount.value="";
    dateInput.value="";

    displayExpenses();

});



function displayExpenses(){
let ulList = document.querySelector("#expenseList");
let template = document.querySelector("#expenseTemplate");
//let total = document.querySelector("#totalAmount");

ulList.innerHTML = "";

expenses.forEach((expense)=>{

        let listItem = document.importNode(template.content,true);
        listItem.querySelector(".expense-name").textContent=expense.name;
        listItem.querySelector(".expense-amount").textContent=expense.amount;
        listItem.querySelector(".expense-date").textContent=expense.date;
        listItem.querySelector("li").dataset.id=expense.id;
        const delBtn = listItem.querySelector("button");
        
        delBtn.addEventListener("click", function(){
            deleteEx(expense.id);
        });

    ulList.appendChild(listItem);
});
    
};

function deleteEx(id){
    expenses = expenses.filter((expense)=> expense.id !== id);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    displayExpenses();
};

function removeExpense(event){
    const listExpense = event.target.closest("li");
    const id = listExpense.dataset.id;
    deleteEx(id);
}