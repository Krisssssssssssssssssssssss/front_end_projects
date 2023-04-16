const budgetForm = document.querySelector('#budget-form')
const budgetInput = document.querySelector('.budget-input')

let amountBudget = document.querySelector('#budget-amount')
let amountExpense = document.querySelector('#expense-amount')
let totalBalance = document.querySelector('#balance-amount')

const expenseSubmitBtn = document.querySelector('#expense-submit')

const feedbackBudget = document.querySelector('.budget-feedback')
const feedbackExpense = document.querySelector('.expense-feedback')

let budget = 0;
let expenses = 0;
let balance = budget - expenses;

amountBudget.innerText = budget;
amountExpense.innerText = expenses;
totalBalance.innerText = balance;

// make the input add on to the budget
// add this to the balance
budgetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // if it is an empty field, throw in an error
    if (budgetInput.value == '' || budgetInput.value.includes('-')) {
        feedbackBudget.style.display = "flex";
    }
    

else {
    budget += Number(budgetInput.value)
    balance += Number(budgetInput.value)
    amountBudget.innerText = budget;
    totalBalance.innerText = balance;
    feedbackBudget.style.display = "none";
}
    budgetForm.reset()
    // on focus on the field again, hide the error
    // budgetInput.addEventListener('focus', () => {
    //     feedbackBudget.style.display = "none";
    // })
    budgetInput.addEventListener('click', () => {
        feedbackBudget.style.display = "none";
    })
    

})
// make expenses add onto the expenses
// substract this from the balance
// get the data to create a row

// create a table 
// create and render heathers if the inner html of the table is empty
// add a row in the same
// ...

// if the table has html already just add the new row
// ...

// ...
// add all the table datas with all the buttons
// add event listener to the buttons
// Delete button:
// delete the row
// add the value to the balance

// Edit button:
// add the table data value to the input
// change the submit button Text
// on click, update that row 
// bring the button text back
// make expenses add onto the expenses
// substract this from the balance
