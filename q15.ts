// Changing Guest

let guest_list = ["Ali Raza", "Safi Ullah", "Owais Ishrat", "Zia ul Hassan"]

// one guest not available for dinner

let guest_not_available = guest_list[2]

// print guest who is not coming

console.log(guest_not_available, "not come in dinner")

// replacing the name of the guest who can’t make it with the name of the new person

guest_list.splice(2, 1, "Usama Khalid")

//  Print a second set of invitation messages, one for each person who is stil

guest_list.forEach(new_guest_list => console.log(`Hello ${new_guest_list}, would you like take dinner with us on sunday`))