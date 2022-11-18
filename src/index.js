import menu_item from "./menu_item"

const setup_basis = function() {
    const element = document.createElement("div");
    element.classList.add("content");
    return element;
}

document.body.append(setup_basis());
