import builder from "./menu_item";
import style from "./style.css";
import { pretzel , beer, peanuts, burger } from "./items";
import {hero, content_holder} from "./page_parts";

const setup_basis = function() {
    const element = document.createElement("div");
    element.classList.add("content");
    return element;
}

let content = setup_basis();
let sub_content = content_holder();

document.body.append(hero());
document.body.append(setup_basis());
document.body.append(content_holder());
