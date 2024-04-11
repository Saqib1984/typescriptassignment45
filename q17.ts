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

//Q 17

console.log("Unfortunately our new big table for dinner won’t arrive in time for the dinner, and we have space for only two guests.")

while (guestList.length > 2) {
    let removeList = guestList.pop()
    console.log(`Sorry ${removeList}, you are not invite for dinner party due to not arrangment of enough place`)
}
console.log("still you are invited in dinner party")
guestList.forEach(finalList => console.log(`luckily ${finalList}, still you are invited for dinner party on sunday`))

// remove last two guest and print empty list 
guestList.pop()
guestList.pop()

console.log(`empty list [], ${guestList}`)
