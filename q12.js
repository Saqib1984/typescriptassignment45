// Store the names of a few of your friends in a array called names
let friends_name = ["Ali", "Hamza", "Khawar", "Imran"];
// . Print each person’s name and message (The text of each message should be the same)
friends_name.forEach(friend => console.log(`Hello ${friend}, hope you are doing well.`));
// Now above statement through for loop
let new_friends_name = ["Ali", "Hamza", "Khawar", "Imran"];
for (let i = 0; i < new_friends_name.length; i++) {
    console.log(`Hello ${new_friends_name[i]}, hope you are doing well.`);
}
export {};
