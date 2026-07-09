// Get first name from user
let firstName = prompt("Enter your first name:");

// Get last name from user
let lastName = prompt("Enter your last name:");

// Add without using library function
let fullName = firstName + " " + lastName;

// Print full name
document.write("Full Name: " + fullName + "<br>");

// Total length of full name
document.write("Total Length: " + fullName.length + "<br>");

// Convert full name into uppercase
document.write("Uppercase: " + fullName.toUpperCase() + "<br>");

// Print the 2nd position character from full name
document.write("2nd Position Character: " + fullName.charAt(1));