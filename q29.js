/* Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
let favorite_fruits = ["mango", "peach", "cherry"];
if (favorite_fruits.includes("mango")) {
    console.log("You really like mangos");
}
if (favorite_fruits.includes("peach")) {
    console.log("You really like peaches");
}
if (favorite_fruits.includes("cherry")) {
    console.log("You really like cherry");
}
if (favorite_fruits.includes("strawberry")) {
    console.log("You really like strawberries!");
}
if (favorite_fruits.includes("kiwi")) {
    console.log("You really like kiwis!");
}
export {};
