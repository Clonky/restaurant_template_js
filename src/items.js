import {menu_item}_from "./menu_item";
import pretzel_img from "./pexels-yana-nadolinska.jpg"

export { pretzel };

const pretzel = menu_item(document, pretzel_img, "A basket full of warm pretzels", "6.50 €").menu_item_element;
