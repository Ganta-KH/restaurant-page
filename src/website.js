import createHeader from "./header";
import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";

function createContent() {
    const main = document.createElement("main");
    main.classList.add("main");

    main.appendChild(createContact());

    return main;
}

function initWebsite() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createContent());
}

export default initWebsite;
