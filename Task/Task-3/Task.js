//! 🛠 Personal Budget Tracker Challenge (Phase 3 - Operators: calculate the remaining balance)
// Challenge Overview:Create a basic personal budget tracker that allows users to enter their incomes and expenses, and then displays their remaining balance using the console. Later, we will extend this project by adding functions, arrays, objects, and DOM manipulation.

// 📌 Challenge Requirements:
/*
Declare variables for:
User's name (string)
single Income amount (number)
multiple Expense amount (number)
Remaining balance (calculated)
Use console.log() to:
Display the user’s name.
Show the income, expenses, and balance.
Format the output neatly.
Add comments to explain calculation
*/

// Declare variables
let userName = 'Adham Zarif'; // String
let income = 5000; // Number
let expenses1 = 3000; // Number
let expenses2 = 3000; // Number
let expenses = expenses1 + expenses2
let balance = income - expenses1 - expenses2; // Calculation

// Display the budget details in console
console.log('📊 Personal Budget Tracker');
console.log('User: ' + userName);
console.log('💰 Total Income: $' + income);
console.log('💸 Total Expenses: $' + expenses);
console.log('🟢 Remaining Balance: $' + balance);
