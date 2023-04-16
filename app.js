const budgetForm = $('#budget-form');
const expenseForm = $('#expense-form');

const budgetInput = $('.budget-input');
const expenseDescription = $('#expense-input');
const expenseAmount = $('#amount-input');

let amountBudget = $('#budget-amount');
let amountExpense = $('#expense-amount');
let totalBalance = $('#balance-amount');

const expenseSubmitBtn = $('#expense-submit');

const feedbackBudget = $('.budget-feedback');
const feedbackExpense = $('.expense-feedback');
const table = $('#my-table');

let budget = 0;
let expenses = 0;
let balance = budget - expenses;

amountBudget.text(budget);
amountExpense.text(expenses);
totalBalance.text(balance);

budgetForm.on('submit', function(e) {
  e.preventDefault();

  if (budgetInput.val() == '' || budgetInput.val().includes('-')) {
    feedbackBudget.css('display', 'flex');
  } else {
    budget += Number(budgetInput.val());
    balance += Number(budgetInput.val());
    amountBudget.text(budget);
    totalBalance.text(balance);
  }
  budgetForm.trigger('reset');
  budgetInput.on('click', () => {
    feedbackBudget.css('display', 'none');
  });
});

class Expense {
  constructor(title, value) {
    this.title = title.val();
    this.value = value.val();
  }
}

expenseForm.on('submit', function(e) {
  e.preventDefault();
  if (
    expenseDescription.val() == '' ||
    expenseAmount.val() == '' ||
    expenseAmount.val().includes('-')
  ) {
    feedbackExpense.css('display', 'flex');
  } else {
    let newExpense = new Expense(expenseDescription, expenseAmount);

    let tr = $('<tr></tr>');

    let tdTitle = $('<td></td>');
    tdTitle.addClass('text-center');
    tdTitle.text(newExpense.title);

    let tdValue = $('<td></td>');
    tdValue.addClass('text-center');
    tdValue.text(newExpense.value);

    let tdActions = $('<td></td>');

    tr.append(tdTitle, tdValue, tdActions);

    let editBtn = $('<button></button>');
    editBtn.html(
      '<i class="fa-solid fa fa-edit" style="color: rgb(125, 163, 221);"></i>'
    );
    editBtn.addClass('btn btn-sm m-2');
    tdActions.append(editBtn);

    let deleteBtn = $('<button></button>');
    deleteBtn.html('<i class="fa fa-trash" style="color: red;"></i>');
    deleteBtn.addClass('btn btn-sm m-2');
    tdActions.append(deleteBtn);

    deleteBtn.on('click', function() {
      tr.remove();

      expenses -= Number(newExpense.value);
      balance = budget - expenses;
      amountExpense.text(expenses);
      totalBalance.text(balance);
    });

    editBtn.on('click', function() {
      expenseDescription.val(newExpense.title);
      expenseAmount.val(newExpense.value);
      tr.remove();

      expenses -= Number(newExpense.value);
      balance = budget - expenses;
      amountExpense.text(expenses);
      totalBalance.text(balance);
    });

    if (table.html() === '') {
      let thr = $('<tr></tr>');
      let thdTitle = $('<th></th>');
      thdTitle.addClass('text-center');
      thdTitle.text('Expense Title');
      let thdValue = $('<th></th>');
      thdValue.addClass('text-center');
      thdValue.text('Expense Value');
      let thdActions = $('<th></th>');
      thdActions.text('');
      thr.append(thdTitle, thdValue, thdActions);
      table.append(thr);
    }

    table.append(tr);
    expenses += Number(expenseAmount.val());
balance = budget - expenses;
amountExpense.text(expenses);
totalBalance.text(balance);
 }
 $('#expense-form').trigger('reset');
 $('#expense-form').click(() => {
    $('.expense-feedback').hide();
 })
})