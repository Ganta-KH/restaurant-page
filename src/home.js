import createMenu from "./menu";
import { clearMain, fillMain } from "./website";

function createHome() {
    const card = document.createElement("div");
    card.classList.add("card");

    const about = document.createElement("h1");
    about.classList.add("about");
    about.textContent =
        "Spice up your taste buds and indulge in the smoky flavors at Spice & Smoke restaurant.";

    const orderBtn = document.createElement("button");
    orderBtn.classList.add("order");
    orderBtn.textContent = "Order Now";
    orderBtn.addEventListener("click", () => {
        clearMain();
        fillMain(createMenu());
    });

    card.appendChild(about);
    card.appendChild(orderBtn);
    return card;
}

export default createHome;
