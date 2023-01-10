import hero_img from "./pexels-barhero.jpg";
import { pretzel , beer, peanuts, burger } from "./items";
import "./style.css";

const hero = function() {
    const heroElement = document.createElement("div");
    heroElement.classList.add("hero");
    const heroText = document.createElement("h1");
    heroText.innerHTML = "Old Clonky's Bar";
    heroElement.appendChild(heroText);
    return heroElement}

const button = function(text, elementConstructor) {
    const _button = document.createElement("button");
    _button.addEventListener("click", () => {
        const contentHolder = document.getElementById("holder-window");
        contentHolder.replaceChildren();
        contentHolder.replaceChildren(elementConstructor());
    })
    _button.innerHTML = text;
    return _button;
}

const menu = function() {
    const mainMenu = document.createElement("div");
    mainMenu.classList.add("menu");
    const _pretzel = pretzel;
    mainMenu.appendChild(_pretzel);
    const _beer = beer;
    mainMenu.appendChild(_beer);
    const _peanuts = peanuts;
    mainMenu.appendChild(_peanuts);
    const _burger = burger;
    mainMenu.appendChild(_burger);
    return mainMenu;
}

const home = function() {
    const Home = document.createElement("div");
    Home.classList.add("home");
    const homeContent = document.createElement("div");
    homeContent.classList.add("textbox");
    homeContent.innerHTML = "Clonky's bar serves you a relaxing atmosphere after an exhausting day in the mines. Looking to stay for a prolonged evening or just a snack and a beer on the way? Look no further. Old Clonky's bar got you covered";
    Home.appendChild(homeContent);
    return Home;
}

const about = function() {
    const About = document.createElement("div")
    About.classList.add("about");
    About.innerText = "Placeholder_About";
    return About;
}

const buttonHolderConstructor = function () {
    const buttonHolder = document.createElement("div");
    buttonHolder.classList.add("button-holder");
    const menubutton = button("Menu", menu);
    const homebutton = button("Home", home);
    const aboutbutton = button("About", about);
    buttonHolder.appendChild(homebutton);
    buttonHolder.appendChild(menubutton);
    buttonHolder.appendChild(aboutbutton);
    return buttonHolder;
}

const content_holder = function() {
    const holder = document.createElement("div");
    holder.classList.add("holder");
    holder.appendChild(buttonHolderConstructor());
    const holderWindow = document.createElement("div");
    holderWindow.id = "holder-window";
    holderWindow.appendChild(home());
    holder.appendChild(holderWindow);
    return holder;
}


export { hero , content_holder }
