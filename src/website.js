import createHeader from "./header";
import createHome from "./home";
import createMenu from "./menu";

function createContent() {
    const main = document.createElement("main");
    main.classList.add("main");

    main.appendChild(createMenu());

    return main;
}

function initWebsite() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createContent());
}

export default initWebsite;
