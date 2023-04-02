import createHeader from "./header";
import createHome from "./home";

function createContent() {
    const main = document.createElement("main");
    main.classList.add("main");

    main.appendChild(createHome());

    return main;
}

function initWebsite() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createContent());
}

export default initWebsite;
