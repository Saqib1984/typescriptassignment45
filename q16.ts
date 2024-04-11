// Changing Guest

let guestList = ["Ali Raza", "Safi Ullah", "Owais Ishrat", "Zia ul Hassan"]

// one guest not available for dinner

let guestNotAvailable = guestList[2]

// print guest who is not coming

console.log(guestNotAvailable, "not come in dinner")

// replacing the name of the guest who can’t make it with the name of the new person

guestList.splice(2, 1, "Usama Khalid")

console.log("I found a bigger table for dinner that is why i am arranging to big party")

guestList.unshift("Kabeer Khan")

guestList.push("Saeed Ahmed")

let middleGuest : number = Math.floor(guestList.length / 2)

guestList.splice(middleGuest, 0, "Hamza Abbasi")

console.log("Updated guest list for dinner party")

guestList.forEach(newGuestInvited => console.log(`Hello ${newGuestInvited}, would you like to take dinner with us on sunday`))