import createHeader from "./header";
import createHome from "./home";

function createContent() {
    const main = document.createElement("main");
    main.classList.add("main");

    main.appendChild(createHome());

    return main;
}

function clearMain() {
    const main = document.querySelector("main");
    main.innerHTML = "";
}

function fillMain(page) {
    const main = document.querySelector("main");

    main.appendChild(page);
}

function initWebsite() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createContent());
}

export { clearMain, fillMain };
export default initWebsite;
