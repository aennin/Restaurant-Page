import "./styles.css";

import loadHomepage from "./home.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";

loadHomepage();

const content = document.getElementById("content");

function clearContent () {
    content.innerHTML = "";
}

document.getElementById("home").addEventListener("click", () => {
    content.className = "home";
    clearContent();
    loadHomepage();
});

document.getElementById("menu").addEventListener("click", () =>{
    content.className = "menu";
    clearContent();
    loadMenu();
});

document.getElementById("about").addEventListener("click", () => {
    content.className = "about";
    clearContent();
    loadAbout();
});

