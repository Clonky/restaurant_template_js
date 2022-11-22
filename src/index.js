import builder from "./menu_item"
import { pretzel } from "./items"

const setup_basis = function() {
    const element = document.createElement("div");
    element.classList.add("content");
    return element;
}

let content = setup_basis();
content.appendChild(pretzel());
document.body.append(content);
