import builder from "./menu_item";
import style from "./style.css";
import { pretzel , beer, peanuts, burger } from "./items";
import {hero} from "./page_parts";

const setup_basis = function() {
    const element = document.createElement("div");
    element.classList.add("content");
    return element;
}

let content = setup_basis();
content.appendChild(pretzel());
content.appendChild(beer());
content.appendChild(peanuts());
content.appendChild(burger());

document.body.append(hero);
document.body.append(content);
