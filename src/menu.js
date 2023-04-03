function createMenu() {
    const card = document.createElement("div");
    card.classList.add("card");

    for (let i = 0; i < 4; i++) {
        card.appendChild(createDish());
    }

    return card;
}

function createDish() {
    const dish = document.createElement("div");
    dish.classList.add("dish");

    const dishImg = document.createElement("img");
    dishImg.src = "../src/images/bbq.png";
    dishImg.alt = "Dish Image";

    const dishInfo = document.createElement("div");
    dishInfo.classList.add("dish-info");

    const dishTitle = document.createElement("h2");
    dishTitle.textContent = "Dish Title";

    const dishIngredient = document.createElement("p");
    dishIngredient.textContent = "meat, peppers, ..., dish ingredient";

    dishInfo.appendChild(dishTitle);
    dishInfo.appendChild(dishIngredient);

    dish.appendChild(dishImg);
    dish.appendChild(dishInfo);

    return dish;
}

export default createMenu;
