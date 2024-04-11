// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// Test No 1.
let eid = "10th Apr 2024";
console.log("is eid == '10th Apr 2023'? I pridict False.");
console.log(eid == "10th Apr 2023");
// Test No 2.
console.log("is eid == '10th Apr'? I pridict False.");
console.log(eid == "10th Apr");
// Test No 3.
console.log("is eid === '10th Apr'? I pridict False.");
console.log(eid === "10th Apr");
// Test No 4.
console.log("is eid !== '10th Apr 2024'? I pridict False.");
console.log(eid !== "10th Apr 2024");
// Test No 5.
console.log("is eid.lenght > 15? I pridict False.");
console.log(eid.length > 15);
// Test No 6.
console.log("is eid.lenght < 15? I pridict True.");
console.log(eid.length < 15);
// Test No 7.
console.log("is eid.toUpperCase() !== '10th Apr 2024'? I pridict True.");
console.log(eid.toUpperCase() !== '10th Apr 2024');
// Test No 8.
console.log("Is eid.includes('h')? I predict True.");
console.log(eid.includes('h'));
// Test No 9.
console.log("Is eid.starWith(10)? I predict True.");
console.log(eid.startsWith('10'));
// Test No 10.
console.log("Is eid.endsWith('2024)? I predict True.");
console.log(eid.endsWith('2024'));
export {};
