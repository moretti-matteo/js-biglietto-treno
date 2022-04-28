let km = 0;
let age = 0;

do {
    km = Number(prompt("how many kilometers do you want to do?"));
    if (isNaN(km)) {
        alert("puoi inserire solo numeri, Riprova")
    }

} while (isNaN(km));

do {
    age = Number(prompt("How old are you?"));
    if (isNaN(age)) {
        alert("puoi inserire solo numeri, Riprova")
    }

} while (isNaN(age));

const ticketPrice = km * 0.21;
let discountedPriceTicket = 0;

if (age < 18) {
    discountedPriceTicket = (ticketPrice * 0.20);
} else if (age >= 65) {
    discountedPriceTicket = (ticketPrice * 0.40);
}

const finalPriceTicket = ticketPrice - discountedPriceTicket;

document.getElementById("ticketPrice").innerHTML = `${finalPriceTicket.toFixed(2)} €`;

console.log(finalPriceTicket.toFixed(2));