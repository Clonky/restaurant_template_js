import "./style.css";
const builder = ( function(ctx, img, description, price) {
    "use strict";

    const element = ctx.createElement("div");
    element.classList.add("menu-item");

    const _insert_img = function(element, img_src) {
        const image = new Image();
        image.src = img_src;
        image.classList.add("menu-item-image");
        element.appendChild(image);
        return element;
    }

    const _insert_description = function(element, desc) {
        const description_element = ctx.createElement("div");
        description_element.innerHTML = desc;
        description_element.classList.add("menu-item-description");
        element.appendChild(description_element);
        return element;
    }

    const _insert_price = function(element, price_txt) {
        const price_element = ctx.createElement("div");
        price_element.innerHTML = price_txt;
        price_element.classList.add("menu-item-price");
        element.appendChild(price_element);
        return element;
    }

    const menu_item_element = function() {
        return _insert_price(_insert_description(_insert_img(element, img), description), price);
    }

    return {
        menu_item_element: menu_item_element
    };
})

export { builder };
