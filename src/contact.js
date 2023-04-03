function createContact() {
    const card = document.createElement("div");
    card.classList.add("card");

    const number = document.createElement("h1");
    number.classList.add("about");
    number.textContent = "123-456-789";

    const address = document.createElement("h1");
    address.classList.add("about");
    address.textContent = "Algeria - Jijel";

    card.appendChild(number);
    card.appendChild(address);

    return card;
}

export default createContact;
