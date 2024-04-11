// Store the locations in a array. Make sure the array is not in alphabetical order.

let guestList = ["Ali Raza", "Raja M Waqas", "Hamza Bhatti", "Owais Ishrat", "Danish Siddiqui"]

// Print the array in its original order.

console.log("Original Order.", guestList);

// Print the array in alphabetical order without modifying the actual list.

console.log("Alphabatical Order.", guestList.slice().sort());

// Show that the array is still in its original order by printing it.

console.log("Original Order.", guestList);

// Print  array in reverse alphabetical order without changing the order of the original list.

console.log("Reversed Order.", guestList.slice().reverse());

// Show that array is still in its original order by printing it again

console.log("Original Order.", guestList);

// Reverse the order of your list. Print the array to show that its order has changed.

guestList.reverse();
console.log("Reversed Order.", guestList)

// Reverse the order of your list again. Print the list to show it’s back to its original order.

console.log("Original Order", guestList.reverse());
console.log("Original Order", guestList)

// Sort the array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

guestList.sort();
console.log("Sort Order", guestList)

// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
guestList.reverse()
console.log("Changed or Updated Order",guestList)





