import hero_img from "./pexels-barhero.jpg";
import "./style.css";

const hero = function() {
    const hero_element = document.createElement("div");
    hero_element.classList.add("hero");
    const hero_text = document.createElement("h1");
    hero_text.innerHTML = "Old Clonky's Bar";
    hero_element.appendChild(hero_text);
    return hero_element}()

export { hero }
