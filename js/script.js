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
let discount = 0;

if (age < 18) {
    discount = (ticketPrice * 0.20);
} else if (age >= 65) {
    discount = (ticketPrice * 0.40);
}

const finalPriceTicket = ticketPrice - discount;

document.getElementById("ticketPrice").innerHTML = `${finalPriceTicket.toFixed(2)}€`;

if(discount > 0){
    document.getElementById("line").classList.remove("hidden");
    document.getElementById("initialPrice").innerHTML = `Initial price: ${ticketPrice.toFixed(2)}€`;
    document.getElementById("discount").innerHTML = `Discount applied: -${discount.toFixed(2)}€`;
}
