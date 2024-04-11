// Seeing the World: Think of at least five places in the world would like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
let worldPlaces = ["Makkah", "Madina", "Karachi", "Kashmir", "Ghaza", "Hunza"];
// Print the array in its original order.
console.log("Original Order.", worldPlaces);
// Print the array in alphabetical order without modifying the actual list.
console.log("Alphabatical Order.", worldPlaces.slice().sort());
// Show that the array is still in its original order by printing it.
console.log("Original Order.", worldPlaces);
// Print  array in reverse alphabetical order without changing the order of the original list.
console.log("Reversed Order.", worldPlaces.slice().reverse());
// Show that array is still in its original order by printing it again
console.log("Original Order.", worldPlaces);
// Reverse the order of your list. Print the array to show that its order has changed.
worldPlaces.reverse();
console.log("Reversed Order.", worldPlaces);
// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Original Order", worldPlaces.reverse());
console.log("Original Order", worldPlaces);
// Sort the array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
worldPlaces.sort();
console.log("Sort Order", worldPlaces);
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
worldPlaces.reverse();
console.log("Changed or Updated Order", worldPlaces);
export {};
