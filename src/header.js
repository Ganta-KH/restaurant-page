function createHeader() {
    const header = document.createElement("header");

    const logo = document.createElement("h1");
    logo.classList.add("logo");
    logo.textContent = "Spice & Smoke";

    header.appendChild(logo);
    header.appendChild(createNav());

    return header;
}

function createNav() {
    const ul = document.createElement("ul");

    const homeLi = document.createElement("li");
    const home = document.createElement("button");
    home.textContent = "Home";
    homeLi.appendChild(home);

    const menuLi = document.createElement("li");
    const menu = document.createElement("button");
    menu.textContent = "Menu";
    menuLi.appendChild(menu);

    const contactLi = document.createElement("li");
    const contact = document.createElement("button");
    contact.textContent = "Contact";
    contactLi.appendChild(contact);

    ul.appendChild(homeLi);
    ul.appendChild(menuLi);
    ul.appendChild(contactLi);

    return ul;
}

function initHeader() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
}

export default initHeader;
